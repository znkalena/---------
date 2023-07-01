const createElement = (tagName,attributes) => {
const elementCreated =document.createElement(tagName);
return Object.assign(elementCreated,attributes);
}