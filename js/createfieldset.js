import { createElement } from "./createelement.js";

export const createFieldset =(form) =>{
const fieldset = createElement('fieldset',{
    className:'form__field fieldset',
});

const labelSurname =createElement('label',{
    className:'fieldset__label',    
    htmlFor:'surname',
});
const spanSurname =createElement('span',{
    textContent:'Фамилия',
});
const surname =createElement('input',{
    type:'text',    
    id:'surname',
});
labelSurname.append(spanSurname,surname);
fieldset.append(labelSurname);


const labelName =createElement('label',{
    className:'fieldset__label',
    htmlFor:'name',  
});
const spanName =createElement('span',{
    textContent:'Имя',
});
const name =createElement('input',{
    type:'text',
    id:'name',
});
labelName.append(spanName,name);
fieldset.append(labelName);

const labelSecondSurname =createElement('label',{
    className:'fieldset__label',
    htmlFor:'surnamesecond',    
});
const spanSecondSurname =createElement('span',{
    textContent:'Отчество',
});
const secondSurname =createElement('input',{
    type:'text',
    id:'surnamesecond',
});
labelSecondSurname.append(spanSecondSurname,secondSurname);
fieldset.appendChild(labelSecondSurname);


const labelChangeSername =createElement('label',{
    className:'fieldset__label changeSurname',
    textContent:'Меняли фамилию?',
    
});
const wrapRadios = createElement('div',{
    className:'changeSurname__wrap'
});
const spanRadioYes =createElement('span',{
    textContent:'Да',
    htmlFor:'yes',
    });
const inputRadioYes =createElement('input',{    
    type:'radio',
    name:'Да',
    id:'yes'    
});

const spanRadioNo =createElement('span',{
    textContent:'Нет',
    htmlFor:'no',
});
const inputRadioNo =createElement('input',{    
    type:'radio',
    name:'Нет',
    id:'no'    
});

wrapRadios.append(inputRadioYes,spanRadioYes,inputRadioNo,spanRadioNo);
labelChangeSername.append(wrapRadios);
fieldset.append(labelChangeSername);

const labelGender =createElement('label',{
    className:'fieldset__label',
    textContent:'Пол',
});
const wrapCheckboxGender = createElement('div',{
    className:'changeGender__wrap'
});
const spanCheckMen =createElement('span',{
    textContent:'Муж',
});
const checkMen =createElement('input',{
    type:'checkbox',
    value:'Муж',    
});
const spanCheckWomen =createElement('span',{
    textContent:'Жен',
});
const checkWomen =createElement('input',{
    type:'checkbox',
    value:'Жен',    
});
wrapCheckboxGender.append(checkWomen,spanCheckWomen,checkMen,spanCheckMen)
labelGender.append(wrapCheckboxGender);
fieldset.append(labelGender);

const labelMarried =createElement('label',{
    className:'fieldset__label',
    textContent:'Семейное положение',
    htmlFor:'married'
});
const selectMarried =createElement('select',{
    className:'fieldset__select',
    id:'married'   
});
const optionMarried =createElement('option',{
    value:'value1',
    textContent:'женат/замужем',
});
selectMarried.append(optionMarried);
labelMarried.append(selectMarried);
fieldset.append(labelMarried);

const labelMigration =createElement('label',{
    className:'fieldset__label',
    textContent:'Гражданство',
    htmlFor:'migrait'
});
const selectMigration =createElement('select',{
    className:'fieldset__select',
    id:'migrait',   
});
const optionMigration =createElement('option',{
    value:'Российская федерация',
    textContent:'Российская федерация',
});
selectMigration.append(optionMigration);
labelMigration.append(selectMigration);
fieldset.append(labelMigration);

const labelBirthday =createElement('label',{
    className:'fieldset__label birthday',
    textContent:'Дата рождения',
    htmlFor:'birthday',
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
    labelBirthday.append(wrapSelectBirthday);
    fieldset.append(labelBirthday);

const labelPlace =createElement('label',{
        className:'fieldset__label labelplace',
        textContent:'Место рождения',
        htmlId:'place',
    });
const place =createElement('input',{
        type:'text',
        id:'place',       
    });    
const spanPlace =createElement('span',{
        textContent:'Например,Россия,Комсомольск-на-Амуре',
    });
    labelPlace.append(place,spanPlace)    
    fieldset.append(labelPlace);    

form.append(fieldset);

}


