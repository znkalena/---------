import { createElement } from "./createelement.js";

export const createFieldset =(form) =>{
const fieldset = createElement('fieldset',{
    className:'form__field fieldset',
});
const fieldsetBlockSurname = createElement('div',{
    className:'fieldset__block block'
});
const labelSurname =createElement('label',{        
    htmlFor:'surname',
});
const titleSurname =createElement('h3',{
    textContent:'Фамилия',
});
const surname =createElement('input',{
    type:'text',    
    id:'surname',
    name:'surname',
});
labelSurname.append(surname);
fieldsetBlockSurname.append(titleSurname,labelSurname)
fieldset.append(fieldsetBlockSurname);

const labelName =createElement('label',{    
    htmlFor:'name',  
});
const fieldsetBlockName = createElement('div',{
    className:'fieldset__block block'
});
const titleName =createElement('h3',{
    textContent:'Имя',
});
const name =createElement('input',{
    type:'text',
    id:'name',
    name:'name',
});
labelName.append(name);
fieldsetBlockName.append(titleName,labelName);
fieldset.append(fieldsetBlockName);

const labelSecondSurname =createElement('label',{   
    htmlFor:'surnamesecond',    
});
const fieldsetBlockSecondSurname = createElement('div',{
    className:'fieldset__block block'
});
const titleSecondSurname =createElement('h3',{
    textContent:'Отчество',
});
const secondSurname =createElement('input',{
    type:'text',
    id:'surnamesecond',
    name:'surnamesecond'
});
labelSecondSurname.append(secondSurname);
fieldsetBlockSecondSurname.append(titleSecondSurname,labelSecondSurname);
fieldset.appendChild(fieldsetBlockSecondSurname);


const titleChangeSurname =createElement('h3',{
    className:'block__label',
    textContent:'Меняли фамилию?',    
});
const fieldsetBlock = createElement('div',{
    className:'fieldset__block block block-change'
});
const wrapRadios = createElement('div',{
    className:'block__wrap',
});
const labelYes =createElement('label',{
    htmlFor:'yes',
});
const labelNo =createElement('label',{
    htmlFor:'no',
});
const spanRadioYes =createElement('span',{
    textContent:'Да',    
    });
const inputRadioYes =createElement('input',{    
    type:'radio',
    name:'Да',
    id:'yes'    
});

const spanRadioNo =createElement('span',{
    textContent:'Нет',    
});
const inputRadioNo =createElement('input',{    
    type:'radio',
    name:'Нет',
    id:'no',
    checked:true,    
});
labelYes.append(inputRadioYes,spanRadioYes);
labelNo.append(inputRadioNo,spanRadioNo);
wrapRadios.append(labelYes,labelNo);
fieldsetBlock.append(titleChangeSurname,wrapRadios);
fieldset.append(fieldsetBlock);

const titleChangeGender =createElement('h3',{
    className:'block__label',
    textContent:'Пол',
});
const fieldsetBlockGender = createElement('div',{
    className:'fieldset__block block block-change'
});
const wrapRadioGender = createElement('div',{
    className:'block__wrap',
});
const spanCheckMen =createElement('span',{
    textContent:'Муж',
});
const checkMen =createElement('input',{
    type:'checkbox',
    name:'Муж',
    id:'men',
    checked:'true',    
});
const labelMen =createElement('label',{
    htmlFor:'men',
});
const labelWomen =createElement('label',{
    htmlFor:'women',
});
const spanCheckWomen =createElement('span',{
    textContent:'Жен',
});
const checkWomen =createElement('input',{
    type:'checkbox',
    name:'Жен',
    id:'women',    
});
labelMen.append(checkMen,spanCheckMen);
labelWomen.append(checkWomen,spanCheckWomen);
wrapRadioGender.append(labelMen,labelWomen);
fieldsetBlockGender.append(titleChangeGender,wrapRadioGender);
fieldset.append(fieldsetBlockGender);

const fieldsetBlockMarried = createElement('div',{
    className:'fieldset__block block block-married'
});
const titleMarried =createElement('h3',{
    className:'fieldset__label',
    textContent:'Семейное положение',    
});
const selectMarried =createElement('select',{
    className:'block__select',
    htmlFor:'married'   
});
const optionMarried =createElement('option',{
    value:'value1',
    textContent:'женат/замужем',    
    id:'married'
});
selectMarried.append(optionMarried);
fieldsetBlockMarried.append(titleMarried,selectMarried);
fieldset.append(fieldsetBlockMarried);

const fieldsetBlockMigration = createElement('div',{
    className:'fieldset__block block block-migrate'
});
const titleMigration =createElement('h3',{    
    textContent:'Гражданство',    
});
const selectMigration =createElement('select',{
    className:'fieldset__select',
    htmlFor:'migrate'  
});
const optionMigration =createElement('option',{
    value:'Российская федерация',
    textContent:'Российская федерация',
    id:'migrate',
});
selectMigration.append(optionMigration);
fieldsetBlockMigration.append(titleMigration,selectMigration);
fieldset.append(fieldsetBlockMigration);

const fieldsetBlockBirthday = createElement('div',{
    className:'fieldset__block block'
});
const titleBirthday =createElement('label',{    
    textContent:'Дата рождения',    
});
const wrapSelectBirthday =createElement('div',{
    className:'birthday__wrap',
})
const selectDay =createElement('select',{
    className:'fieldset__select',
    id:'birthday',   
});
for(let i=1;i <=31;i++){
    const optionDay =createElement('option',{
        textContent:`${i}`,
        value:'i',
    });
    selectDay.append(optionDay);
}
const selectMonth =createElement('select',{
    className:'fieldset__select',   
});
const month =['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноб','дек'];
for(let i=0;i < 12;i++){
    const optionMonth =createElement('option',{
        textContent:`${month[i]}`,
        value:'i'
    });
    selectMonth.append(optionMonth);
}
const selectYear =createElement('select',{
    className:'fieldset__select',   
});
for(let i=1966;i<=2023;i++){
    const optionYear =createElement('option',{
        value:'i' ,
        textContent:`${i}`,
    });
    selectYear.append(optionYear);
} 
    wrapSelectBirthday.append(selectDay,selectMonth,selectYear)
    fieldsetBlockBirthday.append(titleBirthday,wrapSelectBirthday);
    fieldset.append(fieldsetBlockBirthday);

const fieldsetBlockPlace = createElement('div',{
    className:'fieldset__block block block-place'
});
const titlePlace =createElement('h3',{        
        textContent:'Место рождения',       
    });
const labelPlace =createElement('label',{
    htmlFor:'place'
})    
const place =createElement('input',{
        type:'text',
        id:'place',       
    });    
const spanPlace =createElement('span',{
        textContent:'Например,Россия,Комсомольск-на-Амуре',
    });
    labelPlace.append(place,spanPlace);
    fieldsetBlockPlace.append(titlePlace,labelPlace);    
    fieldset.append(fieldsetBlockPlace);    

form.append(fieldset);

}


