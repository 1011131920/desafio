function open(selectModal) {
    const ctud = document.getElementById(selectModal); 
    ctud.classList.add('popsup');
    ctud.addEventListener('click' , (e) => {
        if (e.target.id ==  selectModal || e.target.className == 'close'){
            ctud.classList.remove('popsup');
        }
    });
}
const desapere = document.querySelector('.qa');
desapere.addEventListener('click', function(){
    open('mod');
})

