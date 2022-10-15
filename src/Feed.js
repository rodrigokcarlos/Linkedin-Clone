import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

function Feed() {
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input type="text" />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
            <div className='feed__inputOption'>
                <InputOption Icon={ImageIcon} title='Foto' color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title='Evento' color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title='Escrever Artigo' color="#7FC15E"/>
            </div>
        </div>
    </div>
  )
}

export default Feed