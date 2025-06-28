import { cn } from '@app/lib/utils'
import { useProjects } from '@renderer/app/hooks/projects/projectContext'
import ProjectPreview from '@renderer/app/ui/projects/project-item'
import { ComponentProps, JSX } from 'react'

export default function ProjectsList({ className, ...rest }: ComponentProps<'ul'>): JSX.Element {
  const { projects } = useProjects()
  const projectsItems = (projects || []).map((project) => (
    <li key={project.id}>
      <ProjectPreview {...project} />
    </li>
  ))
  return (
    <ul className={cn(className)} {...rest}>
      {projectsItems.length ? (
        projectsItems
      ) : (
        <span>Crea tu primer proyecto! Haz click en {'"Añadir"'}</span>
      )}
    </ul>
  )
}
