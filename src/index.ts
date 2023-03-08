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

