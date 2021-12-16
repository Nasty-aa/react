import {useState} from 'react';
import {Checkbox} from '@mui/material';

function Profile({initialValues,onClickProfle}) {
  const [isCheck, setisCheck] = useState(initialValues) 
    return (
        <div className="Profile">
          <h1 className="Profile_h1">Profile</h1>
          <Checkbox label="Задание 4" onClick={() => {
              setisCheck(!isCheck);
              onClickProfle(isCheck);
            }}/>
        </div>
      );
}

export default Profile;