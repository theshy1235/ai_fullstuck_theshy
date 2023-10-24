一.对象
 （1）对象字面量
 一个对象字面量就是包围在一对花括号中的零或多个“名/值”对。

var empty_object = {};  //这是一个空的对象
var stooge = {
    "first-name" : "Jerome",
    "last-name" : "Howard"
}
属性名可以是包括空字符串在内的任何字符串。如果属性名是一个合法的JavaScript标识符且不是保留字，则不强制要求用引号括住属性名。所以用引号括住"first-name"是必需的，但是括住first_name是可选的。

逗号用于分隔多个“名/值”对。

属性值可以从包括另外一个对象字面量在内的任意表达式中获得。也就是对象可以嵌套的。例如：

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        TATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        TATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
}


（2）检索

  检索对象里包含的值，可以采用[]后缀中括住一个字符串表达式的方式。如果字符串表达式也是一个字面量，而且是合法的JavaScript标识符且不是保留字，那么也可以使用.表示法代替。优先考虑 . 表示法。

console.log(stooge["first-name"]);  //"Jerome"
console.log(flight.departure.TATA);  //"SYD"
如果检索一个并不存在的成员属性，将返回undefined。

console.log(stooge["minddle-name"]);  //undefined
console.log(flight.status);  //undefined
console.log(stooge["FIRST-NAME"]);  //undefined
可以利用 || 运算符来填充默认值。

var middle = stooge["middle-name"] || "(none)";
console.log(middle);  //"(none)"
var status = flight.status || "unknow";
console.log(status);  //"unknow"
尝试从undefined的成员属性中取值将会导致TypeError异常，这是可以通过&&运算符来避免错误。

console.log(flight.equipment);  //undefined
console.log(flight.equipment.model);  //throw "TypeError"
console.log(flight.equipment && flight.equipment.model);  //undefined


（3）.更新

对象里的值可以通过赋值语句来更新。如果属性名已经存在于对象里，那么这个属性的值就会被替换。

stooge['first-name'] = 'Jerome';
console.log(stooge['first-name']);  //"Jerome"
如果对象之前没有拥有那个属性名，那么该属性就被扩充到对象中。

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';
console.log(stooge);
console.log(flight);