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
      pauseOnHover: true,
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
      pauseOnHover: true,
      },
      breakpoints:{
      768:{
          height: 271
      }
      }
  } );


  function gallery(id) {

    var gallery = new Splide(id, {
      width: 600,
      height: 300,
      pagination: false,
      cover: true
    });
  
    var thumbnails = document.getElementsByClassName("thumbnail");
    var current;
  
    for (var i = 0; i < thumbnails.length; i++) {
      initThumbnail(thumbnails[i], i);
    }
  
    function initThumbnail(thumbnail, index) {
      thumbnail.addEventListener("click", function () {
        gallery.go(index);
      });
    }
  
    gallery.on("mounted move", function () {
      var thumbnail = thumbnails[gallery.index];
  
      if (thumbnail) {
        if (current) {
          current.classList.remove("is-active");
        }
  
        thumbnail.classList.add("is-active");
        current = thumbnail;
      }
    });
    gallery.mount();
  }     

  const divGallery = document.getElementById("big-gallery")
    const divGalleryBox = document.querySelector(".gallery-box");
    function open_gallery(url1, url2, url3, url4) {
        divGallery.style.display="flex";
        setTimeout(() => {
          divGallery.style.opacity = 1;
        }, 10);
        divGalleryBox.innerHTML =
        // <span onclick='close_photo()'>&#10008;</span>
        (`
            
        <section id="gallery-splide" class="splide" aria-label="My Awesome Gallery">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="img/${url1}"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/${url2}"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/${url3}"
              alt=""
            />
          </li>
          <li class="splide__slide">
            <img
              src="img/${url4}"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
    
    
    <ul id="thumbnails" class="thumbnails">
      <li class="thumbnail">
        <img loading="lazy" src="img/${url1}" alt="">
      </li>
      <li class="thumbnail">
        <img loading="lazy" src="img/${url2}" alt="">
      </li>
      <li class="thumbnail">
        <img loading="lazy" src="img/${url3}" alt="">
      </li>
      <li class="thumbnail">
        <img loading="lazy" src="img/${url4}" alt="">
      </li>
    </ul>

        `)
        gallery('#gallery-splide')  
        
        }
        divGallery.addEventListener('click', function (event) {
          if(event.target === this){
            divGallery.style.opacity = 1;
            divGallery.style.opacity = 0;
            setTimeout(() => {
                divGallery.style.display = "none";
                
            }, 900);
          }
        });   

    document.querySelectorAll('#portfolio>div.splide__track>ul>li>img').forEach(el=>{
      el.addEventListener("click", ()=>{
        if(el.id === "gallery"){
          open_gallery('port1.png', 'port2.png', 'port3.png', 'port4.png')
        }
      })
    })

    document.querySelectorAll('#portfolio2>div.splide__track>ul>li>img').forEach(el=>{
      el.addEventListener("click", ()=>{
        if(el.id === "gallery"){
          open_gallery('port1.png', 'port2.png', 'port3.png', 'port4.png')
        }
      })
    })

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
        // height: 259
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
    height:350
  }
},
video: {
    loop: true,
    disable: true,
    hideControls: true,
    disableOverlayUI: true
},
classes: {
    next  : 'next-btn',
},
} );
document.querySelector("#btnPlay").addEventListener("click", ()=>{
    videoHeader.Components.Video.play();
    // if(document.querySelector('iframe') != undefined){
    //   document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    // }
})
first.addEventListener("click", ()=>{
    
    videoHeader.Components.Video.pause();
  })
  second.addEventListener("click", ()=>{
    document.querySelectorAll('iframe').forEach(el=>{
      el.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'seekTo', args: [0] }), '*');
    })
    setTimeout(() => {
      videoHeader.Components.Video.pause();
    }, 100);
})
third.addEventListener("click", ()=>{
    videoHeader.Components.Video.pause();
    videoHeader.go('>');
    setTimeout(()=>{
      videoHeader.Components.Video.play();
    }, 600)
})

function restartVideo() {
  // Получаем элемент iframe по его id
  var youtubeIframe = document.querySelector('iframe');

  // Получаем текущий источник видео
  var currentSrc = youtubeIframe.src;

  // Устанавливаем src в пустую строку, а затем обратно на текущий источник
  youtubeIframe.src = '';
  youtubeIframe.src = currentSrc;
}


videoHeader.mount({Video});



// #ourVideo .splide__video__wrapper {
//   position: relative;
//   padding-bottom: 56.25%; /* 16:9 */
//   padding-top: 0px;
//   height: 450px;
//   width: 320px;
// }
// #ourVideo .splide__video__wrapper iframe {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }