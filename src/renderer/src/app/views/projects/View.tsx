import ProjectsList from '@renderer/app/ui/projects/projects-list'
import { JSX } from 'react'

export default function View(): JSX.Element {
  return (
    <div>
      <ProjectsList className="space-y-4" />
    </div>
  )
}
