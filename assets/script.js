const question1 = document.querySelector('#question1');
const dontmove = document.querySelector('#dontmove');
const freakout = document.querySelector('#freakout');
const question2 = document.querySelector('#question2');
const stealth = document.querySelector('#stealth');
const other = document.querySelector('#other');
const ans4 = document.querySelector('#ans4');
const reconsidered = document.querySelector('#reconsidered');
const staytrue = document.querySelector('#stayedtrue');

dontmove.addEventListener('click', function() {


        document.querySelector('#ans1').setAttribute('style', 'display:flex');
        question1.setAttribute('style', 'display:none');
        question2.setAttribute('style', 'display:flex');

    
})

freakout.addEventListener('click', function() {


    document.querySelector('#ans2').setAttribute('style', 'display:flex');
    question1.setAttribute('style', 'display:none');
    document.querySelector('#question2').setAttribute('style', 'display:flex')

})

dontmove.addEventListener('click', function() {


    document.querySelector('#ans1').setAttribute('style', 'display:flex');
    question1.setAttribute('style', 'display:none');

})

stealth.addEventListener('click', function() {

    document.querySelector('#ans3').setAttribute('style', 'display:flex')
    question2.setAttribute('style', 'display:none');

})

other.addEventListener('click', function() {

    document.querySelector('#ans4').setAttribute('style', 'display:flex');
    document.querySelector('#ringques').setAttribute('style', 'display:none');
    reconsidered.setAttribute('style', 'display:none');

})


document.querySelector('#nat1').addEventListener('click', function() {

    reconsidered.setAttribute('style', 'display:flex');
    document.querySelector('#business-decision').setAttribute('style', 'display:none');
    
   

})

document.querySelector('#bad').addEventListener('click', function() {

    staytrue.setAttribute('style', 'display:flex');
    document.querySelector('#business-decision').setAttribute('style', 'display:none');
    
   

})


