import { JSX } from 'react'
import Layout from './app/Layout'
import View from './app/View'

export default function App(): JSX.Element {
  return (
    <div>
      <Layout>
        <View />
      </Layout>
    </div>
  )
}
