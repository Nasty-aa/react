export const getGistsFromStore = (state) => state.gists;

export const getGists = (state) => getGistsFromStore(state).data;
export const getGistsError = (state) => getGistsFromStore(state).isErorr;
export const getGistsLoading = (state) => getGistsFromStore(state).isLoading;