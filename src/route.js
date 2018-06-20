import Main from './main';
import {mapRoute} from './map/route';
import {homeRoute} from './home/route';
import {calenderRoute} from './calender/route';
import {carouselRoute} from './carousel/route';
import {echartRoute} from './echart/route';
import {contributerRoute} from './contributer/route';
let childRoutes = [
    mapRoute,
    homeRoute,
    calenderRoute,
    carouselRoute,
    echartRoute,
    contributerRoute
];

export const appRoute = {
    path: '/',
    component: Main,
    indexRoute: {onEnter: (state, replace) => replace('home')},
    childRoutes: childRoutes
}