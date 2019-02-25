export const carouselRoute = {
    path: '/carousel',
    indexRoute: {onEnter: (state, replace) => replace('/carousel/carousel')},
    childRoutes:[
        {
            path:'/carousel/carousel',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./carousel').default)
                })
            }
        }
    ]
}
