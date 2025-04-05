window.sr = ScrollReveal({ reset: true });

sr.reveal(".revealRight", {
  durantion: 5000,
  origin: "right",
  distance: "20%",
  delay: 200,
});
sr.reveal(".revealLeft", {
  durantion: 5000,
  origin: "left",
  distance: "20%",
  delay: 200,
});
sr.reveal(".revealIn", {
  durantion: 5000,
  rotate: { x: 0, y: 80, z: 0 },
  delay: 200,
});

// jQuery
$(document).ready(function () {
  $(".fa-bars").on("click", function () {
    $("#mobileMenu").toggleClass("active");
  });
});

// ChatGPT
// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.getElementById("servicosLista");
//   let autoScrollInterval;
//   const scrollSpeed = 2; // pixels a cada tick
//   const scrollDelay = 20; // intervalo em ms

//   function startAutoScroll() {
//     autoScrollInterval = setInterval(() => {
//       // Auto-scroll: se chegou ao final, volta para o início
//       if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//         slider.scrollLeft = 0;
//       } else {
//         slider.scrollLeft += scrollSpeed;
//       }
//     }, scrollDelay);
//   }

//   function stopAutoScroll() {
//     clearInterval(autoScrollInterval);
//   }

//   // Interrupção do auto-scroll quando o usuário interage
//   slider.addEventListener("mousedown", stopAutoScroll);
//   slider.addEventListener("touchstart", stopAutoScroll);

//   // Reinicia o auto-scroll após interação
//   slider.addEventListener("mouseup", startAutoScroll);
//   slider.addEventListener("touchend", startAutoScroll);

//   // Inicia o auto-scroll
//   startAutoScroll();
// });
// Fim ChatGPT
  // Seleciona os elementos do slider
  const slider = document.getElementById('servicosLista');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicatorsContainer = document.getElementById('sliderIndicators');
  const slides = slider.children;
  const totalSlides = slides.length;
  let currentSlide = 0;
  let autoPlayInterval;

  // Atualiza a posição do slider e os indicadores
  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Atualiza os indicadores
    [...indicatorsContainer.children].forEach((ind, index) => {
      ind.classList.toggle('active', index === currentSlide);
    });
  }

  // Cria os indicadores (bolinhas)
  function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement('div');
      indicator.addEventListener('click', () => {
        currentSlide = i;
        updateSlider();
        restartAutoPlay();
      });
      indicatorsContainer.appendChild(indicator);
    }
    updateSlider();
  }

  // Funções para avançar e retroceder os slides
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Auto-play: avança automaticamente a cada 6 segundos
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 6000);
  }
  
  function restartAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Eventos dos botões
  nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAutoPlay();
  });

  // Inicia o slider se estiver em mobile
  if (window.innerWidth <= 768) {
    createIndicators();
    startAutoPlay();
  }

  // Opcional: atualiza o slider quando a janela for redimensionada
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && indicatorsContainer.children.length === 0) {
      createIndicators();
      startAutoPlay();
    }
  });
