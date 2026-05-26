
const badgeEl = document.querySelector('header .badges');

const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션 )
    gsap.to(badgeEl,  .6, {
      opacity :0,
      display : 'none'
    } );
    gsap.to(toTopEl, .2, {
      x:0
    });
  }else{
    // 배지 보이기
        gsap.to(badgeEl,  .6, {
      opacity :1,
      display :'block'
    } );
    // 버튼 숨기기 
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
},300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo:0
  })
})

  // .throttle (함수, 시간) 함수를 시간에 한번 실행 

  const fadeEls = document.querySelectorAll('.visual .fade-in');

  fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
      delay: (index+1)*.7, // 첫번째 요소 0.7, 두번째 1.4 세번째 2.1 네번째 2.7 에 opacity1 (요소 보임)
      opacity:1
    });
  });

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay:true,
  loop:true
}); 

new Swiper('.promotion .swiper-container', {
  /*direction : 'horizontal 기본값*/
  slidesPerView:3, //한번에 보여줄 슬라이드 개수
  spaceBetween:10, //슬라이드 사이 여백 
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay:5000 //5s
  },
  pagination:{
    el:'.promotion .swiper-pagination', 
    //promotaion의 후손인 swiper-pagination 이 선택자에 맞는 요소를 찾아서 페이지 번호를 사용할 수 있도록 동작 
    clickable:true
  },
  navigation:{
    prevEl :'.promotion .swiper-prev',
    nextEl :'.promotion .swiper-next'
  }
}
);

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween:30, //사이 여백 30px 
  slidesPerView: 5, //한번에 5개의 슬라이드 보여줌 
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
}); 

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리 
    promotionEl.classList.add('hide');
  }else{
    // 보임처리 
    promotionEl.classList.remove('hide'); 

  }
});

function random(min, max){
  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(
    selector, //선택자 
    random(1.5,2.5), //애니메이션의 동작 시간 
    {  //옵션 
      y:size,
      repeat:-1, //무한 반복 -1
      yoyo:true, // 애니메이션이 한번 진행되고 돌아옴  
      ease: Power1.easeInOut,
      delay:random(0,delay)
  });
}
floatingObject('.floating1',1,15)
floatingObject('.floating2',.5,15)
floatingObject('.floating3',1.5,20)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정 
      triggerHook: .8,
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});
