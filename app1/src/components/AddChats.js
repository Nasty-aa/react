import {useState} from 'react';
import {TextField, Button} from '@mui/material';

function AddChats({onSaveChat}) {
    const [value, setValue] = useState('');
    const [input, setInput] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
        setInput(event.target);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(value) {
            onSaveChat(value);
            setValue('');
        }
        
    }

    return (
        <div className="AddChat">
            <form onSubmit={onSubmit} action="#" className="form">
                <TextField  variant="outlined" className="input" type='text' onChange={onChange} value={value}  />
                <Button className="submit" type="submit" variant="outlined"> Добавить новый чат </Button>
            </form>
        </div>
      );
}

export default AddChats;