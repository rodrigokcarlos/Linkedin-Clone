import React from 'react';
import'./Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='Icone Linkedin'/>
            <div className='header__search'>
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Inicio'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='Minha Rede'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Vagas'/>
            <HeaderOption Icon={ChatIcon} title='Mensagens'/>
            <HeaderOption Icon={NotificationsIcon} title='Notificações'/>
            <HeaderOption avatar="https://i.pinimg.com/236x/9c/f1/aa/9cf1aad4c2823c8fb868854511089d50.jpg" title='Eu' />
        </div>

    </div>
  )
}

export default Header