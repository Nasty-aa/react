import React, {useEffect, useState} from 'react';
import Profile from './Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Chats from './Chats';
import Gists from './gists';
import SignupOrLogin from './SigUpOrLogin';
import Menu from './Menu';
import {auth} from '../services/firebase';



function RouteApp() {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

    return (
            <div className="Container_App">
                <BrowserRouter>
                    <header>
                        <Menu authenticated={authed} />
                    </header>
                    <Switch>
                        <Route authenticated={authed} exact path="/">
                            <Home />
                        </Route>
                        <Route authenticated={authed} path="/Profile">
                            <Profile />
                        </Route>
                        <Route authenticated={authed} path="/Chat">
                            <Chats />
                        </Route>
                        <Route authenticated={authed} path="/Gists">
                            <Gists />
                        </Route>
                        <Route authenticated={authed} path="/signup">
                            <SignupOrLogin  
                                title={"Заполните форму для регистрации"}
                                buttonTitle={"Зарегистрироваться"}
                                linktoLogin={"Войти"}
                                text={"Уже есть логин?"}
                            />
                        </Route>
                        <Route authenticated={authed} path="/login">
                            <SignupOrLogin  
                                    title={"Введите логин и пароль"}
                                    buttonTitle={"Войти"}
                                    linktoLogin={"Регистрация"}
                                    text={"Нет логина?"}
                                />
                        </Route>
                        <Route>
                            <h3 className="Page-not-found">Page not found 404 </h3>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
      );
}

export default RouteApp;