import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';


function Sidebar() {

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
  )


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Color_icon_blue.svg/1200px-Color_icon_blue.svg.png" alt="azul" />
            <Avatar className='sidebar__avatar'/>
            <h2>Super Sonico</h2>
            <h4>sup.sonico@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Conexões</p>
                <p className='sidebar__statNumber'>300 </p>
            </div>
            <div className='sidebar__stat'>
                <p>Quem viu seu perfil</p>
                <p className='sidebar__statNumber'>18 </p>
            </div>
            
        </div>
        <div className='sidebar__bottom'>
            <p>Recentes</p>
            {recentItem('reactjs')}
            {recentItem('estudando')}
            {recentItem('dev')}
            {recentItem('frontend')}
        </div>
    </div>
  );
}

export default Sidebar