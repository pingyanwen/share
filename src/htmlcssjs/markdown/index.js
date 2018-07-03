import React, {Component} from 'react';
import styles from  './index.css';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';

export  default class MarkDown extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className={styles["main_content"]}>
                <textarea id="editor"></textarea>
                <div onClick={e=>this.save()}>
                    保存
                </div>
                <div id="html">
                </div>
            </div>
        )
    }
    save(){
        let value = this.state.smde.value();
        let html = this.state.smde.markdown(value);
        let save = document.getElementById("html");
        save.innerHTML=html;

    }
    componentDidMount() {
        let smde = new SimpleMDE({
            element: document.getElementById("editor").childElementCount,
            autofocus: true,
            autosave: true,
            previewRender: function (plainText) {
                return marked(plainText, {
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        })
        this.setState({smde});
    }
}