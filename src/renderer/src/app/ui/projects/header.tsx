import { cn } from '@renderer/app/lib/utils'
import { ComponentProps, JSX, memo } from 'react'
import HeaderListAction from './header-list-action'

function Header({ className, ...rest }: ComponentProps<'header'>): JSX.Element {
  return (
    <header className={cn('w-full', className)} {...rest}>
      <div className="flex flex-col py-10 px-10 gap-10 max-w-[1200px] mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Mis Emprendimientos
        </h2>
        <HeaderListAction />
      </div>
      <hr className="border-t border-gray-300" />
    </header>
  )
}

export default memo(Header)
