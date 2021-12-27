export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_DATA = 'SET_DATA';

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export const setData = (gists) => ({
    type: SET_DATA,
    payload: gists
});

const GISTS_API = 'https://api.github.com/gists/public';

export const getGistsThunk = async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));

    try{
        const response = await fetch(GISTS_API);

        if(!response.ok){
            throw Error(`Request failed with status ${response.status}`);
        }
    
        const result = await response.json();
    
        dispatch(setData(result));
    } catch (e) {
        console.log(e);
        dispatch(setError(true));
    }

    dispatch(setLoading(false));
}