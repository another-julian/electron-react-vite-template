import { Project } from '@shared/models'

declare global {
  interface Window {
    api: {
      getProjects: () => Promise<Project[]>
      addProject: (project: Project) => Promise<boolean>
      deleteProject: (id: string) => Promise<boolean>
      deleteProjects: (ids: string[]) => Promise<boolean>
      updateProject: (project: Project) => Promise<boolean>
    }
  }
}

export {}
