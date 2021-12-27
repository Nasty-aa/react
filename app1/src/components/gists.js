import React, { useCallback, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getGistsError, getGists, getGistsLoading} from '../store/gists/selectors';
import {getGistsThunk} from '../store/gists/action';
import {Button, CircularProgress, List, ListItem, ListItemText} from '@mui/material';


function Gists() {
    const isLoading = useSelector(getGistsLoading);
    const isError = useSelector(getGistsError);
    const gists = useSelector(getGists);
    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getGistsThunk);
    }

    useEffect(()=> {
        getData();
    }, []);

    const renderGist = useCallback (
        (gists) => <ListItem className="gists_li" key={gists.id}>{gists.description}</ListItem>,
        []
    );

    if(isLoading){
        return(
            <CircularProgress />
        )
    }
    
    if(isError){
        return(
            <div className="Gists">
                <h3 className="Error_API">Error</h3>
                <Button className="submit" type="submit" variant="outlined" color="error" onClick={getData}>Отправить</Button>
            </div>
        )
            
    }

    return <List sx={{ width: "100%", bgcolor: "gray" }}>{gists.map(renderGist)}</List>;
}
  
export default Gists;