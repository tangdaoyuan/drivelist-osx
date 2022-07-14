import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  test: {
    isolate: false,
  },
})
