export const createElement = (tagName,attributes) => {
const elementCreated =document.createElement(tagName);
Object.assign(elementCreated,attributes)
return elementCreated;
}