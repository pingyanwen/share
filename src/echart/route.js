export const echartRoute = {
    path: 'echart',
    getComponents(state,callback){
        require.ensure([],require=>{
            callback(null,require('./index').default);
        });
    }
}
