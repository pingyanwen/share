export const homeRoute = {
    path: '/home',
    indexRoute: {onEnter: (state, replace) => replace('/home/pingyanwen')},
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
