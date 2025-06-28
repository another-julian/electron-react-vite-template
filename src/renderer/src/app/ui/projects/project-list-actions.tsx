import { useProjects } from '@renderer/app/hooks/projects/projectContext'
import { cn } from '@renderer/app/lib/utils'
import { JSX } from 'react'
import { MdArrowForward, MdContentCopy, MdDelete } from 'react-icons/md'
import ProjectActionItem from './project-action-item'

type ProjectItemActionProps = {
  id: string
}

export default function ProjectItemsActions({ id }: ProjectItemActionProps): JSX.Element {
  const { remove } = useProjects()

  const actions = [
    {
      icon: <MdArrowForward />,
      label: 'Abrir',
      onClick: () => console.log('Ver')
    },

    {
      icon: <MdContentCopy />,
      label: 'Duplicar',
      onclick: () => console.log('Duplicar')
    },
    {
      icon: <MdDelete />,
      label: 'Eliminar',
      onClick: async () => await remove(id)
    }
  ]
  return (
    <ul className="flex items-center gap-5">
      {actions.map((action, index) => (
        <ProjectActionItem
          key={index}
          className={cn('hover:cursor-pointer hover:text-blue-500', {
            'hover:text-red-500': action.label === 'Eliminar'
          })}
          icon={action.icon}
          onClick={action.onClick}
        >
          {action.label}
        </ProjectActionItem>
      ))}
    </ul>
  )
}
