'use strict';

const popup = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const popupBtn = document.querySelector('.close-modal')
const btnsOpenPopup = document.querySelectorAll('.show-modal')

const closePopup = function(){
    popup.classList.add('hidden')
    overlay.classList.add('hidden')
}
const openPopup = function(){
    popup.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for( let i=0; i< btnsOpenPopup.length ; i++ ){
    btnsOpenPopup[i].addEventListener('click', openPopup)
}

popupBtn.addEventListener('click', closePopup)

overlay.addEventListener('click', closePopup)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !popup.classList.contains('hidden')){
            closePopup()
    }
})



