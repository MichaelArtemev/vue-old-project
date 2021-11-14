<template>
  <div class="MainPageContainer">
    <div class="preloaded">
      <div class="pl1"></div>
      <div class="pl2"></div>
      <div class="pl3"></div>
      <div class="pl4"></div>
    </div>    
    <section class="main-page-container" ref="mainPage">      
      <div class="main-page-content">
          <div class="limiter">
            <div class="main-page-content__wrapper">
              <VueSlickCarousel v-bind="settings" ref="carousel">
                <div><Slide :dataToRender="slide1InfoRender"/></div>
                <div><Slide :dataToRender="slide2InfoRender"/></div>
                <div><Slide :dataToRender="slide3InfoRender"/></div>
                <div><Slide :dataToRender="slide4InfoRender"/></div>
              </VueSlickCarousel>          
            </div>
          </div>
        <div class="main-page-content__bottom-block bottom-block">
          <div  class="bottom-block__arrow">
            <img src="../../assets/images/content/mouse.svg" width="60px" height="60px" alt="">
          </div>
        </div>
        <div class="main-page-content__whatsapp">
          <img class="whatsapp" src="../../assets/images/content/whatsapp.svg" width="60px" height="60px" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>  
// (new Image()).src = '@/assets/images/content/main1.jpg';
// (new Image()).src = '@/assets/images/content/main2.jpg';
// (new Image()).src = '@/assets/images/content/main3.jpg';
// (new Image()).src = '@/assets/images/content/main4.jpg';
// import imgArr from "@/scripts/local/imgPreloader.js"

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Slide from '@/componentsStorage/mainPage/components/Slide.vue';
// import renderConfig from "@/scripts/local/renderConfig.js";
import {slide1, slide2, slide3, slide4} from "@/scripts/local/renderConfig.js";

  export default {
    name: 'MainPageContainer',
    components: {
      VueSlickCarousel,
      Slide
    },
    computed:{
      
    },
    data () {
      return {
        slide1InfoRender: slide1,
        slide2InfoRender: slide2,
        slide3InfoRender: slide3,
        slide4InfoRender: slide4,
        settings: {
          "arrows":false,
        "dots": true,
        "edgeFriction": 0.35,
        "speed": 2500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 9000,
        "pauseOnDotsHover": true,
        "pauseOnFocus": true,
        "pauseOnHover": true
        }
      }
    },
    created() {
      let currentIndex = 2;    

      setInterval(() => {
        console.log(this.
          $refs.
          mainPage.
          style.backgroundImage);
        
        this.
          $refs.
          mainPage.
          style.
          backgroundImage = `url(${require(`@/assets/images/content/main${currentIndex.toString()}.jpg`)})`;  

        currentIndex++;

        if(currentIndex >= 5) {
          currentIndex = 1;
        }
      }, 9000);     
    } 
  }
</script>

<style lang="scss">

.info-panel1,
.info-panel2,
.info-panel3 {
  width: 500px;
  height: 500px;
}
.info-panel1{
  background-color: yellow;
}
.info-panel2{
  background-color:red;
}
.info-panel3{
  background-color: green;
}
.MainPageContainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-page-container {
  background-blend-mode: multiply;
  min-height: 100vh;
  background-image: url('../../assets/images/content/main1.jpg');
  transition: 4s;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-page-content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    justify-content: space-evenly;
    padding-bottom: 250px;
    padding-top: 250px;
    &__whatsapp{
      display:flex;
      justify-content: flex-end;
    }
    &__bottom-block{
      display: flex;
      justify-content: center;
      top:50px;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-name: bounce;
      animation-timing-function: ease;
      margin-top: 88px;
      &__arrow{
        
        margin: 0 auto;
      }
    }
    &__wrapper{
      margin-top: 205px;
      // margin-bottom:50px
    }
    &__promo{
      background-color: #ff3d58;
      width: 100px;
      height: 36px;
      display: inline-block;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 10px solid transparent;
      border-top-left-radius: 70px;
      border-bottom-left-radius: 70px;
      margin-bottom: 30px;
      &:after{
        color: #ff3d58;
        border-left: 18px solid;
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        display: inline-block;
        content: '';
        position: absolute;
        right: -18px;
      }      
    }
		// .main-page-content__slick-way
    &__slider{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
		&__slick-way {
		}

		// .main-page-content__main-txt

		&__main-txt {
      margin-bottom: 100px;  
      font-size: 1.1rem;    
      h1{
        margin-bottom: 20px;
      }
		}

		// .main-page-content__info-block

		&__info-block {
      display: flex; 
      font-size: 1.1rem;
		}

		// .main-page-content__info1

		&__info {
      display: flex;
      flex-direction: column;
      align-items: center; 
      flex-grow: 1;
      width: 33%;
      margin-right: 40px;      
		}

		// .main-page-content__info-main-txt

		&__info-main-txt {
		}

		// .main-page-content__line

		&__line {
      width: 80%;
      height: 2px;
      background-color: white;
      margin-top: 15px;
      margin-bottom: 15px;
		}

		// .main-page-content__info-txt

		&__info-txt {
      max-width: 350px;
      max-height: 500px;
		}

		// .main-page-content__info2

		&__info2 {
		}

		// .main-page-content__info3

		&__info3 {
		}
}
.whatsapp{
  cursor:pointer;
  transition: 0.5s;
}
.whatsapp:hover{
  transform:scale(1.1);
}
.slick-dots li button:before { 
  color:white;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: white;
}

@media only screen and (max-height : 890px){
  .main-page-content{
    margin-top: 150px;
  }
}
@media only screen and (max-height : 746px){
  .main-page-content{
    margin-top: 150px;
  }
}
@media only screen and (max-width : 1420px){
  .main-page-content__whatsapp{
    img{
      margin-right:50px;
    }
  }
  .right-block{
    margin-right:50px;
  }
}
@media only screen and (max-height : 882px){
  .bottom-block{
    display:none;
  }
  .main-page-content__wrapper{
    margin-top: 50px;
  }
}
@media only screen and (max-width : 1030px){
  .slider-info3{
    display: none;
  }
}
@media only screen and (max-width : 618px){
  .main-page-content__info{
    margin-left: 40px;
  }
  .slider-info2{
    display: none;
  }
}
@media only screen and (max-width : 618px){
  .main-page-content__whatsapp{
    justify-content: center;
    margin-left: 50px;
  }
}

@media only screen and (max-height : 826px){
  .whatsapp{
    margin-top: 40px;
    width: 40px;
    height: 40px;
  }
  .main-page-container{
    padding-bottom: 50px;
  }
}
@media only screen and (max-height : 663px){
  
  .main-page-container{
    padding-bottom: 100px;
  }
}
@media only screen and (max-height : 567px){
  
  .main-page-container{
    padding-bottom: 150px;
  }
}
@media only screen and (max-height : 467px){
  
  .main-page-container{
    padding-bottom: 250px;
  }
}
@media(max-width: 1057px){
  .main-page-content__whatsapp{
    display: none;
  }
}

// body:after {
//     content:
//         url('../../assets/images/content/main1.jpg')
//         url('../../assets/images/content/main2.jpg')
//         url('../../assets/images/content/main3.jpg')
//         url('../../assets/images/content/main4.jpg')
//     ;
//     display: none;
// }
.preloaded{
  display: block;
  position: absolute;
  z-index: -99;
}
.pl1{
  background-image: url('../../assets/images/content/main1.jpg');
}
.pl2{
  background-image: url('../../assets/images/content/main2.jpg');
}
.pl3{
  background-image: url('../../assets/images/content/main3.jpg');
}
.pl4{
  background-image: url('../../assets/images/content/main4.jpg');
}

 @keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }

</style>
