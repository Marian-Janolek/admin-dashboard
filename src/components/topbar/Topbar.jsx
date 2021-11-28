import React from 'react';
import './topbar.css';
import { NotificationsNone } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
