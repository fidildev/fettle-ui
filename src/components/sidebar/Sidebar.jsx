import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-container'>Sidebar
        <ul className="sidebar-list">
            <li className="sidebar-item">
                <AiOutlineGithub /> Analyze repo
             </li>
            <li className="sidebar-item">
                <TbReport />Report
            </li>
        </ul>

    </div>
  )
}

export default Sidebar