export const calenderRoute = {
    path: 'calender',
    getComponents(state,callback){
        require.ensure([],require=>{
            callback(null,require('./index').default);
        });
    }
}
