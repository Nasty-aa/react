import {useState} from 'react';
import {Checkbox} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {profileCheckbox} from '../store/store';

function Profile(props) {
  const dispatch = useDispatch();
  
  
    return (
        <div className="Profile">
          <h1 className="Profile_h1">Profile</h1>
          <Checkbox label="Задание 4" onClick={() => {
              dispatch({
                type: profileCheckbox,
              })
            }}/>
        </div>
      );
}

export default Profile;