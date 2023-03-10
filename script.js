
const btn = document.querySelector('#start-btn');
const cbtn = document.querySelector('#close-btn');
const container=document.querySelector('#conatainer')

btn.addEventListener('click', function () {
    conatainer.style.display = 'block';
})
cbtn.addEventListener('click', function () {
    conatainer.style.display = 'none';
})
window.addEventListener('click', function (e) {
    if(e.target===conatainer){
        conatainer.style.display='none'
    }
})