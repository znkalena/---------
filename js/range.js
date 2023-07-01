const slider = document.querySelector('.range');
const inputRange =document.querySelector('.range__input')


noUiSlider.create(slider, {
    start: [0, 20],
    connect: true,
    step:1,
    range: {
        'min': 0,
        'max': 100
    }
});
slider.noUiSlider.on('update', (values) =>{    
        rangeValue= Math.round(values[1]);
        inputRange.value =`${rangeValue} %`
    })