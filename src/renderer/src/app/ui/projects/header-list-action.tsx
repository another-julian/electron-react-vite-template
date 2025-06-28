import Button from '@app/ui/button'
import { useProjects } from '@renderer/app/hooks/projects/projectContext'
import { useSelect } from '@renderer/app/hooks/projects/selectContext'
import { cn } from '@renderer/app/lib/utils'
import { createEmptyProject } from '@shared/models'
import { JSX } from 'react'
import { MdCancel, MdContentCopy, MdDelete, MdOutlineLibraryAddCheck } from 'react-icons/md'

export default function HeaderListAction(): JSX.Element {
  const { select, selectedIds, enableSelect, disableSelect } = useSelect()
  const { projects, add, removeMany } = useProjects()

  const handleAdd = (): void => {
    const nuevoProyecto = createEmptyProject(`Proyecto número #${projects.length + 1}`)
    disableSelect()
    add(nuevoProyecto)
  }

  const handleRemove = (): void => {
    disableSelect()
    removeMany(selectedIds)
  }

  const listAction = select
    ? [
        {
          name: 'Seleccionar todo',
          icon: MdOutlineLibraryAddCheck
        },

        {
          name: 'Duplicar',
          icon: MdContentCopy
        },
        {
          name: 'Eliminar',
          icon: MdDelete,
          onclick: () => handleRemove(),
          hover: 'hover:text-red-500'
        },
        {
          name: 'Cancelar',
          icon: MdCancel,
          onclick: () => disableSelect(),
          hover: 'hover:text-gray-500'
        }
      ]
    : [
        {
          name: 'Seleccionar',
          icon: MdOutlineLibraryAddCheck,
          onclick: () => enableSelect()
        }
      ]
  return (
    <div className="flex justify-between items-center">
      <Button buttonType="add" onClick={handleAdd} />
      {select}
      <ul className="flex">
        {listAction.map((action, index) => (
          <li
            key={index}
            className={cn(
              'flex items-center gap-2 h h-full px-2 hover:text-blue-500 hover:cursor-pointer',
              action.hover
            )}
            aria-label={action.name}
            onClick={action.onclick ? action.onclick : () => {}}
          >
            <span className="hidden md:block">{action.name}</span>
            <action.icon />
          </li>
        ))}
      </ul>
    </div>
  )
}
