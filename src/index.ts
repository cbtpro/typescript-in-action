import './datatype'
let hello: string = "Hello Typescript! " + BASE_URL
document.querySelectorAll('.app')[0].innerHTML = hello

/** typescript类型检查的3种方法 */

interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

/**
 * 检查类型中是否存在height属性
 * @param shape Shape
 * @returns number
 */
function calculateArea(shape: Shape) {
  if ('height' in shape) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

/**
 * 增加kind属性判断
 */
interface Square1 {
  kind: 'square';
  width: number;
}

interface Rectangle1 {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape1 = Square1 | Rectangle1;
function calculateArea1(shape: Shape1) {
  if (shape.kind === 'rectangle') {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

/**
 * 使用class和instanceof判断
 */
class Square2 {
  constructor(public width: number) {}
}
class Rectangle2 extends Square2 {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape2 = Square2 | Rectangle2;

function calculateArea2(shape: Shape2) {
  if (shape instanceof Rectangle2) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

/** ts中函数重载实现 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  return [a, b].join(' ');
}

console.log('add(1, 2) = ', add(1, 2));
console.log('add(\'hello\', \'world\') = ', add('hello', 'world'));
console.log('add(\'age\', \'18\') = ', add('age', 18));
console.log('add(2023, \'年\') = ', add(2023, '年'));

type customArray = (string | number | boolean)[];
function len(s: string): number;
function len(arr: customArray): number;
function len<T extends customArray>(x: T) {
  return x.length;
}
console.log('len(\'hello world\')', len('hello world'));
console.log('len([1, 2, 3])', len([1, 2, 3, 'hello world', true]));

/** class继承中的函数重载 */
class Person {
  name: string = '干饭人';
  constructor(name: string) {
    this.name = name;
  }
  eat(): void {
    console.log(this.name + '饿了就吃');
  }
}

class Student extends Person {
  rollNumber: number = 0;
  constructor(rollNumber: number, name: string) {
    super(name);
    // 因为有了super(name)和person中的构造函数，所以不用再次赋值name
    // this.name = name;
    this.rollNumber = rollNumber;
  }
  displayInformation(): void {
    console.log(`${this.name} 滚动${this.rollNumber}圈`);
  }
  override eat(): void {
    console.log(this.name, '午餐时吃饭');
  }
}

const student = new Student(10, '小明');
student.displayInformation();
student.eat();
/**
 * 重写函数时override可以省略
 */

/** 
 * 鸭子定律
 * 鸭子定律是逻辑理论。比如定律1说的是事物的外在特征就是事物本质的表现。
 * If it looks like a duck, walks like a duck, and quacks like a duck, it's a duck.
 * 如果它看起来像鸭子，走起来像鸭子，叫起来像鸭子，它就是鸭子
 */
interface Vector2D {
  x: number;
  y: number;
}
interface NamedVector {
  name: string;
  x: number;
  y: number;
}
function calculateLength(vector: Vector2D) {
  const { x, y } = vector; 
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
const vector: NamedVector = {
  name: 'entry',
  x: 10,
  y: 10,
}

console.log(calculateLength(vector));

/**
 * 虽然NamedVector和Vector2D不是同一个类型，多了name，但是也包含了x、y
 * 没有明确过它俩的关系，但是ts来时允许calculateLength传入NamedVector类型
 * 这说明ts也遵循鸭子规则
 */

/**
 * 所以这里要特别注意下面这种情况
 */
interface Vector3D {
  x: number;
  y: number;
  z: number;
}
function normalize1(vector: Vector3D) {
  const length = calculateLength(vector);
  const { x, y, z } = vector;
  return {
    x: x / length,
    y: y / length,
    z: z / length,
  }
}

/**
 * 执行的结果并不正确，而ts也没有识别出来，这就是鸭子定律带来的坏处
 * 正确的做法是依然要去实现一个三维向量的归一化函数
 */
normalize({ x: 3, y: 4, z: 5}); // ==> { x: 0.6, y: 0.8, z: 1}

function normalize(vector: Vector3D): number;
function normalize(vector: Vector3D) {
  const { x, y, z } = vector;
  return Math.abs(x) + Math.abs(y) + Math.abs(z);
}

/**
 * 严格限制any类型的使用
 * 如果不是从js迁移到ts，在项目一开始就使用ts时，一定要严格显示any类型的使用
 * 这对于ts项目是有很大的好处的
 */
let age: number;
// age = '12'; // 不能将类型“string”分配给类型“number”。ts(2322)
age = '12' as any; // 这种写法虽然很诱人，但是使用any消除了ts的很多优点

/**
 * any没有类型安全
 * any类型没有ide的类型提示和自动补全
 * any会掩盖重构代码时的错误，造成重构困难
 * any遮蔽了你的类型设计
 * any会让类型检查器和ts语言服务（tsserver）变成哑巴，损坏开发体验，破坏开发者对ts的信息
 * 所以尽量避免使用any
 */
