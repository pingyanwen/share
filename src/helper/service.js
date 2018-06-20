/**
 * .
 */
export default class Service{
    /**
     * 设置新的state
     * @param next_state
     * @returns {*}
     */
    static set_state(next_state,dispatch){
        let current_state = this.get_state();
        this.state = Object.assign({},current_state,next_state);
        if(typeof dispatch === 'function'){
            this.apply(dispatch);
        }else{
            return {type:this.get_name()}
        }
    }

    /**
     * 获取当前state
     * @returns {{username: string}|*}
     */
    static get_state(){
        return this.state;
    }

    static get_name(){
        return this.name;
    }

    static apply(dispatch){
        dispatch({type:this.get_name()});
    }
}