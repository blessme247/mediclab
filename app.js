const navbar = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('.body');

navToggle.addEventListener('click', () => {
  const visibility = navbar.getAttribute('data-visible');
  if (visibility === "false") {
    
    navbar.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    body.style.overflow = 'hidden'
  } else if (visibility === "true") {
    navbar.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    body.style.overflow = 'visible'
  }
})


var caret = document.getElementsByClassName('answer-button');
var i;
for (i = 0; i < caret.length; i++) {
  caret[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.parentElement.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.removeAttribute("style");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } 
  });
}


showToggle = (e) => {
    if (e.parentElement.nextElementSibling.style.display === "block")  {
        e.style.transform = "rotate(0deg)";
        e.style.transition = "all .3s ease"
      e.parentElement.nextElementSibling.style.display = "none";
    } 
    else {
        e.style.transform = "rotate(180deg)";
        e.style.transition = "all .3s ease"
      e.parentElement.nextElementSibling.style.display = "block";
    }
  };
 
  // const { counterUp } = window.counterUp;
  // import counterUp from'counterup2.js';
//   const {counterUp} = require('counterup2');
// const callback = entries => {
// 	entries.forEach( entry => {
// 		const el = entry.target
// 		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
// 			counterUp( el, {
// 				duration: 2000,
// 				delay: 16,
// 			} )
// 			el.classList.add( 'is-visible' )
// 		}
// 	} )
// }

// const IO = new IntersectionObserver( callback, { threshold: 1 } );
// const el = document.querySelector( '.counter' );
// IO.observe( el );

  
  // const el = document.querySelector( '.counter' )
  // IO.observe( el )

// const el = document.querySelector( '.counter' )


//   const counters = document.querySelectorAll('.count');
//   const speed = 200;
//   const speed1 = 9;

//   counters.forEach((record) => {
//     const updateCount = () => {
//       const target = parseInt(record.getAttribute('data-target'));
//       const count = parseInt(record.innerText);
//       const increment = Math.trunc(target / speed);
  
//       if (count < target ) {
//         record.innerText = count + increment ;
//         setTimeout(updateCount, 1);
//       } else {
//         record.innerText = target;
//       }
//     };
//     updateCount();
//   });
//   const records = document.querySelector('.records');
//   const observer = new IntersectionObserver ((entries) => {
//       entries.forEach (entry => {
//         const el = entry.target;
//         if(el.isIntersecting){
//           updateCount();
//         }
//       })
//   })
//   records.forEach(record => { 
//   observer.observe(records);
// } )

  // const callback = entries => {
  //   entries.forEach( entry => {
  //     const el = entry.target
  //     if ( entry.isIntersecting) {
  //       updateCount();
  //     }
  //   } )
  // }

//   const IO = new IntersectionObserver( updateCount, { threshold: 1 } )

// const el = document.querySelector( '.records' )
// IO.observe( el )
  
 

  





  

