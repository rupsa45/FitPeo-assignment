
import '../styles/Header.css'
import { Search, Bell, Plus, Menu } from "lucide-react"
import avatarImage from '../assets/avatar.png'
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-btn">
          <Menu size={20} />
        </button>
        <div className="logo">
          <span className="logo-health">Health</span>
          <span className="logo-care">care.</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" size={16} />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div >
            <button className="notification-btn">
            <Bell size={18} />
          </button>
        </div>
      </div>

      <div className="header-right">
        <div className="user-avatar">
          <img src={avatarImage} alt="User" />
        </div>
        <button className="add-btn">
          <Plus size={18} />
        </button>
      </div>
    </header>
  )
}

export default Header
