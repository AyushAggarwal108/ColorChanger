const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');

boxes.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
        body.style.backgroundColor =  window.getComputedStyle(e.target).backgroundColor;
    })
})
