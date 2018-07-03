import React, {Component} from 'react';
import Menu from 'uiw/lib/menu';
import Icon from 'uiw/lib/icon';
import styles from  './index.css';
const headerMenu=[
    {label:"首页",path:"home"},
    {label:"高德地图",path:"map"},
    {label:"日历控件",path:"calender"},
    {label:"轮播",path:"carousel"},
    {label:"echart图",path:"echart"},
    {label:"htmlcssjs",path:"htmlcssjs"},
    {label:"贡献者（可以自己扩展）",path:"contributer"}];
const leftMenu={
    '0':[{label:"pingyanwen",path:"home/pingyanwen"},{label:"hanchanghong",path:"home/hanchanghong"}],
    '1':[{label:"home2"},{label:"home2"}],
    '2':[{label:"home3"},{label:"home3"}],
    '3':[{label:"home4"},{label:"home4"}],
    '4':[{label:"home5"},{label:"home5"}],
    '5':[
            {label:"三角形",path:"htmlcssjs/triangle"},
            {label:"代码展示",path:"htmlcssjs/codeshow"},
            {label:"markDown编辑器",path:"htmlcssjs/markdown"}
        ],
    '6':[{label:"home6"},{label:"home6"}]
};
export  default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            checked:true,
            mode:true,
            selectIndex:"0",
        }
        this.onSelectHeader=this.onSelectHeader.bind(this);
        this.onSelectLeft=this.onSelectLeft.bind(this);
    }
    componentDidMount(){
        this.dynamicCssLoad("../../node_modules/simplemde/dist/simplemde.min.css");
        this.dynamicCssLoad("../../node_modules/highlight.js/styles/atom-one-dark.css");
    }
    dynamicCssLoad(url){
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        head.appendChild(link);
    }
    render() {
        return (
            <div className={styles["main"]}>
                <div className={styles["top_menu"]}>
                    <Menu defaultActive="0" theme="dark" mode="horizontal" onSelect={this.onSelectHeader}>
                        {this.getHeaderMenu()}
                    </Menu>
                </div>
                <div className={styles["left_menu"]}>
                    <Menu
                        defaultActive="0"
                        mode={this.state.mode?'vertical':'inline'}
                        theme={this.state.checked?'light':'dark'}
                        inlineCollapsed={!this.state.mode}
                        style={{width:240}}
                        onSelect={this.onSelectLeft}
                    >
                        {this.getLeftMenu(this.state.selectIndex)}
                    </Menu>
                </div>
                {this.props.children}
            </div>
        )
    }
    getPathName(index,menu){
        for(let i=0;i<menu.length;i++){
            if(index==i.toString()){
                return menu[i].path
            }
        }
    }
    onSelectLeft(index){
        let headerIndex = this.state.selectIndex;//选中的headerMenu下标
        this.context.router.push({pathname:this.getPathName(index,leftMenu[headerIndex])});
    }
    onSelectHeader(index){
        this.setState({selectIndex:index},function(){
            this.context.router.push({pathname:this.getPathName(index,headerMenu)});
        });
    }
    getHeaderMenu() {
        return headerMenu.map((item,key) => {
            return <Menu.Item key={key} index={key.toString()}><Icon type="verification" /><span>{item.label}</span></Menu.Item>
        });
    }
    getLeftMenu(index){
        return leftMenu[index].map((item,key)=>{
            return <Menu.Item key={key} index={key.toString()}><Icon type="date" /><span>{item.label}</span></Menu.Item>
        });
    }
}
Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}