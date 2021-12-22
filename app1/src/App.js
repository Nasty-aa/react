import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './components/Profile';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Chats from './components/Chats';
import Gists from './components/gists';


function App(props) {
    return (
            <div className="Container_App">
                <BrowserRouter>
                    <header>
                        <nav>
                            <ul className="header_links">
                                <li className="header_links_li"><Link to='/' className="header_links_a">Домашняя</Link></li>
                                <li className="header_links_li"><Link to='/Profile' className="header_links_a">Моя страница</Link></li>
                                <li className="header_links_li"><Link to='/Chat' className="header_links_a">Список чатов</Link></li>
                                <li className="header_links_li"><Link to='/Gists' className="header_links_a">API</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/Profile'>
                            <Profile />
                        </Route>
                        <Route path='/Chat'>
                            <Chats />
                        </Route>
                        <Route path='/Gists'>
                            <Gists />
                        </Route>
                        <Route>
                            <h3 className="Page-not-found">Page not found 404 </h3>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
      );
}

export default App;