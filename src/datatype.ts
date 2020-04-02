// 基本数据类型
let bool: boolean = true
let age: number = 18
let username: string = 'peter'
// username = 1

// 数组
let arr: number[] = [1, 2, 3]
let arr1: Array<number>= [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, 'abc']

// 元组
let tuple: [string, number] = ['x', 18]
let tuple1: [number, number] = [123, 123]
tuple1.push(1)
let lat = tuple1[1]
// tuple1[2]

// 函数
let add = (x: number, y: number) => x + y
let add1 = (x: number, y: number): number => x + y
let compute: (x: number, y:number) => number
compute = (a, b) => a + b

// 函数重载
function func(): void
function func(x: number, y: number): number
function func(x: string, y: string): string
function func(x?: any, y?: any): any {
    return x + y
}
func()
func(1, 2)
func('a', 'b')

// 对象
let obj: {x : number, y: number} = {x: 1, y: 3}
obj.x = 3

// symbol
let symbol1: symbol = Symbol()
let symbol2 = Symbol()
console.log(symbol1 === symbol2)

// undefined null
let undefined1: undefined = undefined
let nul: null = null

// void
let noReturn = () => {}

// any
let x
let y: any

// never
let error = () => {
    throw 'error'
}
let it = () => {
    while(true) {}
}

// 枚举
enum Sex {
    girl  = 0,
    boy = 1
}
enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    Novemeber,
    December
}
enum Role {
    Normal = 'Normal',
    Level1 = 1,
    Level2 = 2,
    Level3 = 3
}
enum Message {
    Success = '成功',
    Failure = '失败'
}
console.log(Sex)
console.log(Month)
console.log(Role)
console.log(Message)

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}
enum Char {
    // 常量枚举
    a,
    b = Char.a,
    c = 1 + 2,
    // 计算枚举
    d = Math.round(Math.random() * 10),
    e = Math.floor(Math.random() * 1001).toString().length
    // 有赋值的枚举后面的枚举一定要赋值
}
console.log(Char)

let M = [Month.January, Month.February]

let classmate = {
    name: 'lily',
    sex: Sex.girl
}
let nurse: Sex.girl = Sex.girl
let pregnantWoman: Sex.girl = Sex.girl
console.log(nurse === pregnantWoman)

// 接口可以用来约束对象、函数、类的结构和类型
interface List {
    id: number,
    name: string,
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
    })
}
let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        {id: 2, name: 'B' }
    ]
}
// 鸭式变形法
render(result)
// 处理多余属性
// 方法1 上面的render(result)
// 方法2 类型断言 后置as
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        {id: 2, name: 'B' }
    ]
} as Result)
// 方法3 类型断言 前置断言，此方法在react等jsx语法中不适用
render(<Result>{
    data: [
        { id: 1, name: 'A', sex: 'male' },
        {id: 2, name: 'B' }
    ]
})
// 方法4 使用字段签名
interface List1 {
    readonly id: number, // 只读
    name: string;
    [x: string]: any,
}
interface Result1 {
    data: List1[]
}
function render1(result: Result1) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if(value.age) {
            console.log(value.age)
        }
        if (value.sex) {
            console.log(value.sex)
        }
        // value.id++ // 只读属性不允许修改
    })
}
render1({
    data: [
        { id: 1, name: 'A', sex: 'male', age: 18 },
        {id: 2, name: 'B' }
    ]
})
// 可索引类型有字符串索引和数字索引类型
interface StringArray {
    [index: number]: string // 用任意的数字去索引都会得到一个string
}
let chars: StringArray = ['A','B']
interface Names {
    [x: string]: string, // 字符串索引
    [y: number]: string // 数字索引可以和字符串混用，数字索引返回的类型一定要是字符串索引类型的子类型，原因是JavaScript会进行类型转换把number转换成string，number不能转成string就报错了
}

// 范型
interface ResponseData<T = any> {
    code: number,
    content: string,
    result: T
}
interface ResponseBody<T = List> {
    result: T
}
let response: ResponseData = {
    code: 0,
    content: '',
    result: {
        id: 1,
        name: 'lily'
    }
}
let response1: ResponseData = {
    code: 0,
    content: '',
    result: <List>{ // 类型断言
        id: 1,
        name: 'lily',
        sex: 1
    }
}

let responseBody: ResponseBody<List>

// let定义函数类型
let add2: (x:number, y: number) => number
// 接口定义函数类型
interface Add {
    (x: number, y: number): number
}
// type定义函数
type Add1 = (x: number, y: number) => number
let add3: Add1 = (a, b) => a + b

// 混合类型
interface Lib {
    (): void,
    version: string;
    sayHello(): void
}
// 暴露在全局中，是单例的
let lib: Lib = (() => {}) as Lib
lib.version = '1.0.0'
lib.sayHello = () => {}

// 干净且可以创建多例
function getLib() {
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.sayHello = () => {}
    return lib
}

let lib1 = getLib()
lib()
lib.sayHello()
lib.version
let lib2 = getLib()

// 可选参数
function add4(x: number, y?: number) {
    return y? x + y : x
}
// 默认值
function add5(x: number, y = 0, z = 1) {
    return x + y + z
}
// rest参数
function add6(x: number, y = 0, ...rest: number[]) {
    return x + y + rest.reduce((prev, next) => prev + next)
}

// 函数重载二
function add7(...rest: number[]): number
function add7(...rest: string[]): string
function add7(...rest: any[]): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('')
    }
    if (typeof first === 'number') {
        return rest.reduce((prev, curr) => prev + curr)
    }
}
console.log(add7(1, 2, 3, 4, 5))
console.log(add7('h', 'e', 'l', 'l', 'o', '!',))

// 类的继承和成员的修饰符
// 类的基本实现
class Animal {
    constructor(name: string) {
        this.name = name
    }
    readonly name: string // 只读属性不能被更改，一定要被初始化
    sex: number = 0
    color?: string
    eat() {}
    sleep() {}
    protected pro() {}
}
class Human extends Animal {
    constructor (name: string, nation: string) {
        super(name)
        this.nation = nation
    }
    public name: string = 'Human'
    nation: string
    static readonly role: Role = Role.Normal
    say() {}
    private pri() {
        this.pro() // protected可以被本身和子类调用
    }
}
console.log(Human.prototype)
let human = new Human('大禹', '中国')
human.sex = 5000
// human.pri() 私有属性只能类本身内部调用
console.log(human)
// static 只能通过类调用
console.log(Human.role)

// 被私有化的构造函数的类不能被继承也不能被实例化
class Useless {
    private constructor() {

    }
}
// class B extends Useless {}
// let useLess = new Useless()

// 只能被继承，不能被实例化的类
class BaseClass {
    protected constructor() {}
}
// 构造函数的参数也可以添加修饰符，可以省略类中的定义,代码更简洁
class SimpleClass {
    constructor(public readonly name: string, protected sex: string) {

    }
}

// 抽象类
abstract class Canoidea {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
// let canoidea = new Canoidea() //抽象类不能被实例化
class Dog extends Canoidea {
    constructor(public name: string) {
        super()
        this.name = name
    }
    run() {}
    sleep() {
        console.log('dog zzZ!')
    }
}
let dog = new Dog('wang')
dog.eat()
dog.sleep()
// 抽象类可以实现多态
class Cat extends Canoidea {
    sleep() {
        console.log('cat sleep')
    }
}
let cat = new Cat()
let canoideas: Canoidea[] = [ dog, cat ]
canoideas.forEach(i => {
    i.sleep()
})

// 链式调用
class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new WorkFlow().step1().step2()

// 多态在链式调用中的应用
class MyFlow extends WorkFlow {
    next() {
        return this
    }
}
new MyFlow().next().step1().next().step2().step1()

// 类与接口的关系
interface Human1 {
    // new (name: string): void // 接口只能约束公有成员，不能约束私有成员、构造函数等
    name: string;
    eat(): void;
}
class Asian implements Human1 {
    constructor(public name: string) {
        this.name = name
    }
    eat() {}
    sleep() {}
}
interface Man extends Human1 {
    run(): void
}
interface Child {
    cry(): void
}
// 接口可以继承接口、继承多个接口
interface Boy extends Man, Child {}
let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}
// 接口可以继承类，等于把类抽象成了接口
class Auto {
    state = 1
    // private state2 = 0 // 接口也会抽离私有成员变量
}
interface AutoInteface extends Auto {}
class C implements AutoInteface {
    state = 1
}
class Bus extends Auto implements AutoInteface {}
