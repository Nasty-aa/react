import React from "react";
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

function Home(props) {

    return (
        <div className="Home">
            <h1 className="Home_h1">Это домашння страница</h1>
            <div className="Home-div">
                <Button className="submit" type="submit" variant="outlined">
                    <Link to="/login" className="header_links_a">Войти</Link>
                </Button>
                <Button className="submit" type="submit" variant="outlined">
                    <Link to="/signup" className="header_links_a">Зарегистрироваться</Link>
                </Button>
            </div>
        </div>
      );
}

export default Home;