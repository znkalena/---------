import { createElement } from "./createelement.js"

export const createBtns =(app) =>{
    const wrapBtns =createElement('div',{
        className:'app__btns btns',
    });
    const btnLeft =createElement('button',{
        className:'btn btn-left',
        type:'button',
        textContent:'Назад',
        disabled:true,
    });
    
    const btnRight =createElement('button',{
        className:'btn btn-right btn-active',
        type:'button',
        textContent:'Вперед',       
    });
    wrapBtns.append(btnLeft,btnRight);
    app.append(wrapBtns); 
}