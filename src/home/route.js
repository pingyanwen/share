export const homeRoute = {
    path: '/home',
    indexRoute: {onEnter: (state, replace) => replace('/home/pingyanwen')},
    // getComponents(state,callback){
    //     require.ensure([],require=>{
    //         callback(null,require('./home').default);
    //     });
    // },
    childRoutes:[
        {
            path:'/home/pingyanwen',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./pingyanwen').default)
                })
            }
        },
        {
            path:'/home/hanchanghong',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./hanchanghong').default)
                })
            }
        }
    ]
}
