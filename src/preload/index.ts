import { contextBridge, ipcRenderer } from 'electron'
import { GetNotes } from 'src/shared/types'

if (!process.contextIsolated)
  throw new Error('contextIsolation must be enabled in the BrowserWindow')

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args)
  })
} catch (error) {
  console.error(error)
}
