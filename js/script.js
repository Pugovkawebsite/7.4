'use strict'

let accordion = document.querySelectorAll('.accordion');
let text = document.querySelectorAll('.accordion__text');
let panel = document.querySelectorAll('.panel');
let arrow = document.querySelectorAll('.accordion__arrow');


// console.log(accordion);

function closeQuestion() {
    // text.classList.remove('accordion__text__active');
    panel.forEach(function(p) {
        p.classList.remove('panel__active');
        p.classList.add('panel');
    })
    arrow.forEach(function(a) {
        a.classList.remove('accordion__arrow__active');
    })
    text.forEach(function(b) {
        b.classList.remove('accordion__text__active');
    })
    accordion.forEach(function(ac) {
        ac.classList.remove('accordion__active');
    })
    
    
}

// accordion.forEach(function(elem, i, accordion) {
//     elem.addEventListener('click', function() {
//         panel.forEach(function(t) {
//             if (t.classList.contains('panel__active')) {
//                 closeQuestion();
                            
//             } else {
//                 closeQuestion();
//                 text[i].classList.add('accordion__text__active');
//                 panel[i].classList.add('panel__active');
//                 panel[i].classList.remove('panel');
//                 arrow[i].classList.add('accordion__arrow__active'); 
//             }
//         })
               
       
//     })
// });

// text.forEach(function(t) {
//     t.addEventListener('click', function() {
//         if (t.classList.contains('accordion__text__active')) {
//             closeQuestion();
            
//         }
//     });
// });


accordion.forEach(function(elem, i, accordion) {
    elem.addEventListener('click', function() {
       
              
        if (elem.classList.contains('accordion__active')) {
            closeQuestion();
        } else {
            closeQuestion();
            elem.classList.add('accordion__active');
            text[i].classList.add('accordion__text__active');
            panel[i].classList.add('panel__active');
            panel[i].classList.remove('panel');
            arrow[i].classList.add('accordion__arrow__active'); 
        }
               
       
    })
});