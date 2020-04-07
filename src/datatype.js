var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 基本数据类型
var bool = true;
var age = 18;
var username = 'peter';
// username = 1
// 数组
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, 'abc'];
// 元组
var tuple = ['x', 18];
var tuple1 = [123, 123];
tuple1.push(1);
var lat = tuple1[1];
// tuple1[2]
// 函数
var add = function (x, y) { return x + y; };
var add1 = function (x, y) { return x + y; };
var compute;
compute = function (a, b) { return a + b; };
function func(x, y) {
    return x + y;
}
func();
func(1, 2);
func('a', 'b');
// 对象
var obj = { x: 1, y: 3 };
obj.x = 3;
// symbol
var symbol1 = Symbol();
var symbol2 = Symbol();
console.log(symbol1 === symbol2);
// undefined null
var undefined1 = undefined;
var nul = null;
// void
var noReturn = function () { };
// any
var x;
var y;
// never
var error = function () {
    throw 'error';
};
var it = function () {
    while (true) { }
};
// 枚举
var Sex;
(function (Sex) {
    Sex[Sex["girl"] = 0] = "girl";
    Sex[Sex["boy"] = 1] = "boy";
})(Sex || (Sex = {}));
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["Novemeber"] = 10] = "Novemeber";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
var Role;
(function (Role) {
    Role["Normal"] = "Normal";
    Role[Role["Level1"] = 1] = "Level1";
    Role[Role["Level2"] = 2] = "Level2";
    Role[Role["Level3"] = 3] = "Level3";
})(Role || (Role = {}));
var Message;
(function (Message) {
    Message["Success"] = "\u6210\u529F";
    Message["Failure"] = "\u5931\u8D25";
})(Message || (Message = {}));
console.log(Sex);
console.log(Month);
console.log(Role);
console.log(Message);
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
var Char;
(function (Char) {
    // 常量枚举
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 3] = "c";
    // 计算枚举
    Char[Char["d"] = Math.round(Math.random() * 10)] = "d";
    Char[Char["e"] = Math.floor(Math.random() * 1001).toString().length] = "e";
    // 有赋值的枚举后面的枚举一定要赋值
})(Char || (Char = {}));
console.log(Char);
var M = [Month.January, Month.February];
var classmate = {
    name: 'lily',
    sex: Sex.girl
};
var nurse = Sex.girl;
var pregnantWoman = Sex.girl;
console.log(nurse === pregnantWoman);
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
    });
}
var result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' }
    ]
};
// 鸭式变形法
render(result);
// 处理多余属性
// 方法1 上面的render(result)
// 方法2 类型断言 后置as
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' }
    ]
});
// 方法3 类型断言 前置断言，此方法在react等jsx语法中不适用
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' }
    ]
});
function render1(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        if (value.sex) {
            console.log(value.sex);
        }
        // value.id++ // 只读属性不允许修改
    });
}
render1({
    data: [
        { id: 1, name: 'A', sex: 'male', age: 18 },
        { id: 2, name: 'B' }
    ]
});
var chars = ['A', 'B'];
var response = {
    code: 0,
    content: '',
    result: {
        id: 1,
        name: 'lily'
    }
};
var response1 = {
    code: 0,
    content: '',
    result: {
        id: 1,
        name: 'lily',
        sex: 1
    }
};
var responseBody;
// let定义函数类型
var add2;
var add3 = function (a, b) { return a + b; };
// 暴露在全局中，是单例的
var lib = (function () { });
lib.version = '1.0.0';
lib.sayHello = function () { };
// 干净且可以创建多例
function getLib() {
    var lib = (function () { });
    lib.version = '1.0.0';
    lib.sayHello = function () { };
    return lib;
}
var lib1 = getLib();
lib();
lib.sayHello();
lib.version;
var lib2 = getLib();
// 可选参数
function add4(x, y) {
    return y ? x + y : x;
}
// 默认值
function add5(x, y, z) {
    if (y === void 0) { y = 0; }
    if (z === void 0) { z = 1; }
    return x + y + z;
}
// rest参数
function add6(x, y) {
    if (y === void 0) { y = 0; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return x + y + rest.reduce(function (prev, next) { return prev + next; });
}
function add7() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (prev, curr) { return prev + curr; });
    }
}
console.log(add7(1, 2, 3, 4, 5));
console.log(add7('h', 'e', 'l', 'l', 'o', '!'));
// 类的继承和成员的修饰符
// 类的基本实现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.sex = 0;
        this.name = name;
    }
    Animal.prototype.eat = function () { };
    Animal.prototype.sleep = function () { };
    Animal.prototype.pro = function () { };
    return Animal;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name, nation) {
        var _this = _super.call(this, name) || this;
        _this.name = 'Human';
        _this.nation = nation;
        return _this;
    }
    Human.prototype.say = function () { };
    Human.prototype.pri = function () {
        this.pro(); // protected可以被本身和子类调用
    };
    Human.role = Role.Normal;
    return Human;
}(Animal));
console.log(Human.prototype);
var human = new Human('大禹', '中国');
human.sex = 5000;
// human.pri() 私有属性只能类本身内部调用
console.log(human);
// static 只能通过类调用
console.log(Human.role);
// 被私有化的构造函数的类不能被继承也不能被实例化
var Useless = /** @class */ (function () {
    function Useless() {
    }
    return Useless;
}());
// class B extends Useless {}
// let useLess = new Useless()
// 只能被继承，不能被实例化的类
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
// 构造函数的参数也可以添加修饰符，可以省略类中的定义,代码更简洁
var SimpleClass = /** @class */ (function () {
    function SimpleClass(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    return SimpleClass;
}());
// 抽象类
var Canoidea = /** @class */ (function () {
    function Canoidea() {
    }
    Canoidea.prototype.eat = function () {
        console.log('eat');
    };
    return Canoidea;
}());
// let canoidea = new Canoidea() //抽象类不能被实例化
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.name = name;
        return _this;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.sleep = function () {
        console.log('dog zzZ!');
    };
    return Dog;
}(Canoidea));
var dog = new Dog('wang');
dog.eat();
dog.sleep();
// 抽象类可以实现多态
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sleep = function () {
        console.log('cat sleep');
    };
    return Cat;
}(Canoidea));
var cat = new Cat();
var canoideas = [dog, cat];
canoideas.forEach(function (i) {
    i.sleep();
});
// 链式调用
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1().step2();
// 多态在链式调用中的应用
var MyFlow = /** @class */ (function (_super) {
    __extends(MyFlow, _super);
    function MyFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyFlow.prototype.next = function () {
        return this;
    };
    return MyFlow;
}(WorkFlow));
new MyFlow().next().step1().next().step2().step1();
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    Asian.prototype.sleep = function () { };
    return Asian;
}());
var boy = {
    name: '',
    run: function () { },
    eat: function () { },
    cry: function () { }
};
// 接口可以继承类，等于把类抽象成了接口
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        // private state2 = 0 // 接口也会抽离私有成员变量
    }
    return Auto;
}());
var Auto1 = /** @class */ (function () {
    function Auto1() {
        this.state = 1;
    }
    return Auto1;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
// 泛型二
// 可是使用函数重载来实现泛型
// 可以使用联合类型使用泛型
function log(value) {
    console.log(value);
    return value;
}
// 断言使用泛型
log(['a', 'b']);
// 类型推断使用泛型 推荐
log(['a', 'b']);
// 泛型函数实现
var myLog = log;
var myLog2 = log;
var Log33 = /** @class */ (function () {
    function Log33() {
        this.data = log;
    }
    return Log33;
}());
// 泛型类的约束作用
var Log4 = /** @class */ (function () {
    function Log4() {
    }
    Log4.prototype.run = function (value) {
        console.log(value);
    };
    return Log4;
}());
var log4 = new Log4();
log4.run(4);
var log5 = new Log4();
log5.run('你好');
var log6 = new Log4();
log6.run(1);
log6.run('hello');
function log7(value) {
    console.log(value, value.length);
}
log7([1, 3, 4]);
log7('hello');
log({ length: 9 });
// 类型检查机制
// 类型推断
var a = 1; // a类型推断为number
var b = 'hello'; // b类型推断为string
var c = []; // c类型推断为Array
var d = [1, null]; // 推断为number和null联合类型
var e = function (x) {
    if (x === void 0) { x = 1; }
    return x + 1;
}; // 从右向左推断函数
// 上下文类型推断，从左到右推断
document.addEventListener('click', function (event) {
    console.log(event.target);
});
var foo = {}; // 可能会滥用，bar可能不会赋值
foo.bar = 1;
var foo1 = {
    bar: 2
};
// 类型兼容性
// x兼容y： x = y
var s = 'a';
// 类型兼容遵循鸭式变形法
var x1 = { a: 1, b: 2 };
var y1 = { a: 1, b: 2, c: 3 };
x1 = y1; // x1兼容y1
function hof(Handler) {
    return Handler;
}
hof(function () { });
hof(function (a) { });
hof(function (a, b) { });
// hof((a: number, b: number, c: number) => {}) // 参数个数要求
var func1 = function (a, b, c) { };
hof(func1);
hof(func1);
var point3d = function (point) { };
var point2d = function (point) { };
// point2d = point3d // 关闭strictFunctionTypes才可以赋值，这种情况叫做函数的参数协变
point3d = point2d;
// 返回值类型
var f = function () { return ({ name: 'Lily' }); };
var g = function () { return ({ name: 'Lily', location: 'Shenzhen' }); };
// g = f // g的返回值类型比f的返回值类型多
f = g;
function overload(a, b) { }
// function overload(a: any, b: any, c: any): any {} 函数重载实现参数多余定义，不兼容
// function overload(a: any, b: any): void {} // 函数重载返回值不一样，不兼容
// 枚举兼容性,枚举和number之间相互兼容
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
var fruit = 3;
var no = Fruit.Apple;
// let color: Color.Red = Fruit.Apple // 枚举和枚举之间不兼容
// 类兼容性
var A = /** @class */ (function () {
    function A(p, q) {
        this.id = 1;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B(p) {
        this.id = 2;
    }
    B.s = 1;
    return B;
}());
var aa = new A(1, 2);
var bb = new B(1);
aa == bb;
bb == aa;
var C = /** @class */ (function () {
    function C(p, q) {
        this.id = 1;
        this.name = '';
    }
    return C;
}());
var D = /** @class */ (function () {
    function D(p) {
        this.id = 2;
        this.name = '';
    }
    D.s = 1;
    return D;
}());
var cc = new C(1, 2);
var dd = new D(1);
var obj1 = {};
var obj2 = {};
obj1 = obj2;
obj2 = obj1;
var log8 = function (x) {
    console.log(x);
    return x;
};
var log9 = function (y) {
    console.log(y);
    return y;
};
log8 = log9;
log9 = log8;
// 类型保护
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('Hello Java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('Hello JavaScript');
    };
    return JavaScript;
}());
function getLanguage(type, x) {
    var lang = type === Type.Strong ? new Java() : new JavaScript();
    if (lang.helloJava) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    // 类型断言 instanceof
    if (lang instanceof Java) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    // 类型断言 in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    // typeof 基本类型
    if (typeof x === 'string') {
        x.length;
    }
    else {
        x.toFixed(2);
    }
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    return lang;
}
// 类型谓词
function isJava(lang) {
    return lang.helloJava !== undefined;
}
getLanguage(Type.Strong, 1);
var pet;
var Dog1 = /** @class */ (function () {
    function Dog1() {
    }
    Dog1.prototype.run = function () { };
    Dog1.prototype.jump = function () { };
    Dog1.prototype.eat = function () { };
    return Dog1;
}());
var Cat1 = /** @class */ (function () {
    function Cat1() {
    }
    Cat1.prototype.jump = function () { };
    Cat1.prototype.eat = function () { };
    return Cat1;
}());
// 联合类型
var aaa = 'aa';
var bbb;
var ccc;
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    var pet = master === Master.Boy ? new Dog1() : new Cat1();
    pet.eat();
    // pet.run()
    return pet;
}
function area(s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * Math.pow(s.r, 2);
        default:
            return (function (e) { throw new Error(e); })(s); // 还有一种方法指定返回值为number
    }
}
console.log(area({ kind: 'circle', r: 3 }));
// 索引类型
var obj3 = {
    a: 1,
    b: 2,
    c: 3
};
function getValues(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(getValues(obj3, ['a', 'b']));
console.log(getValues(obj3, ['a', 'f']));
var key;
// T[K]
var value;
// T extends U
function getValues2(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(getValues2(obj3, ['a', 'b']));
