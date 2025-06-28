import { ProjectPreviewProps } from '@app/lib/definitions'
import { cn } from '@app/lib/utils'
import { useSelect } from '@renderer/app/hooks/projects/selectContext'
import { createElement, JSX } from 'react'
import { MdBorderColor } from 'react-icons/md'
import ProjectItemsActions from './project-list-actions'

export default function ProjectPreview({
  name,
  className,
  id,
  createdAt,
  ...rest
}: ProjectPreviewProps): JSX.Element {
  const { select, toggleSelect, isSelected } = useSelect()

  const Wrapper = select ? 'label' : 'div'

  return createElement(
    Wrapper,
    {
      className: cn(
        'flex justify-between py-6 px-4 border border-gray-300 rounded shadow-md hover:bg-gray-200',
        {
          'bg-blue-200 hover:bg-blue-100': isSelected(id)
        },
        className
      ),
      ...rest
    },
    <>
      <div className="w-full items-center gap-2">
        <div className="flex gap-2">
          {select && (
            <input
              type="checkbox"
              className="mr-2"
              checked={isSelected(id)}
              onChange={() => toggleSelect(id)}
            />
          )}
          <h3>{name}</h3>
          {!select && (
            <span className="hover:cursor-pointer hover:text-blue-500">
              <MdBorderColor />
            </span>
          )}
        </div>
        <span className="text-gray-500 text-sm">
          creado el {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
      {!select && <ProjectItemsActions id={id} />}
    </>
  )
}
