import { Splide } from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const splide = new Splide( '#portfolio', {
  type: 'loop',
  drag: 'free',
  perPage: 2,
  gap: 20,
  height:"400px",
  autoWidth: true,
  autoScroll: {
    speed: 1,
    pauseOnHover: false,
  },
} );

const splide2 = new Splide( '#portfolio2', {
    type: 'loop',
    drag: 'free',
    perPage: 2,
    gap: 20,
    autoWidth: true,
    height:"400px",
    autoScroll: {
      speed: -1,
      pauseOnHover: false,
    },
  } );

splide.mount({AutoScroll});
splide2.mount({AutoScroll});

const video = new Splide( '#ourVideo', {
    type: 'loop',
    height: "450px",
    cover: true,
    drag: 'free',
    perPage: 5,
    gap: 20,
    classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
    video: {
    loop: true,
    },
});

//   var bar    = video.root.querySelector( '.my-slider-progress-bar' );
//   // Updates the bar width whenever the carousel moves:
//   video.on( 'mounted move', function () {
//     var end  = 10;
//     console.log(video);
//     var rate = Math.min( ( video.index + 1) / end, 5 );
//     console.log(rate);
//     bar.style.left = String( rate * 100  ) + '%';
//   } );
  
  video.mount( {Video});

let first = document.getElementById("firstBtn");
let second = document.getElementById("secondBtn");
let third = document.getElementById("thirdBtn");


const videoHeader = new Splide( '#videoHeader', {
height: 750,
cover: true,
type: "loop",
video: {
    loop: true,
    disable: true
},
classes: {
    next  : 'next-btn',
},
} );
first.addEventListener("click", ()=>{
    videoHeader.Components.Video.play();
})
secondBtn.addEventListener("click", ()=>{
    videoHeader.Components.Video.pause();
})
third.addEventListener("click", ()=>{
    videoHeader.go('>');
})
console.log();

videoHeader.mount({Video});
