import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src="Dark.png" alt="logo-card" width={200}/>
        </span>
      </div>
      <div className="center">
        <ul>
          <li>
          <i class="fa-solid fa-house"></i>           
            <span>Dashboard</span>
          </li>
          <li>
          <i class="fa-brands fa-apple"></i>
            <span>Project</span>
          </li>
          <li>
          <i class="fa-solid fa-list-check"></i>
            <span>Task</span>
          </li>
          <li>
          <i class="fa-solid fa-user-large-slash"></i>
            <span>Teams</span>
          </li>
          <li>
          <i class="fa-solid fa-regular fa-gear"></i>
            <span>Setting</span>
          </li>
        </ul>
      </div>
      <div className="middle">
        <div className="middle_card">
          <h1 className="card_text">Upgrade to Pro 🔥</h1>
          <p>Get 1 month free and unlock all pro features</p>
          <button className="card_button">Upgrade</button>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>
          <i class="fa-sharp fa-solid fa-circle-info"></i>          
          <span>Help</span>
          </li>
          <li>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
