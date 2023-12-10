/*=============== bottles cards ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 50,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    500: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    }
  },
});

// --------------william campbell----------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 250,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints:{
    300: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1,
      spaceBetween: 75,
    },
    968: {
      slidesPerView: 2,
      spaceBetween: 150,

    }
  },
});


// --------------navbar----------------
document.addEventListener("DOMContentLoaded", function () {
  // Escucha el evento de cambio de estado del collapse (mostrado)
  document.querySelector('.navbar-collapse').addEventListener('shown.bs.collapse', function () {
      // Agrega la clase al cuerpo del documento
      document.body.classList.add('no-scroll');
  });

  // Escucha el evento de cambio de estado del collapse (oculto)
  document.querySelector('.navbar-collapse').addEventListener('hidden.bs.collapse', function () {
      // Quita la clase al cuerpo del documento
      document.body.classList.remove('no-scroll');
  });
});

const body= document.body;
let lastScroll =0;
const button = document.getElementById('scrollButton'); // Reemplaza 'tuBotonId' con el ID de tu botón


window.addEventListener('scroll', ()=>{
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0){
    body.classList.remove("scroll-up")
  }

  if (currentScroll> lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
    button.style.display = 'none';
  }

  else if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up");
    button.style.display = 'block'; // Puedes ajustar el estilo según tus necesidades

  }


  lastScroll = currentScroll
})

    /*=============== INTERSECTIONOBSERVER SECTION0 ===============*/

    const observer = new IntersectionObserver((entries) =>{
      entries.forEach ((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
          entry.target.classList.add('show');
          }else{
            entry.target.classList.remove('show')
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))


        /*=============== INTERSECTIONOBSERVER CARDS ===============*/

    const observer1 = new IntersectionObserver((entries) =>{
      entries.forEach ((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
          entry.target.classList.add('show1');
          }else{
            entry.target.classList.remove('show1')
        }
      });
    });

    const hiddenElements1 = document.querySelectorAll('.hidden1');
    hiddenElements1.forEach((el) => observer1.observe(el))

            /*=============== INTERSECTIONOBSERVER SECTION4 ===============*/

            const observer2 = new IntersectionObserver((entries) =>{
              entries.forEach ((entry) =>{
                console.log(entry)
                if (entry.isIntersecting){
                  entry.target.classList.add('show2');
                  }else{
                    entry.target.classList.remove('show2')
                }
              });
            });
        
            const hiddenElements2 = document.querySelectorAll('.hidden2');
            hiddenElements.forEach((el) => observer.observe(el))



