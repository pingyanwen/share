export const contributerRoute = {
    path: 'contributer',
    getComponents(state,callback){
        require.ensure([],require=>{
            callback(null,require('./index').default);
        });
    }
}
