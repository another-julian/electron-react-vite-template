import Header from '@renderer/app/ui/projects/header'
import { JSX } from 'react'
import { Outlet } from 'react-router-dom'
import { ProjectProvider } from '../../hooks/projects/projectContext'
import { SelectProvider } from '../../hooks/projects/selectContext'

export default function Layout(): JSX.Element {
  return (
    <div>
      <ProjectProvider>
        <SelectProvider>
          <Header />
          <main className="max-w-[1200px] mx-auto px-10 py-10">
            <Outlet />
          </main>
        </SelectProvider>
      </ProjectProvider>
    </div>
  )
}
