import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className="layout">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="layout-body">
        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
