
import { X } from "lucide-react"
import "../styles/Sidebar.css"
import {generalLinks,testLinks} from '../data/CommonData.js'

const iconMap = {
  dashboard: "📊",
  history: "📋",
  calendar: "📅",
  appointments: "🗓️",
  chat: "💬",
  support: "🎧",
  setting: "⚙️",
}

const Sidebar = ({ isOpen, onClose }) => {
  

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">GENERAL</h3>
            <ul className="nav-list">
              {generalLinks.map((link) => (
                <li key={link.id} className={`nav-item ${link.active ? "active" : ""}`}>
                  <a href="#" className="nav-link" onClick={onClose}>
                    <span className="nav-icon">{iconMap[link.icon]}</span>
                    <span className="nav-text">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">TESTS</h3>
            <ul className="nav-list">
              {testLinks.map((link) => (
                <li key={link.id} className={`nav-item ${link.active ? "active" : ""}`}>
                  <a href="#" className="nav-link" onClick={onClose}>
                    <span className="nav-icon">{iconMap[link.icon]}</span>
                    <span className="nav-text">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
