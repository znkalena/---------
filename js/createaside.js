import { createElement } from "./createelement.js"

export const createAside = (app) => {
    const aside =createElement('aside',{
    className:'app__aside aside'
    });
    const title =createElement('h2',{
        textContent:'TuTuRu',
        className:'aside__title',
    });
    const paragraf = createElement('p',{
        textContent:'ТЕХТ',
        className:'aside__text',
    });
    aside.append(title,paragraf) ;
    app.append(aside); 
}