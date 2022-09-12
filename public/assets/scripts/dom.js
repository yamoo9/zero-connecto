export const typeOf = (data) =>
  Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
export const isObject = (data) => typeOf(data) === 'object';
export const isArray = (data) => typeOf(data) === 'array';
export const isString = (data) => typeOf(data) === 'string';

export const each = (arrayOrObject, callback) => {
  if (isArray(arrayOrObject)) {
    const list = arrayOrObject;
    Array.from(list).forEach(callback);
  }

  if (isObject(arrayOrObject)) {
    const object = arrayOrObject;
    Object.entries(object).forEach(([key, value]) => callback(key, value));
  }
};

const getAttribute = (node, prop) => node.getAttribute(prop);
const setAttribute = (node, prop, value) => node.setAttribute(prop, value);

export const attr = (node, prop, value) => {
  if (!node || node?.nodeType !== document.ELEMENT_NODE) {
    throw new Error('첫번째 전달인자 타입은 요소 노드여야 합니다.');
  }
  if (!value) {
    if (isObject(prop)) {
      const props = prop;
      each(props, (key, value) => {
        setAttribute(node, key, value);
      });
      return node;
    }
    if (isString(prop)) {
      return getAttribute(node, prop);
    }
  } else {
    if (isString(prop)) {
      setAttribute(node, prop, value);
    }
    return node;
  }
};

export const $ = (selector, context = document) =>
  context.querySelector(selector);

export const $$ = (selector, context = document) =>
  context.querySelectorAll(selector);
