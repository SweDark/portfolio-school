import React from "react"
import Links from "../constants/links"
import { AsideWrapper } from "../elements/SidebarElements"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
  // <AsideWrapper {isOpen ? "show-sidebar" : ""} >
  <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
  <button className="close-btn" onClick={toggleSidebar}>
  <FaTimes />
  </button>
  <div className="side-container">
  <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
  <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
  </div>
  </aside>
  // </AsideWrapper>
  
  )}
  export default Sidebar
  