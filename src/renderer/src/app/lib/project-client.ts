import { Project } from '@shared/models'

export async function fetchProjects(): Promise<Project[]> {
  return await window.api.getProjects()
}

export async function addNewProject(project: Project): Promise<boolean> {
  return await window.api.addProject(project)
}

export async function deleteProjectById(id: string): Promise<boolean> {
  return await window.api.deleteProject(id)
}

export async function deleteMultipleProjects(ids: string[]): Promise<boolean> {
  return await window.api.deleteProjects(ids)
}

export async function updateExistingProject(project: Project): Promise<boolean> {
  return await window.api.updateProject(project)
}
