import { createElement } from "./createelement.js"

export const createPagination = (app) => {
    const wrapPagination =createElement('div',{
        className:'app__pagination wrappagin',
    });
    const title =createElement('h2',{
        className:'wrappagin__title',
        textContent:'Заполните форму',
    });
    wrapPagination.append(title);
    
    const listPagination =createElement('ul',{
        className:'wrappagin__list',
    })
    for(let i=1;i<6;i++){        
            const itemPagination =createElement('li',{
                className:'wrappagin__item',            
            });
            const linkPagination =createElement('a',{
                className:'wrappagin__link',
                textContent :`${i}`
            });            
            itemPagination.append(linkPagination); 
            listPagination.append(itemPagination);                       
        }        
    listPagination.childNodes[2].classList.add('wrappagin__item-active');
    listPagination.childNodes[0].classList.add('wrappagin__item-before');
    listPagination.childNodes[1].classList.add('wrappagin__item-before');
    
    wrapPagination.append(listPagination);
    app.append(wrapPagination);
};