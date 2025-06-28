import {
  addNewProject,
  deleteMultipleProjects,
  deleteProjectById,
  fetchProjects,
  updateExistingProject
} from '@app/lib/project-client'
import { Project, ProjectInfo } from '@shared/models'
import { createContext, useContext, useEffect, useState } from 'react'

interface ProjectContextType {
  projects: ProjectInfo[]
  refresh: () => void
  add: (project: Project) => void
  remove: (id: string) => void
  removeMany: (ids: string[]) => void
  update: (project: Project) => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<ProjectInfo[]>([])
  const refresh = async (): Promise<void> => {
    const data = await fetchProjects()
    setProjects(data.map((project) => project.projectInfo))
  }

  useEffect(() => {
    refresh()
  }, [])

  const add = async (project: Project): Promise<void> => {
    await addNewProject(project)
    refresh()
  }

  const remove = async (id: string): Promise<void> => {
    await deleteProjectById(id)
    refresh()
  }

  const removeMany = async (ids: string[]): Promise<void> => {
    await deleteMultipleProjects(ids)
    refresh()
  }

  const update = async (project: Project): Promise<void> => {
    await updateExistingProject(project)
    refresh()
  }

  return (
    <ProjectContext.Provider value={{ projects, refresh, add, remove, removeMany, update }}>
      {children}
    </ProjectContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, react-refresh/only-export-components
export function useProjects() {
  const ctx = useContext(ProjectContext)
  if (!ctx) throw new Error('useProjects debe usarse dentro de <ProjectProvider>')
  return ctx
}
