import {createElement} from './createelement.js'
const app = document.querySelector('.app')

const createHeader = () => {
    const conteiner =createElement('div',{
        className :'header__conteiner',
    });
    
    const list =createElement('ul',{
        className:'header__list',
    });
    const item = createElement('li',{
        className:'header__item',
    });
    const link = createElement('a',{
        className:'header_link',
        href:'#',
        textContent:'Личный кабинет'
    });
    item.append(link);
    list.append(item);

    for(let i=1; i<=5; i++){
        const item =createElement('li',{
            className:'header__item',            
        });
        const link = createElement('a',{
            className:'header_link',
            href:'#',
            textContent:`Раздел ${i}`,
        });
        item[i].append(link);
        list.append(item[i]);
    }

    conteiner.append(list);    
    console.log(conteiner);
    return conteiner;
}

