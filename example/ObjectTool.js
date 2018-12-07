/* 打印一个js对象的实际类型，https://segmentfault.com/q/1010000009562518?_ea=1971742 */
function classof(obj){
    if(typeof(obj)==="undefined")return "undefined";
    if(obj===null)return "Null";
    var res = Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];
    if(res==="Object"){
        res = obj.constructor.name;
        if(typeof(res)!='string' || res.length==0){
            if(obj instanceof jQuery)return "jQuery";// jQuery build stranges Objects
            if(obj instanceof Array)return "Array";// Array prototype is very sneaky
            return "Object";
        }
    }
    return res;
}

// Example
console.log(classof(new Date()));   // => "Date"