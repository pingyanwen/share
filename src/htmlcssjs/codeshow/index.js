import React, {Component} from 'react';
import styles from  './index.css';
import htjs from 'highlight.js';
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
                <pre>
                    <code className="javascript">
                          function $initHighlight(block, cls){
                            }
                    </code>
                </pre>
            </div>
        )
    }
    componentDidMount(){
        this.init();
    }
    init(){
        htjs.initHighlightingOnLoad();
    }
}