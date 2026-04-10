import { useState } from 'react'
import Layout from './components/layout/Layout'
import ContentPage from './pages/ContentPage'

const mdxModules = import.meta.glob('./content/**/*.mdx', { eager: true })

const pages = Object.fromEntries(
  Object.entries(mdxModules).map(([path, mod]) => {
    const id = path.replace('./content/', '').replace(/\.mdx$/, '')
    const Content = mod.default
    return [id, () => <ContentPage Content={Content} />]
  })
)

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const Page = pages[currentPage] ?? (() => <p>Page not found.</p>)

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <Page />
    </Layout>
  )
}
