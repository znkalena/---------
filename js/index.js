const ratingInputs =document.querySelectorAll('.rating__input');

ratingInputs.forEach(input  => {
input.addEventListener('change',() =>{
    const arrayInputs =Array.from(ratingInputs);
    const indexChanged =arrayInputs.findIndex(index => index.checked);
    arrayInputs.forEach((input,index) =>{
        if(index >= indexChanged){
            input.nextElementSibling.classList.add('selected')
        }else{
            input.nextElementSibling.classList.remove('selected')
        }
    })
})
});