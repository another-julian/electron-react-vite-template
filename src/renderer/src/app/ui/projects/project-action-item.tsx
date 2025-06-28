import { cn } from '@renderer/app/lib/utils'
import { ComponentProps, JSX, ReactNode } from 'react'

interface ProjectItemActionProps extends ComponentProps<'li'> {
  children?: ReactNode
  icon: JSX.Element
}

export default function ProjectActionItem({
  className,
  icon,
  children,
  ...rest
}: ProjectItemActionProps): JSX.Element {
  return (
    <li className={cn('flex items-center gap-2 px-2 h-full', className)} {...rest}>
      <span className="hidden md:block">{children}</span>
      {icon}
    </li>
  )
}
