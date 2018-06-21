export const htmlcssjsRoute = {
    path: '/htmlcssjs',
    indexRoute: {onEnter: (state, replace) => replace('/htmlcssjs/triangle')},
    childRoutes:[
        {
            path:'/htmlcssjs/triangle',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./triangle').default)
                })
            }
        },
    ]
}
