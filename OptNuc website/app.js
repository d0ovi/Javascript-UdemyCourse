function init() {
  const slides = document.querySelectorAll('.slide');
  const pages = document.querySelectorAll('.page');
  const backgrounds = [
    `radial-gradient(#f2e0cf, #75370a)`,
    `radial-gradient(#fff8e0, #a17a3a)`,
    `radial-gradient(#fedfd2, #b64616)`,
  ];
  //tracker
  let current = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener('click', function () {
      changeDots(this);
      nextSlide(index);
    });
  });

  function changeDots(dot) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    dot.classList.add('active');
  }

  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector('.hero .model-left');
    const nextRight = nextPage.querySelector('.hero .model-right');
    const currentLeft = currentPage.querySelector('.hero .model-left');
    const currentRight = currentPage.querySelector('.hero .model-right');
    const nextText = nextPage.querySelector('.details');
    const portofolio = document.querySelector('.portofolio');

    current = pageNumber;
    console.log(current);
    console.log(currentLeft);
    console.log(currentRight);
    console.log(nextLeft);
    console.log(nextRight);

    const tl = new TimelineMax();
    if (currentPage !== nextPage) {
      tl.fromTo(currentLeft, 0.3, { y: '-10%' }, { y: '-100%' })
        .fromTo(currentRight, 0.3, { y: '10%' }, { y: '-100%' }, '-=0.2')
        .to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
        .fromTo(
          currentPage,
          0,
          { opacity: 1, pointerEvents: 'all' },
          { opacity: 0, pointerEvents: 'none' }
        )
        .fromTo(
          nextPage,
          0.3,
          { opacity: 0, pointerEvents: 'none' },
          { opacity: 1, pointerEvents: 'all' },
          '-=0.6'
        )
        .fromTo(nextLeft, 0.3, { y: '-100%' }, { y: '-10%' }, '-=0.6')
        .fromTo(nextRight, 0.3, { y: '-100%' }, { y: '10%' }, '-=0.8')
        .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 })
        //I need to clearprops so the hover function would work again
        .set(nextLeft, { clearProps: 'all' })
        .set(nextRight, { clearProps: 'all' });
    }
  }
}

init();
