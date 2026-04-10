import { useState } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const pages = {
  home: Home,
  about: About,
  projects: Projects,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const Page = pages[currentPage]

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <Page onNavigate={setCurrentPage} />
    </Layout>
  )
}
