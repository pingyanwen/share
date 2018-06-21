import React, {Component} from 'react';
import styles from  './index.css';
//import './index.css'
export  default class Pingyanwen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
            mode:true
        }
    }
    render() {
        return (
            <div className={styles["main_content"]}>
                <div className={styles["box"]}>提示框</div>
            </div>
        )
    }

}