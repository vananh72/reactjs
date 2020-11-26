import React from 'react'
import './style.css'
import '../../font awesome/css/all.min.css'
class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu">
          <ul className="menu_list">
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                <i class="fas fa-home"></i>
                </span>
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                <i class="fas fa-flask"></i>
                </span>
                Project
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                <i class="fas fa-angle-double-right"></i>
                </span>
                Breadcrumb
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                <i class="fas fa-rocket"></i>
                </span>
                Getting started
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                <i class="fas fa-arrow-down"></i>
                </span>
                Download
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Menu