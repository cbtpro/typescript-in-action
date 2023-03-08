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