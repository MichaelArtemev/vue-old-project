<template>
  <div class="gallery">
    <div class="gallery-container">
      <div class="gallery-container__content">
        <div class="gallery-container__name">
          <h2>ГАЛЕРЕЯ</h2>  
        </div> 
        <div class="gallery-container__main-wrapp">
          <div class="gallery-container__left" ref="configContainer">
            <div class="gallery-container__left-wrapper">
              <div class="gallery-container__drop-config">
                <p>фильтр</p>
                <h4 v-if="chekMain" @click="renderMenu" >{{category}}</h4>
                <transition name="slide-fade">
                  <div class="drop-config__choise" v-if="chekChoise" >
                    <h4 @click="getMasters">МАСТЕРА</h4>
                    <h4 @click="getPopular">ПОПУЛЯРНЫЕ</h4>
                  </div>
                </transition>
              </div>
              <transition name="slide-fade">
              <div class="gallery-container__li-masters" v-if="chekMasters">
                <ul>
                  <li @click="getMaster" id="karim">Карим</li>
                  <li @click="getMaster" id="vitalii">Виталий</li>
                  <li @click="getMaster" id="yanne">Яннэ</li>
                  <li @click="getMaster" id="farid">Фарид</li>
                </ul>
              </div>
              </transition>
              <transition name="slide-fade">
                <div class="gallery-container__li-popular" v-if="chekPopular">
                  <ul>
                    <li id="all" @click="getWorks">Все</li>
                    <li id="man" @click="getWorks">Мужские тату</li>
                    <li id="woman" @click="getWorks">Женские тату</li>
                    <li id="small" @click="getWorks">Маленькие тату</li>
                    <li id="big" @click="getWorks">Большие тату</li>
                  </ul>
                </div>
              </transition>
              <div class="white-line">
                <div class="white-line-arrow" @click="hideMenu"></div>
              </div>
            </div>            
          </div>
          <div class="gallery-container__right">
            <div class="gallery-container__right-wrapper right-wrapper">
                <div class="right-wrapper__img-container master1" @click="getModal">
                  
                  <div class="right-wrapper__pseudo right-wrapper__master1 woman big all"><img class="right-wrapper__master1 woman big all" src="../../assets/images/content/works/1.jpg" id="1" alt=""> <div class="gallery-scope"></div></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man small all"><img class="right-wrapper__master1 man small all" src="../../assets/images/content/works/2.jpg" id="2" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 woman big all"><img class="right-wrapper__master1 woman big all" src="../../assets/images/content/works/3.jpg" id="3" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 woman small all"><img class="right-wrapper__master1 woman small all" src="../../assets/images/content/works/4.jpg" id="4" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man small all"><img class="right-wrapper__master1 man small all" src="../../assets/images/content/works/5.jpg" id="5" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man big all"><img class="right-wrapper__master1 man big all" src="../../assets/images/content/works/6.jpg" id="6" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man big all"><img class="right-wrapper__master1 man big all" src="../../assets/images/content/works/7.jpg" id="7" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man big all"><img class="right-wrapper__master1 man big all" src="../../assets/images/content/works/8.jpg" id="8" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man big all"><img class="right-wrapper__master1 man big all" src="../../assets/images/content/works/9.jpg" id="9" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master1 man big all"><img class="right-wrapper__master1 man big all" src="../../assets/images/content/works/10.jpg" id="10" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master2 woman small all"><img class="right-wrapper__master2 woman small all" src="../../assets/images/content/works/master2/11.jpg" id="11" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master2 woman small all"><img class="right-wrapper__master2 woman small all" src="../../assets/images/content/works/master2/12.jpg" id="12" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master2 woman small all"><img class="right-wrapper__master2 woman small all" src="../../assets/images/content/works/master2/13.jpg" id="13" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master2 woman big all"><img class="right-wrapper__master2 woman big all" src="../../assets/images/content/works/master2/14.jpg" id="14" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master2 woman big all"><img class="right-wrapper__master2 woman big all" src="../../assets/images/content/works/master2/15.jpg" id="15" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master2 woman big all"><img class="right-wrapper__master2 woman big all" src="../../assets/images/content/works/master2/16.jpg" id="16" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 man small all"><img class="right-wrapper__master3 man small all" src="../../assets/images/content/works/master3/17.jpg" id="17" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 man big all"><img class="right-wrapper__master3 man big all" src="../../assets/images/content/works/master3/18.jpg" id="18" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 woman big all"><img class="right-wrapper__master3 woman big all" src="../../assets/images/content/works/master3/19.jpg" id="19" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 woman big all"><img class="right-wrapper__master3 woman big all" src="../../assets/images/content/works/master3/20.jpg" id="20" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 woman big all"><img class="right-wrapper__master3 woman big all" src="../../assets/images/content/works/master3/21.jpg" id="21" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 woman big all"><img class="right-wrapper__master3 woman big all" src="../../assets/images/content/works/master3/22.jpg" id="22" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master3 woman big all"><img class="right-wrapper__master3 woman big all" src="../../assets/images/content/works/master3/23.jpg" id="23" alt=""></div>
                  
                  <div class="right-wrapper__pseudo right-wrapper__master4 man big all"><img class="right-wrapper__master4 man big all" src="../../assets/images/content/works/master4/24.jpg" id="24" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 man small all"><img class="right-wrapper__master4 man small all" src="../../assets/images/content/works/master4/25.jpg" id="25" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 man small all"><img class="right-wrapper__master4 man small all" src="../../assets/images/content/works/master4/26.jpg" id="26" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 woman big all"><img class="right-wrapper__master4 woman big all" src="../../assets/images/content/works/master4/27.jpg" id="27" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 man big all"><img class="right-wrapper__master4 man big all" src="../../assets/images/content/works/master4/28.jpg" id="28" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 woman small all"><img class="right-wrapper__master4 woman small all" src="../../assets/images/content/works/master4/29.jpg" id="29" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 woman big all"><img class="right-wrapper__master4 woman big all" src="../../assets/images/content/works/master4/30.jpg" id="30" alt=""></div>
                  <div class="right-wrapper__pseudo right-wrapper__master4 man big all"><img class="right-wrapper__master4 man big all" src="../../assets/images/content/works/master4/31.jpg" id="31" alt=""></div>
                  
                </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup" id="popup" ref="modalPopup" @click="closeModal">
      <div class="popup-outer">
        <div class="popup__inner">
          <!-- <p class="popup__close" @click="closeModal">X</p> -->
          <img :src="popupCurrentSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//   // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import {master1, master2, master3, master4} from "../../scripts/local/galleryData.js"

// const allMasters = master1.concat(master2, master3, master4);

export default {
    name: 'gallery',
    components: {
      // VueSlickCarousel
    },
    data () {
      return {
        category:"МАСТЕРА",
        chekChoise: false,
        chekMasters: true,
        chekPopular: false,
        chekMain: true,
        hideMenuChek: false,
        popupCurrentSrc: null,
        popupSrc: null,
        chekModal: false,
        // master1Works: master1,
        // master2Works: master2,
        // master3Works: master3,
        // master4Works: master4,
        // allWorks: allMasters,
        // worksFiltred: null, 
        settings:{
          "infinite": true,
          "slidesToShow": 8,
          "speed": 500,
          "rows": 2,
          "slidesPerRow": 1
        }
      }
    },
    created(){
      this.worksFiltred = this.allWorks;
      console.log(this.worksFiltred);
      this.popupSrc = [
        require("../../assets/images/content/works/1.jpg"),
        require("../../assets/images/content/works/2.jpg"),
        require("../../assets/images/content/works/3.jpg"),
        require("../../assets/images/content/works/4.jpg"),
        require("../../assets/images/content/works/5.jpg"),
        require("../../assets/images/content/works/6.jpg"),
        require("../../assets/images/content/works/7.jpg"),
        require("../../assets/images/content/works/8.jpg"),
        require("../../assets/images/content/works/9.jpg"),
        require("../../assets/images/content/works/10.jpg"),
        require("../../assets/images/content/works/master2/11.jpg"),
        require("../../assets/images/content/works/master2/12.jpg"),
        require("../../assets/images/content/works/master2/13.jpg"),
        require("../../assets/images/content/works/master2/14.jpg"),
        require("../../assets/images/content/works/master2/15.jpg"),
        require("../../assets/images/content/works/master2/16.jpg"),
        require("../../assets/images/content/works/master3/17.jpg"),
        require("../../assets/images/content/works/master3/18.jpg"),
        require("../../assets/images/content/works/master3/19.jpg"),
        require("../../assets/images/content/works/master3/20.jpg"),
        require("../../assets/images/content/works/master3/21.jpg"),
        require("../../assets/images/content/works/master3/22.jpg"),
        require("../../assets/images/content/works/master3/23.jpg"),
        require("../../assets/images/content/works/master4/24.jpg"),
        require("../../assets/images/content/works/master4/25.jpg"),
        require("../../assets/images/content/works/master4/26.jpg"),
        require("../../assets/images/content/works/master4/27.jpg"),
        require("../../assets/images/content/works/master4/28.jpg"),
        require("../../assets/images/content/works/master4/29.jpg"),
        require("../../assets/images/content/works/master4/30.jpg"),
        require("../../assets/images/content/works/master4/31.jpg"),
      ]
    },
    methods: {
      renderMenu(){
        this.chekChoise = true;
        this.chekMasters = false;
        this.chekPopular = false;
        this.chekMain = false;
      },
      getModal(e){   
        this.$refs.modalPopup.style.visibility = "visible";  
        this.$refs.modalPopup.style.opacity = "1"; 
        this.popupCurrentSrc =  this.popupSrc[e.target.id - 1];
        this.chekModal = true;   
      },
      closeModal(){
        this.$refs.modalPopup.style.visibility = "hidden";  
        this.$refs.modalPopup.style.opacity = "0";
        this.chekModal = false; 
      },
      getMasters(){
        this.chekChoise = false;
        this.chekMasters = true;
        this.chekMain = true;
        this.category = "МАСТЕРА";
      },
      getPopular(){
        this.chekChoise = false;
        this.chekPopular = true;
        this.chekMain = true;
        this.category = "ПОПУЛЯРНЫЕ";
      },
      getMaster(e){
        let masterVisible,
            masterHide;

        if( e.target.id === "karim" ){
          masterVisible = ".right-wrapper__master1";
          masterHide = ".right-wrapper__master4, .right-wrapper__master3, .right-wrapper__master2";
        }else if( e.target.id === "vitalii" ){
          masterVisible = ".right-wrapper__master2";
          masterHide = ".right-wrapper__master4, .right-wrapper__master3, .right-wrapper__master1";
        }else if(e.target.id === "yanne" ){
          masterVisible = ".right-wrapper__master4";
          masterHide = ".right-wrapper__master2, .right-wrapper__master3, .right-wrapper__master1";
        }
        else if(e.target.id === "farid" ){
          masterVisible = ".right-wrapper__master3";
          masterHide = ".right-wrapper__master2, .right-wrapper__master4, .right-wrapper__master1";
        }
        
        let allNodes = document.querySelectorAll(masterHide);
        let currentMaster = document.querySelectorAll(masterVisible);

        for(let val of currentMaster){
          val.style.display = "block";
        }
        for( let val of allNodes){
          val.style.display = "none";
        }
      },   
      getWorks(e){
        let worksVisible,
            worksHide;

        if( e.target.id === "all" ){
          worksVisible = ".all";  
          worksHide = null;              
        }else if( e.target.id === "man" ){
          worksVisible = ".man";  
          worksHide = ".woman"; 
        }else if( e.target.id === "woman" ){
          worksVisible = ".woman";  
          worksHide = ".man"; 
        }else if( e.target.id === "small" ){
          worksVisible = ".small";  
          worksHide = ".big"; 
        }else if( e.target.id === "big" ){
          worksVisible = ".big";  
          worksHide = ".small"; 
        }
        
        let allNodes = document.querySelectorAll(worksHide);
        let currentWorks = document.querySelectorAll(worksVisible);

        for(let val of currentWorks){
          val.style.display = "block";
        }
        for( let val of allNodes){
          val.style.display = "none";
        }
      },
      hideMenu(){
        if(this.hideMenuChek){
          this.$refs.configContainer.style.marginLeft = "0px";
          this.hideMenuChek = false;
        }else{
          this.$refs.configContainer.style.marginLeft = "-170px";
          this.hideMenuChek = true;
        }        
      }
    }
  }
</script>

<style lang="scss">
.container__name{
  margin-bottom: 72px;
}
.popup{
  transition: 1s;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  img{
    max-width: 100%;
    

  }
  .popup__close{
    color:#ff3d58;
    font-size: 3em;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;
    position: relative;
    &:hover{
      transform: scale(1.1);
    }
  }
  .popup-outer{
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
    .popup-inner{
      margin-top: -39px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.gallery-container__left{
  transition: all 1s;
}

.white-line-arrow{
  width: 30px;
  height: 30px;
  background-image: url("../../assets/images/content/dropico.svg");
  background-size: cover;
  cursor: pointer;
  transition: 0.5s;  
  &:hover{
    transform: rotate(180deg);
  }
}

.white-line{
  width: 30px;
  height: 617px;
  background-color:#ff3d58;
  position: absolute;
  margin-left: 170px;
  display: flex;
  align-items: center;  
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.drop-config__choise{
  margin: 20px;
}
.gallery-container__li-popular{
  ul{
    margin-left: 0;
    /* Отступ слева в браузере IE и Opera */
    padding-left: 0;
    li{
      list-style-type: none;
      margin: 25px;
      cursor: pointer;
      transition: 1s;
      &:hover{
        color:#ff3d58;
      }
    }
  }
}
.gallery-container__li-masters{
  ul{
    margin-left: 0;
    /* Отступ слева в браузере IE и Opera */
    padding-left: 0;
    li{
      list-style-type: none;
      margin: 25px;
      cursor: pointer;
      transition: 1s;
      &:hover{
        color:#ff3d58;
      }
    }
  }
}
.right-wrapper__img-container{  
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  overflow-y:hidden;
  .right-wrapper__pseudo{
    width: 16%;  
    margin-right: 10px;
    // &::before{
    //   content: "";
    //   width: 100%;
    //   height: 100%;
    //   top: 0;
    //   left: 0;
    //   background-color: rgba(0, 0, 0, 0.8);
    //   display: block;
    //   display: none;
    //   position: absolute;
    // }    
  }

  &::-webkit-scrollbar{
    width: 30px;
  }
  &::-webkit-scrollbar-track{
    background-color: black;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #ff3d58;
    border: 7px solid black;
  }
  .right-wrapper__pseudo{
    img{
      width: 300px;
      height: 600px;
      margin: 0px;
      object-fit: cover;
      cursor: pointer;
      transition: 1s;
      &:hover{
        transform: scale(1.1);
      }    
    }
  }  
  .right-wrapper__pseudo:last-of-type {
  margin-right: 0;
  }
}
.gallery-scope{
  width: 100%;
  height: 100%;
  background-color: orchid;
}
.right-wrapper__img-container > * {
  flex-shrink: 0;
}
.gallery-container__main-wrapp{
  display: flex;
  transition: all 1s;
}
.gallery-container__left-wrapper{
  
  background-color: black;
  width: 200px;
  height: 617px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .gallery-container__drop-config{
    margin-left: 15px;
    h4{
      cursor: pointer;
      transition: 1s;
      &:hover{
        color:#ff3d58;
      }
    }
  }
  .gallery-container__li-masters{
    margin-left: 15px;
    margin-top: -90px;
  }
}
@media only screen and (max-width : 1100px){
  .right-wrapper__img-container .right-wrapper__pseudo {
    width: 27%;
    margin-right: 10px;
  }
}
@media only screen and (max-width : 700px){
  .right-wrapper__img-container .right-wrapper__pseudo {
    width: 37%;
    margin-right: 10px;
  }
}
@media only screen and (max-width : 600px){
  .right-wrapper__img-container .right-wrapper__pseudo {
    width: 47%;
    margin-right: 10px;
  }
}
@media only screen and (max-width : 488px){
  .right-wrapper__img-container{
  }
  .right-wrapper__img-container .right-wrapper__pseudo {
    width: 90%;
    margin-right: 3px;
  }
}

// @media only screen and (max-width: 369px){

//   span {
//     width: 300px !important;
//     left: 0px !important;
//     top: 0px !important;
//   }
// }




</style>