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
    November,
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

// 泛型
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
abstract class Pet {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
// let pet = new Pet() //抽象类不能被实例化
class Dog extends Pet {
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
class Cat extends Pet {
    sleep() {
        console.log('cat sleep')
    }
}
let cat = new Cat()
let pets: Pet[] = [ dog, cat ]
pets.forEach(pet => {
    pet.sleep()
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
interface AutoInterface extends Auto {}
class Auto1 implements AutoInterface {
    state = 1
}
class Bus extends Auto implements AutoInterface {}

// 泛型二
// 可是使用函数重载来实现泛型
// 可以使用联合类型使用泛型

function log<T>(value: T): T {
    console.log(value)
    return value;
}
// 断言使用泛型
log<string[]>(['a', 'b'])
// 类型推断使用泛型 推荐
log(['a', 'b'])

// 泛型函数定义
type Log = <T>(value: T) => T
// 泛型函数实现
let myLog: Log = log

// 接口使用范型
interface Log1 {
    <T>(value: T): T
}
interface Log2<T = string> {
    (value: T): T
}
let myLog2: Log2<number> = log


interface Log3<T> {
    data: T
}
class Log33 implements Log3<Log> {
    data: Log = log
}
// 泛型类的约束作用
class Log4<T> {
    run(value: T) {
        console.log(value)
    }
}
let log4 = new Log4<number>()
log4.run(4)
let log5 = new Log4<string>()
log5.run('你好')

let log6 = new Log4()
log6.run(1)
log6.run('hello')

interface Length {
    length: number
}
function log7<T extends Length>(value: T) {
    console.log(value, value.length)
}
log7([1, 3, 4])
log7('hello')
log({ length: 9 })

// 类型检查机制
// 类型推断
let a = 1 // a类型推断为number
let b = 'hello' // b类型推断为string
let c = [] // c类型推断为Array
let d = [1, null] // 推断为number和null联合类型
let e = (x = 1) => x + 1 // 从右向左推断函数

// 上下文类型推断，从左到右推断
document.addEventListener('click', (event) => {
    console.log(event.target)
})

// 类型断言二
interface Foo {
    bar: number
}
let foo = {} as Foo // 可能会滥用，bar可能不会赋值
foo.bar = 1
let foo1: Foo = {
    bar: 2
}
// 类型兼容性
// x兼容y： x = y
let s: string = 'a'
// s = null // 需要开启空值检查strictNullChecks
interface X {
    a: any
    b: any
}
interface Y {
    a: any
    b: any
    c: any
}
// 类型兼容遵循鸭式变形法
let x1: X = {a: 1, b: 2}
let y1: Y = {a: 1, b: 2, c: 3}
x1 = y1 // x1兼容y1
// y1 = x1 // y1不兼容x1
// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(Handler: Handler) {
    return Handler
}
hof(() => {})
hof((a: number) => {})
hof((a: number, b: number) => {})
// hof((a: number, b: number, c: number) => {}) // 参数个数要求
let func1 = (a: number, b: number, c: number) => {}
hof(<Handler>func1 as Handler)
hof(func1 as Handler)
// hof((a: string) => {}) // 参数类型要求

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let point3d = (point: Point3D) => {};
let point2d = (point: Point2D) => {};
// point2d = point3d // 关闭strictFunctionTypes才可以赋值，这种情况叫做函数的参数协变
point3d = point2d
// 返回值类型
let f = () => ({ name: 'Lily' })
let g = () => ({ name: 'Lily', location: 'Shenzhen' })
// g = f // g的返回值类型比f的返回值类型多
f = g

function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}
// function overload(a: any, b: any, c: any): any {} 函数重载实现参数多余定义，不兼容
// function overload(a: any, b: any): void {} // 函数重载返回值不一样，不兼容

// 枚举兼容性,枚举和number之间相互兼容
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit = Fruit.Apple;
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple // 枚举和枚举之间不兼容
// 类兼容性
class A {
    constructor(p: number, q: number) {
    }
    id: number = 1
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number =2
}
let aa = new A(1, 2)
let bb = new B(1)
aa == bb
bb == aa

class C {
    constructor(p: number, q: number) {
    }
    id: number = 1
    private name: string = ''
}
class D {
    static s = 1
    constructor(p: number) {}
    id: number =2
    private name: string = ''
}
let cc = new C(1, 2)
let dd = new D(1)
// cc == dd 私有成员会进行比较，但是子类和父类的私有变量是兼容的
// dd == cc
// 范型兼容
interface Empty<T> {}
let obj1: Empty<number> = {}
let obj2: Empty<string> = {}
obj1 = obj2
obj2 = obj1
let log8 = <T>(x: T): T => {
    console.log(x)
    return x
}
let log9 = <Z>(y: Z): Z => {
    console.log(y)
    return y
}
log8 = log9
log9 = log8

// 类型保护
enum Type { Strong, Week }
class Java {
    helloJava() {
        console.log('Hello Java')
    }
}
class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
}
function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if((lang as Java).helloJava) {
        (lang as Java).helloJava()
    } else {
        (lang as JavaScript).helloJavaScript()
    }
    // 类型断言 instanceof
    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    // 类型断言 in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // typeof 基本类型
    if(typeof x === 'string') {
        x.length
    } else {
        x.toFixed(2)
    }
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}
// 类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}
getLanguage(Type.Strong, 1)


// 高级类型
// 交叉类型取的是并集
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface
class Dog1 implements DogInterface {
    run() {}
    jump() {}
    eat() {}
}
class Cat1 implements CatInterface {
    jump() {}
    eat() {}
}
// 联合类型
let aaa: number | string = 'aa'
let bbb: 'a' | 'b' | 'C'
let ccc: 1 | 2 | 3
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog1() : new Cat1()
    pet.eat()
    // pet.run()
    return pet
}
interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'circle',
    r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.width * s.height
        case 'circle':
            return Math.PI * s.r ** 2
        default:
            return ((e: never) => { throw new Error(e)})(s) // 还有一种方法指定返回值为number
    }
}
console.log(area({ kind: 'circle', r: 3}))
// 索引类型
let obj3 = {
    a: 1,
    b: 2,
    c: 3
}
function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}
console.log(getValues(obj3, ['a', 'b']))
console.log(getValues(obj3, ['a', 'f']))
// keyof T
interface Obj {
    a: number
    b: string
}
let key: keyof Obj
// T[K]
let value: Obj['a']
// T extends U
function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
console.log(getValues2(obj3, ['a', 'b']))
// console.log(getValues2(obj3, ['e', 'f']))

// 映射类型
interface Obj1 {
    a: string,
    b: number;
    c: boolean;
}
// 同态
type ReadonlyObj = Readonly<Obj1> // 只读
type PartialObj = Partial<Obj1> // 
type PickObj = Pick<Obj1, 'a' | 'b'> // 抽取
// 非同态
type RecordObj = Record<'x' | 'y', Obj1>

// 条件类型
// T extends U ? X : Y
type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>
type T3 = TypeName<() => {}>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T4 = TypeName<string | string[]>

// 类型过滤
type Diff<T, U> = T extends U ? never : T
type T5 = Diff<'a' | 'b' | 'c', 'a' | 'e'> // Diff<'a', 'b', 'e'> | Diff<'b', 'a', | 'e'> | Diff<'c', 'a' | 'e'>
type NotNull<T> = Diff<T, undefined | null>
type T6 = NotNull<string | number | undefined | null> // 官方已经实现Exclude<T, U>、 NonNullable<T>、Extract<T, U>等
type T7 = Extract<'a' | 'b' | 'c' | 'd' | 1 | true,  string | number>
type T8 = ReturnType<() => string>
