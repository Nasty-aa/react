import {Checkbox} from '@mui/material';
import {changeCheckbox} from '../store/profile/action';
import {useDispatch} from "react-redux";

function Profile() {
  const dispatch = useDispatch();
    return (
        <div className="Profile">
          <h1 className="Profile_h1">Profile</h1>
          <Checkbox label="Задание 4" onClick={() => dispatch(changeCheckbox())}/>
        </div>
      );
}

export default Profile;