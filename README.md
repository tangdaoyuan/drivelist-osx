# drivelist-osx

> Get driver list in OSX.

## Install

```bash
npm install @suger-tdy/drivelist-osx -g
```

## Usage

```bash
drivelist-osx
```

## Programmatic API

```ts
import { list } from '@suger-tdy/drivelist-osx'

const drivers = await list()

console.log(drivers)

// output:
// [
//   {
//     enumerator: 'DiskArbitration',
//     busType: 'Virtual Interface',
//     busVersion: null,
//     device: '/dev/disk5',
//     devicePath: 'IODeviceTree:/',
//     raw: '/dev/rdisk5',
//     description: 'Apple Disk Image Media',
//     partitionTableType: 'gpt',
//     error: null,
//     size: 89169920,
//     blockSize: 512,
//     logicalBlockSize: 512,
//     mountpoints: [
//       {
//         path: '/Volumes/qBittorrent 4.4.3.1',
//         label: 'qBittorrent 4.4.3.1',
//       },
//     ],
//     isReadOnly: true,
//     isSystem: false,
//     isVirtual: true,
//     isRemovable: true,
//     isCard: false,
//     isSCSI: false,
//     isUSB: false,
//     isUAS: null,
//   },
//   {
//     enumerator: 'DiskArbitration',
//     busType: 'Virtual Interface',
//     busVersion: null,
//     device: '/dev/disk6',
//     devicePath: 'IODeviceTree:/',
//     raw: '/dev/rdisk6',
//     description: 'Apple Disk Image Media',
//     partitionTableType: null,
//     error: null,
//     size: 311427072,
//     blockSize: 512,
//     logicalBlockSize: 512,
//     mountpoints: [
//       {
//         path: '/Volumes/TexturePacker',
//         label: 'TexturePacker',
//       },
//     ],
//     isReadOnly: true,
//     isSystem: false,
//     isVirtual: true,
//     isRemovable: true,
//     isCard: false,
//     isSCSI: false,
//     isUSB: false,
//     isUAS: null,
//   }
// ]
```
