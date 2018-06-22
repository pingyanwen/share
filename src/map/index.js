import React, {Component} from 'react';
import styles from  './index.css'
const Highcharts = require('highcharts');
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
                <div className={styles['industryDistributing']}>
                    <p className={styles['industryDistributing-title1']}><span>| </span>投保企业行业分布概况</p>
                    <div className={styles['industryDistributing-map']}>
                        <div ref="container"></div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.initChart();
    }
    initChart(){
        var data=[  {name:"冶金2",total:50},
            {name:"冶金3",total:50},
            {name:"冶金4",total:50},
            {name:"冶金5",total:10},
            {name:"冶金6",total:50},
            {name:"冶金7",total:50},
            {name:"冶金1",total:50},
            {name:"冶金8",total:80},
            {name:"冶金9",total:50},
            {name:"冶金0",total:50},
            {name:"冶金12",total:56},
            {name:"冶金23",total:50},
            {name:"冶金67",total:50},
            {name:"冶金98",total:23},
            {name:"冶金76",total:50},
            {name:"冶金09",total:50}
        ];
        //var color=["#8cd7ff","#0095e2","#8cd7ff","#0095e2","#8cd7ff","#0095e2","#8cd7ff","#0095e2","#8cd7ff","#0095e2","#8cd7ff","#0095e2","#8cd7ff","#0095e2","#8cd7ff","#0095e2"];
        var categories=[],series=[];
        data.map((d,key)=>{
            categories.push(d.name);
            series.push({
                name:d.name,
                y:Number(d.total),
                color:(key+1)%2==0?"#0095e2":"#8cd7ff"
            })
        });
        var options={
            chart:{
                height:250,
                borderColor: '',
                borderWidth: 0.5,
                type:"column"
            },
            title:{
                align:"left",
                text:"新增投保企业数量",
                style:{
                    fontSize:"12px",
                    color:"#333"
                }
            },
            legend:{
                enabled:false
            },
            xAxis: {
                categories:categories,
                type: 'category',
                labels:{
                    style:{
                        fontSize:"12px"
                    }
                },
                tickWidth:0,
                lineWidth:2,
                color:"#666666",
            },
            yAxis: {
                labels:{
                    enabled: false,
                    style:{
                        x:0
                    }
                },
                title: {
                    align: 'high',
                    //offset: 0,
                    text: null,
                    rotation:0,
                    //y:-20,
                    //margin:-50,
                    //x:50,
                    style:{
                        fontSize:"12px",
                        color:"#333"
                    }
                },
                lineWidth:2,
                gridLineWidth:0,
                tickWidth:0,
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        color: '#333'
                    }
                }
            },
            series: [{
                name:"本行业投保企业",
                pointWidth:30,
                data: series,
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    }
                }
            }]
        };

        var chart = Highcharts.chart(this.refs['container'], options);
    }
}