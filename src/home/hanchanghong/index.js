import React, {Component} from 'react';
// import sty from  './index.css'
import './index.css'
export  default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
            mode:true
        }
    }
    render() {
        return (
            <div className="main_map">
                hanchanghong内容
            </div>
        )
    }

}