import { platform } from 'os'
import bindings from 'bindings'
import type { Drive } from './types'

const drivelistBindings = bindings('drivelist-osx')

function bindingsList(): Promise<Drive[]> {
  return new Promise((resolve, reject) => {
    drivelistBindings.list((error: Error, drives: Drive[]) => {
      if (error)
        reject(error)

      else
        resolve(drives)
    })
  })
}

const APFS = 'AppleAPFSMedia'

function handleAPFSDrive(drivers: Drive[]): void {
  const APFSList: Drive[] = drivers.filter(drive => drive.description === APFS)
  const other: Drive[] = drivers.filter(drive => drive.description !== APFS)

  for (const drive of APFSList) {
    const source = other.find(
      d => d.devicePath === drive.devicePath && !d.isVirtual,
    )
    if (source !== undefined) {
      source.mountpoints.push(...drive.mountpoints)
      drive.isVirtual = true
    }
  }
}

export async function list(debug = false): Promise<Drive[]> {
  const plat = platform()
  if (plat === 'darwin' || debug) {
    const list = await bindingsList()
    handleAPFSDrive(list)
    return list
  }

  throw new Error(`Your OS is not supported by this module: ${platform()}`)
}
