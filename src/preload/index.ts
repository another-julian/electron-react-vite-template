import { contextBridge } from 'electron'
//import { electronAPI } from '@electron-toolkit/preload'
import { ipcRenderer } from 'electron'
// Custom APIs for renderer
//const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

contextBridge.exposeInMainWorld('api', {
  getProjects: () => ipcRenderer.invoke('get-projects'),
  addProject: (project) => ipcRenderer.invoke('add-project', project),
  deleteProject: (id) => ipcRenderer.invoke('delete-project', id),
  deleteProjects: (ids) => ipcRenderer.invoke('delete-projects', ids),
  updateProject: (project) => ipcRenderer.invoke('update-project', project)
})

if (process.contextIsolated) {
  try {
    //contextBridge.exposeInMainWorld('electron', electronAPI)
    //contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('context', {
      //TODO
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  //window.electron = electronAPI
  // @ts-ignore (define in dts)
  //window.api = api
  throw new Error('context isolation must be enable in the browser window')
}
