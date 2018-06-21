import React, {Component} from 'react';
import styles from  './index.css'
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
            <div className={styles["main_map"]}>
                hanchanghong内容
            </div>
        )
    }

}