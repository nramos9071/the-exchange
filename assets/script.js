const question1 = document.querySelector('#question1');
const dontmove = document.querySelector('#dontmove');
const freakout = document.querySelector('#freakout');
const question2 = document.querySelector('#question2');
const stealth = document.querySelector('#stealth')

dontmove.addEventListener('click', function() {


        document.querySelector('#ans1').setAttribute('style', 'display:flex');
        question1.setAttribute('style', 'display:none')
        question2.setAttribute('style', 'display:flex')

    
})

freakout.addEventListener('click', function() {


    document.querySelector('#ans2').setAttribute('style', 'display:flex');
    question1.setAttribute('style', 'display:none')

})

dontmove.addEventListener('click', function() {


    document.querySelector('#ans1').setAttribute('style', 'display:flex');
    question1.setAttribute('style', 'display:none')

})

stealth.addEventListener('click', function() {

    document.querySelector('#ans3').setAttribute('style', 'display:flex')
    question2.setAttribute('style', 'display:none')

})



