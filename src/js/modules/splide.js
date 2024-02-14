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
  breakpoints:{
    768:{
      height: 271
    }
  }
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
    breakpoints:{
      768:{
        height: 271
      }
    }
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
    breakpoints:{
      1000:{
        perPage: 3
      },
      768:{
        perPage: 2
      },
      480:{
        gap: 10,
        height: 259
      }
    },
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
breakpoints: {
  1300:{
    height: 528
  },
  768:{
    height:550
  }
},
video: {
    loop: true,
    disable: true
},
classes: {
    next  : 'next-btn',
},
} );
document.querySelector("#btnPlay").addEventListener("click", ()=>{
    videoHeader.Components.Video.play();
    document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
})
first.addEventListener("click", ()=>{
    document.querySelector( 'iframe').contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'stopVideo' }), '*');
})
second.addEventListener("click", ()=>{
    videoHeader.Components.Video.pause();
})
third.addEventListener("click", ()=>{
    videoHeader.go('>');
})
console.log();

videoHeader.mount({Video});
