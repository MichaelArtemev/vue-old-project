<template>
  <div class="servicesPage" ref="services">
    <section class="services-page-container">
      <div class="services-page-container__img">
        <img src="" alt="">
      </div>
      <div class="limiter">
        <div class="services-page-content">
          <div class="services-page-content__h2">
            <h2>
              УСЛУГИ
            </h2>
          </div>
          <div class="services-page-content__parts">
            <div class="services-page-content__parts-wrapper parts-wrapper">
              <VueSlickCarousel v-bind="settings">
                <div class="parts-wrapper__section">
                  <div class="parts-wrapper__p1 parts-wrapper__p"><div class="parts-wrapper__border border1"><a href="/piers"><img class="hover-img1" @mouseover="mouseOver" src="../../assets/images/content/p1.svg" alt=""></a></div></div>
                  <div class="parts-wrapper__bottom-line"></div>
                  <a href="/piers"><h2>ПИРСИНГ</h2></a>
                </div>
                <div class="parts-wrapper__section">
                  <div class="parts-wrapper__p2 parts-wrapper__p"><div class="parts-wrapper__border border2"><a href="/eye"><img class="hover-img2" @mouseover="mouseOver" src="../../assets/images/content/p2.svg" alt=""></a></div></div>
                  <div class="parts-wrapper__bottom-line"></div>
                  <a href="/eye"><h2>ТАТУАЖ</h2></a>
                </div>
                <div class="parts-wrapper__section">
                  <div class="parts-wrapper__p3 parts-wrapper__p"><div class="parts-wrapper__border border3"><a href="/tattos"><img class="hover-img3" @mouseover="mouseOver"  src="../../assets/images/content/p3.svg" alt=""></a></div></div>
                  <div class="parts-wrapper__bottom-line"></div>
                  <a href="/tattos"><h2>ТАТУИРОВКА</h2></a>
                </div>
                <div class="parts-wrapper__section">
                  <div class="parts-wrapper__p4 parts-wrapper__p"><div class="parts-wrapper__border border4"><a href="/teach"><img class="hover-img4" @mouseover="mouseOver" src="../../assets/images/content/p4.svg" alt=""></a></div></div>
                  <div class="parts-wrapper__bottom-line"></div>
                   <a href="/teach"><h2>ОБУЧЕНИЕ</h2></a>
                </div>
                <div class="parts-wrapper__section">
                  <div class="parts-wrapper__p5 parts-wrapper__p"><div class="parts-wrapper__border border5"><a href="/correct"><img class="hover-img5" @mouseover="mouseOver" src="../../assets/images/content/p5.svg" alt=""></a></div></div>
                  <div class="parts-wrapper__bottom-line"></div>
                 <a href="/correct"><h2>КОРРЕКЦИЯ</h2></a>
                </div>
                <div class="parts-wrapper__section">
                  <div class="parts-wrapper__p6 parts-wrapper__p"><div class="parts-wrapper__border border6"><a href="/del"><img class="hover-img6" @mouseover="mouseOver" src="../../assets/images/content/p6.svg" alt=""></a></div></div>
                  <div class="parts-wrapper__bottom-line"></div>
                  <a href="/del"><h2>УДАЛЕНИЕ</h2></a>
                </div>            
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  export default {
    name:"servicesPage",
    components: {
      VueSlickCarousel
    },
    data () {
      return {
        browserWidth: null,
        greeting: 'Hello',
        settings:{
          "infinite": false,
          "slidesToShow": 3,
          "speed": 0,
          "rows": 2,
          "slidesPerRow": 1
        }
      }
    },
    methods:{
      mouseOver(e){
        console.log(e.target.className);
        if( e.target.className === "hover-img1" ){
          this.$refs.services.style.backgroundImage = `url(${require(`@/assets/images/content/service/rd/piercing.jpg`)})`;
        }else if( e.target.className === "hover-img2" ){
          this.$refs.services.style.backgroundImage = `url(${require(`@/assets/images/content/service/rd/eye.jpg`)})`;
        }
        else if( e.target.className === "hover-img3" ){
          this.$refs.services.style.backgroundImage = `url(${require(`@/assets/images/content/service/rd/tatto.jpg`)})`;
        }
        else if( e.target.className === "hover-img4" ){
          this.$refs.services.style.backgroundImage = `url(${require(`@/assets/images/content/service/rd/learn.jpg`)})`;
        }
        else if( e.target.className === "hover-img5" ){
          this.$refs.services.style.backgroundImage = `url(${require(`@/assets/images/content/service/rd/correct.jpg`)})`;
        }
        else if( e.target.className === "hover-img6" ){
          this.$refs.services.style.backgroundImage = `url(${require(`@/assets/images/content/service/rd/delete.jpg`)})`;
        }
        
      }
    },
    created(){
      setInterval(() => {
        this.browserWidth = window.innerWidth;
        if( this.browserWidth <= 625){
          this.settings = {
            "infinite": true,
            "dots": true,
            "arrows": false,
            "slidesToShow": 1,
            "speed": 500,
            "rows": 1,
            "slidesPerRow": 1
          }
        }else{
          this.settings = {
          "infinite": false,
          "slidesToShow": 3,
          "speed": 0,
          "rows": 2,
          "slidesPerRow": 1
        }
        } 
      }, 1500)
    }
  }

</script>

<style lang="scss">
.servicesPage{
  min-height: 100vh;
  background-image: url('../../assets/images/content/service/rd/default.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  transition: 1s;
  .services-page-content{
    margin-top: 50px;
  }
  .parts-wrapper{
    margin-top: 80px;
  }
}
  .parts-wrapper{
    .parts-wrapper__border{
      border:2px solid white;
      width: 170px;
      height: 170px;
      border-radius: 50%;
      padding-left:25px;
      padding-top:16px;
    }
    div{
      img{
        width: 120px;
        height:120px;
        transition: 1s;
        cursor: pointer;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }
  .parts-wrapper__p{
    display: flex !important;
    justify-content: center;
    &::before{
      content: '';
      width: 30px;
      height: 3px;
      background-color: white;
      position: relative;
      transform: rotate(45deg)
      }
    &::after{
      content: '';
      width: 30px;
      height: 3px;
      background-color: white;
      position: relative;
      transform: rotate(-45deg)
    }
    
    margin-top: 120px;
    margin-bottom: 30px;
  }
  .parts-wrapper__section{
    opacity: 0.6;   
    h2{
      transition: 1s;
      cursor: pointer;
      &:hover{
        color: #ff3d58;
      }       
    //   &::before{
    //   content: '';
    //   width: 30px;
    //   height: 3px;
    //   background-color: white;
    //   position: absolute;
    //   margin-left: -42px;
    //   transform: rotate(-45deg);
    //   }
    // &::after{
    //   content: '';
    //   width: 30px;
    //   height: 3px;
    //   background-color: white;
    //   position: absolute;
    //   margin-left: 18px;
    //   transform: rotate(45deg);
    // }
    }
  }
  .parts-wrapper__border{
    
  }
  .parts-wrapper__bottom-line{
    &::before{
      content: '';
      width: 30px;
      height: 3px;
      background-color: white;
      position: absolute;
      margin-left: -102px;
      transform: rotate(-45deg);
      }
    &::after{
      content: '';
      width: 30px;
      height: 3px;
      background-color: white;
      position: absolute;
      margin-left: 80px;
      transform: rotate(45deg);
    }
    
  }
  .border3{
    padding-top:23px !important;
  }
  .border2{
    padding-top:29px !important;
  }
  .border4{
    padding-right:29px !important;
  }

  @media only screen and (max-width : 1026px){
  .parts-wrapper__border{      
      padding-left:10px !important;
      padding-top:5px !important;
  }
  .border4,
  .border3,
  .border2,
  .border1,
  .border6,
  .border5{
    padding-left:20px !important;
    padding-right:20px !important;
  }
  }

  @media only screen and (max-width : 1026px){
  .parts-wrapper div img{
    width: 80px;
    height: 80px;
  }
  .parts-wrapper__border{
    width: 100px !important;
    height: 100px !important;
  }
  .parts-wrapper__bottom-line{
    &::before{     
      margin-left: -83px;
      }
    &::after{
      margin-left: 60px;
    }   
  }
  
}
@media only screen and (max-height : 886px){
  .parts-wrapper{
    padding-bottom: 50px;
  }
}
</style>