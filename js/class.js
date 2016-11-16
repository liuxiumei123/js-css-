//获取含有class的DOM
function getClass(tagname, className) { //tagname指元素，className指class的值
    //判断浏览器是否支持getElementsByClassName，如果支持就直接的用
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className);
    }
    else {    //当浏览器不支持getElementsByClassName的时候用下面的方法
        var tagname = document.getElementsByTagName(tagname);  //获取指定元素
        var tagnameAll = [];     //这个数组用于存储所有符合条件的元素
        for (var i = 0; i < tagname.length; i++) {     //遍历获得的元素
            if (tagname[i].className == className) {     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
                tagnameAll[tagnameAll.length] = tagname[i];
            }
        }
        return tagnameAll;//返回均为数组
    }
}



// 判断obj是否有此class
function hasClass(obj,cls){
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
//给 obj添加class
function addClass(obj,cls){
    if(!hasClass(obj,cls)){
        obj.className = obj.className+" "+cls;
    }
}
//移除obj对应的class
function removeClass(obj,cls){
    if(hasClass(obj,cls)){
        var reg = new RegExp('(\\w|\\s|^)' + cls + '(\\w|\\s|$)');
        obj.className = obj.className.replace(reg,' ');
    }
}