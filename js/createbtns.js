import { createElement } from "./createelement.js"

export const createBtns =(app) =>{
    const wrapBtns =createElement('div',{
        className:'app__btns btns',
    });
    const btnLeft =createElement('a',{
        href:'#',
        textContent:'Назад',
    });
    
    const btnRight =createElement('a',{
        href:'#',
        textContent:'Вперед',
    });
    wrapBtns.append(btnLeft,btnRight);
    app.append(wrapBtns); 
}