export const carouselRoute = {
    path: 'carousel',
    getComponents(state,callback){
        require.ensure([],require=>{
            callback(null,require('./index').default);
        });
    }
}
