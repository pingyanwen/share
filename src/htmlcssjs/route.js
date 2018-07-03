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
        {
            path:'/htmlcssjs/codeshow',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./codeshow').default)
                })
            }
        },
        {
            path:'/htmlcssjs/markdown',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./markdown').default)
                })
            }
        },
    ]
}
