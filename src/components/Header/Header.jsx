import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

//Logo / Profile
import logoInstagram from '/logoInstagram.png'
import ProfilePicture from '../../assets/profile/profile.jpg'

//Icones Menu
import SearchIcon from '@mui/icons-material/Search';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

//Likes IMG
import user01 from '../../assets/stories/user01.png'
import user02 from '../../assets/stories/user02.png'
import user03 from '../../assets/stories/user03.png'
import user04 from '../../assets/stories/user04.png'
import user05 from '../../assets/stories/user05.png'
import user06 from '../../assets/stories/user06.png'
import user07 from '../../assets/stories/user07.png'

//Componentes
import { UserInteraction } from '../UserInteraction/UserInteraction';

export function Header() {
    function menuPostCreate() {
        document.querySelector('.modal_Upload').style.display = 'flex';
    }

    function menuInteraction() {
        const menuInteraction = document.querySelector('.menuInteraction');
        if (menuInteraction.style.display == 'none') {
            menuInteraction.style.display = 'block';
        } else {
            menuInteraction.style.display = 'none';
        }
    }
    return (
        <header>
            <nav>
                <div className='logo'>
                    <Link to='/'><img src={logoInstagram} alt='Logo' /></Link>
                </div>
                <div className='search'>
                    <SearchIcon />
                    <input type='text' name='search' placeholder='Pesquisar' />
                </div>
                <div className='menuUser'>
                    <Link to='/'><HomeIcon /></Link>
                    <Link to='#'><MapsUgcOutlinedIcon /></Link>
                    <Link to='#' onClick={menuPostCreate}><AddBoxOutlinedIcon /></Link>
                    <Link to='/explorer'><ExploreOutlinedIcon /></Link>
                    <Link onClick={menuInteraction} to='#'>
                        <FavoriteBorderOutlinedIcon />
                        <ul className='menuInteraction'>
                            <li>
                                <UserInteraction user='Cremildo' picture={user01} />
                            </li>
                            <li>
                                <UserInteraction user='Donizete' picture={user02} />
                            </li>
                            <li>
                                <UserInteraction user='Amando' picture={user03} />
                            </li>
                            <li>
                                <UserInteraction user='Amandinha' picture={user04} />
                            </li>
                            <li>
                                <UserInteraction user='Roberta' picture={user05} />
                            </li>
                            <li>
                                <UserInteraction user='Romântico' picture={user06} />
                            </li>
                            <li>
                                <UserInteraction user='MeninoNey' picture={user07} />
                            </li>
                        </ul>
                    </Link>
                    <img className='profileIcon' src={ProfilePicture} alt='profile picture' />
                </div>
            </nav>
        </header>
    )
}