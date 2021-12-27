import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../services/firebase';
import {Button} from '@mui/material';
import {useHistory} from 'react-router-dom';

 function Menu({authenticated}) {
    const {push} = useHistory();
    if(authenticated){
        return(
            <nav>
                <ul className="header_links">
                    <li className="header_links_li"><Link to="/Profile" className="header_links_a">Моя страница</Link></li>
                    <li className="header_links_li"><Link to="/Chat" className="header_links_a">Список чатов</Link></li>
                    <li className="header_links_li"><Link to="/Gists" className="header_links_a">API</Link></li>
                    <li className="header_links_li"><Button type="submit" onClick={() => {
                          auth.signOut();
                          push("/");
                        }}>Выйти</Button></li>
                </ul>
            </nav> 
        )
    } else {
        return(
            <nav>
                <ul className="header_links">
                    <li className="header_links_li"><Link to="/" className="header_links_a">Домашняя</Link></li>
                    <li className="header_links_li"><Link to="/Gists" className="header_links_a">API</Link></li>
                    <li className="header_links_li"><Link to="/signup" className="header_links_a">Регистрация</Link></li>
                    <li className="header_links_li"><Link to="/login" className="header_links_a">Войти</Link></li>
                </ul>
            </nav>
        )
    }
 }

 export default Menu;