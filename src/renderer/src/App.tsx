import { JSX } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './app/views/projects/Layout'
import View from './app/views/projects/View'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
