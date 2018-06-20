/**
 * Created by able on 17-7-4.
 */
// 默认过期时间为1天后
const EXPIRE = Date.now()+24*60*60;
// 默认path
const COOKIE_PATH='/';
// 设置cookie
export function setCookie(key,value,expire=EXPIRE,path=COOKIE_PATH) {
    let new_cookie = [key,'=',value,';','expires','=',expire,';','path','=',path];
    document.cookie = new_cookie.join('');
}
// 获取cookie
export function getCookie(key){
    let docCookie = document.cookie;
    let tmp = docCookie.split('; ');
    let target = tmp.find((element)=>{
        let reg = new RegExp(key+'=');
        return reg.test(element);
    });
    return target ? target.split('=')[1] : '';
}

/*
目前保存的cookies如下
token,
userID,
userName,
organMemberType,
organType,
organID,
organName,
gridID,
gridName,
typeID,
typeName,
groupID,
groupName,
roleType,
roleName
 */