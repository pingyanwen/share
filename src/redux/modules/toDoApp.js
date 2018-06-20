import Service from '../../helper/service';
import commonRequest from '../../helper/commonRequest'

export class toDoAppService extends Service{
    static state={
        list: [{item: 'test', done: false}],
        newToDo: '',
        // 客户列表
        customer_list:[],
        // 当前页
        currentPage: 1,
        // 总页数
        totalPage: 0,
        // 数据总数
        totalNumber: 0,
    }
    //列表展示
    static get_list(params) {
        return (dispatch) => {
            commonRequest("http://insurance.test.jeean.cn/", 'insurance_company/grid_companys', params, 'get').then((r) => {

                if (r && r.data) {
                    this.set_state({
                        customer_list: r.data,
                        currentPage: r.data.now_page,
                        totalNumber: r.data.total_number,
                        totalPage: r.data.total_pages
                    }, dispatch);
                } else {

                    this.set_state({customer_list: [], currentPage: 1, totalPage: 1, totalNumber: 0}, dispatch);
                }
            })
        }
    }
    //点击item选项
    static listItemClick(params){
        return (dispatch)=>{
            this.set_state({
                list: [
                    ...this.state.list.slice(0, params),
                    Object.assign({}, this.state.list[params], {done: !this.state.list[params].done}),
                    ...this.state.list.slice(params+1)
                ]
            },dispatch);
        }
    }
    //点击删除
    static deleteListItem(params){
        return (dispatch)=>{
            this.set_state({
                list: [
                    ...this.state.list.slice(0, params),
                    ...this.state.list.slice(params+1)
                ]
            },dispatch);
        }
    }
    //提交按钮
    static inputSubmit(params){
        return (dispatch)=>{
            this.set_state({
                list: [...this.state.list, {item: this.state.newToDo, done: false }],
                newToDo: ''
            },dispatch);
        }
    }
    //输入框改变
    static inputChange(params){
        return (dispatch)=>{
            this.set_state({
                newToDo: params
            },dispatch);
        }
    }
}