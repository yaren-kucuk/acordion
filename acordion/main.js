const accordions= document.querySelectorAll('.accordion')

accordions.forEach((accordion )=>{
  const accordionButton=accordion.querySelector('.accordionButton');
  accordionButton.addEventListener('click',()=>{
    //togle metodu ile eger aktif methodu varsa ekiyicem
    accordion.querySelector('.minusIcon').classList.toggle('active');
    accordion.querySelector('.plusIcon').classList.toggle('active');
    accordion.querySelector('.accordionText').classList.toggle('active');

  })

})
//toggle ile foreachin içinde dönerek ayrı ayrı çalıştırır
