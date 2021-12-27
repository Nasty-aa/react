import {Checkbox} from '@mui/material';
import {changeCheckbox} from '../store/profile/action';
import {useDispatch} from "react-redux";
import {auth} from '../services/firebase';
import {Button} from '@mui/material';
import {useHistory} from 'react-router-dom';

function Profile() {
  const dispatch = useDispatch();
  const {push} = useHistory();

    return (
        <div className="Profile">
          <h1 className="Profile_h1">Profile</h1>
          <Checkbox label="Задание 4" onClick={() => dispatch(changeCheckbox())}/>
          <Button type="submit" onClick={() => {
                          auth.signOut();
                          push("/");
                        }}>
                          Выйти</Button>
        </div>
      );
}

export default Profile;