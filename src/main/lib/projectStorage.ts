import { app } from 'electron'
import fs from 'fs'
import path from 'path'
import { Project } from '../../shared/models'

const filePath = path.join(app.getPath('userData'), 'projects.json')

function ensureFileExists(): void {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2))
  }
}

export function getProjects(): Project[] {
  ensureFileExists()
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

export function addProject(project: Project): void {
  const data = getProjects()
  data.push(project)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export function deleteProject(id: string): void {
  const data = getProjects().filter((p) => p.projectInfo.id !== id)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export function deleteProjects(ids: string[]): void {
  const data = getProjects().filter((p) => !ids.includes(p.projectInfo.id))
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export function updateProject(updated: Project): void {
  const projects = getProjects()
  const updatedProjects = projects.map((p) =>
    p.projectInfo.id === updated.projectInfo.id ? updated : p
  )

  fs.writeFileSync(filePath, JSON.stringify(updatedProjects, null, 2))
}
