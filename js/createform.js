import { createElement } from "./createelement.js";
import { createFieldset } from "./createfieldset.js";


export const createForm = (app) => {
    const form = createElement('form',{
    className:'app__form',
    });
    const legend = createElement('legend',{
        textContent:'Общая информация'
    });
    form.append(legend);
    createFieldset(form);
    app.append(form);    
}