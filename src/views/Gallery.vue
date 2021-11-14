<template>
  <div class="Gallery">
    <h1>ГАЛЛЕРЕЯ</h1>
    <div class="gallery-road">
      <a href="/"><p>Главная</p></a>  > <p>Галлерея</p>
    </div>
    <div class="gallery-body">
      <div class="gallery-inner" ref="galleryInner">
        <div class="gallery-inner__row">
          <div class="gallery-inner__marker">
            <h3>Пол</h3>
          </div>
          <div class="gallery-inner__filters" @click="addFilter">
            <p id="woman" ref="wom">Женские</p>
            <p id="man" ref="ma">Мужские</p>
          </div>
        </div>
        <div class="gallery-inner__row">
          <div class="gallery-inner__marker">
            <h3>Часть тела</h3>
          </div>
          <div class="gallery-inner__filters" @click="addFilter">
            <p id="arm" ref="rarm">Плечи</p>
            <p id="leg" ref="rleg">Ноги</p>
            <p id="back" ref="rback">Спина</p>
            <p id="chest" ref="rchest">Грудь</p>
            <p id="body" ref="rbody">Тело</p>
          </div>
        </div>

        <div class="gallery-inner__row">
          <div class="gallery-inner__marker">
            <h3>Размер</h3>
          </div>
          <div class="gallery-inner__filters" @click="addFilter">
            <p id="big" ref="rbig">Большие</p>
            <p id="small" ref="rsmall">Маленькие</p>
          </div>
        </div>

        <div class="gallery-inner__row">
          <div class="gallery-inner__marker">
            <h3>Цвет</h3>
          </div>
          <div class="gallery-inner__filters" @click="addFilter">
            <p id="black" ref="rblack">Черно-белые</p>
            <p id="color" ref="rcolor">Цветные</p>
          </div>
        </div>

      </div>

      <div class="gallery-body__btn">
        <h4 @click="getFilters">{{viewText}}</h4>
      </div>
      <div class="gallery-body__seo">
        <p>Сделать татуировки в тату салоне</p>
        <p>Доступные цены на татуировки в Москве</p>
        <p>Лучшие фото работ татуировок в каталоге</p>
      </div>
    </div>
    <div class="gallery__holder">
      <div class="gallery__photo-item" v-for="item in items" v-bind:key="item.id">
        <img :id="item.id" :class="`gallery__big-img 
          woman${item.woman}
          man${item.man}
          big${item.big}
          small${item.small}
          arm${item.arm}
          leg${item.leg}
          back${item.back}
          chest${item.chest}
          body${item.body}
          color${item.color}
          black${item.black}
        `
        " :src="require(`../assets/images/content/gallery/${item.url}`)" alt="" >
      </div>
    </div>
    <div class="gallery-pop">
      <!-- <div class="gallery__pop-content" v-for="item in currentImg" v-bind:key="item.id">
        <img :src="require(`../assets/images/content/gallery/${item.url}`)" alt="">
      </div> -->
    </div>
    <foot/>
  </div>
</template>

<script>
import foot from '@/componentsStorage/foot/foot.vue'
const axios = require('axios');

export default {
  name: "Gallery",
  components: { foot },
  data () {
    

    return {      
      viewText: "Скрыть фильтры",
      viewTextFlag: true,
      photos: null,
      totalPhotos: 0,
      perPage: 12,
      currentPage: 1,
      items: null,
      filter: [],
      gender: 0,
      bodyPart : [0, 0, 0, 0, 0],
      size: [0, 0],
      color: [0, 0,],
      filterCopy: null,
      currentImg: null
    }
  },
  methods:{
    getBigview(e){      
      let elem = document.getElementById(e.target.id);
      elem.style.width = "100%";
      elem.style.height = "100%";      
    },
    showFiltred(){
      this.filterCopy = this.filter.slice();
      let elements = document.getElementsByClassName("gallery__big-img");
      let showEl = null;
      let allElements = null;
      for(let i = 0; i < elements.length; i++ ){
        elements[i].style.display = "none";
      }
      for(let i = 0; i < this.filterCopy.length; i++ ){
        this.filterCopy[i]  =  this.filterCopy[i] + 1;
        showEl = document.getElementsByClassName(this.filterCopy[i]);
        console.log(elements);        
          // for( let i = 0; i < elements.length; i++){
          //   this.elements[i].style.display = "block";
          // }         
      }
      allElements = document.getElementsByClassName(this.filterCopy.join(' '));
    //  console.log(this.filterCopy.join(' ')); 
     console.log(showEl);
     console.log(allElements);
     for( let i = 0; i < allElements.length; i++){
           allElements[i].style.display = "block";
      }   
     
      // for(let i = 0; i < this.filterCopy.length; i++){

      // }
      // showEl[i].style.display = "block";
      
      // console.log(this.filter); 
      // console.log(this.filterCopy);   

    },
    addFilter(e){
      console.log(e.target.id);
      
      if( e.target.id === "man"){
        if( this.filter.indexOf("man") > -1){
          const index = this.filter.indexOf("man");
          this.filter.splice(index, 1);
        }
        if( this.filter.indexOf("woman") > -1){
          const index = this.filter.indexOf("woman");
          this.filter.splice(index, 1);
        }
        this.filter.push("man")
        this.$refs.ma.classList.add("activeP");
        this.$refs.wom.classList.remove("activeP");
        this.showFiltred();
      }
      if( e.target.id === "woman"){
        if( this.filter.indexOf("woman") > -1){
          const index = this.filter.indexOf("woman");
          this.filter.splice(index, 1);
        }
        if( this.filter.indexOf("man") > -1){
          const index = this.filter.indexOf("man");
          this.filter.splice(index, 1);
        }
        this.filter.push("woman")
        this.$refs.wom.classList.add("activeP");
        this.$refs.ma.classList.remove("activeP");
        this.showFiltred();

      }

      if( e.target.id === "arm" ){
        if( this.filter.indexOf("leg") > -1 ){
          const index = this.filter.indexOf("leg");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("back") > -1 ){
          const index = this.filter.indexOf("back");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("chest") > -1 ){
          const index = this.filter.indexOf("chest");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("body") > -1 ){
          const index = this.filter.indexOf("body");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("arm") > -1 ){
          const index = this.filter.indexOf("arm");
          this.filter.splice(index, 1);
        }
        this.filter.push("arm")
        this.$refs.rarm.classList.add("activeP");
        this.$refs.rbody.classList.remove("activeP");
        this.$refs.rchest.classList.remove("activeP");
        this.$refs.rback.classList.remove("activeP");
        this.$refs.rleg.classList.remove("activeP");
        this.showFiltred();

      }
      if( e.target.id === "leg" ){
        if( this.filter.indexOf("leg") > -1 ){
          const index = this.filter.indexOf("leg");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("back") > -1 ){
          const index = this.filter.indexOf("back");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("chest") > -1 ){
          const index = this.filter.indexOf("chest");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("body") > -1 ){
          const index = this.filter.indexOf("body");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("arm") > -1 ){
          const index = this.filter.indexOf("arm");
          this.filter.splice(index, 1);
        }
        this.filter.push("leg")
        this.$refs.rarm.classList.remove("activeP");
        this.$refs.rbody.classList.remove("activeP");
        this.$refs.rchest.classList.remove("activeP");
        this.$refs.rback.classList.remove("activeP");
        this.$refs.rleg.classList.add("activeP");
        this.showFiltred();

      }
      if( e.target.id === "body" ){
        if( this.filter.indexOf("leg") > -1 ){
          const index = this.filter.indexOf("leg");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("back") > -1 ){
          const index = this.filter.indexOf("back");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("chest") > -1 ){
          const index = this.filter.indexOf("chest");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("body") > -1 ){
          const index = this.filter.indexOf("body");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("arm") > -1 ){
          const index = this.filter.indexOf("arm");
          this.filter.splice(index, 1);
        }
        this.filter.push("body")
        this.$refs.rarm.classList.remove("activeP");
        this.$refs.rbody.classList.add("activeP");
        this.$refs.rchest.classList.remove("activeP");
        this.$refs.rback.classList.remove("activeP");
        this.$refs.rleg.classList.remove("activeP");
        this.showFiltred();

      }
      if( e.target.id === "chest" ){
        if( this.filter.indexOf("leg") > -1 ){
          const index = this.filter.indexOf("leg");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("back") > -1 ){
          const index = this.filter.indexOf("back");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("chest") > -1 ){
          const index = this.filter.indexOf("chest");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("body") > -1 ){
          const index = this.filter.indexOf("body");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("arm") > -1 ){
          const index = this.filter.indexOf("arm");
          this.filter.splice(index, 1);
        }
        this.filter.push("chest")
        this.$refs.rarm.classList.remove("activeP");
        this.$refs.rbody.classList.remove("activeP");
        this.$refs.rchest.classList.add("activeP");
        this.$refs.rback.classList.remove("activeP");
        this.$refs.rleg.classList.remove("activeP");
        this.showFiltred();

      }
      if( e.target.id === "back" ){
        if( this.filter.indexOf("leg") > -1 ){
          const index = this.filter.indexOf("leg");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("back") > -1 ){
          const index = this.filter.indexOf("back");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("chest") > -1 ){
          const index = this.filter.indexOf("chest");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("body") > -1 ){
          const index = this.filter.indexOf("body");
          this.filter.splice(index, 1);
        }
         if( this.filter.indexOf("arm") > -1 ){
          const index = this.filter.indexOf("arm");
          this.filter.splice(index, 1);
        }
        this.filter.push("back")
        this.$refs.rarm.classList.remove("activeP");
        this.$refs.rbody.classList.remove("activeP");
        this.$refs.rchest.classList.remove("activeP");
        this.$refs.rback.classList.add("activeP");
        this.$refs.rleg.classList.remove("activeP");
        this.showFiltred();

      }
      if( e.target.id === "big" ){
        if( this.filter.indexOf("small") > -1 ){
          const index = this.filter.indexOf("small");
          this.filter.splice(index, 1);
        }
        if( this.filter.indexOf("big") > -1 ){
          const index = this.filter.indexOf("big");
          this.filter.splice(index, 1);
        }
        this.filter.push("big")
        this.$refs.rbig.classList.add("activeP");
        this.$refs.rsmall.classList.remove("activeP");
        this.showFiltred();


      }
      if( e.target.id === "small" ){
        if( this.filter.indexOf("small") > -1 ){
          const index = this.filter.indexOf("small");
          this.filter.splice(index, 1);
        }
        if( this.filter.indexOf("big") > -1 ){
          const index = this.filter.indexOf("big");
          this.filter.splice(index, 1);
        }
        this.filter.push("small")
        this.$refs.rbig.classList.remove("activeP");
        this.$refs.rsmall.classList.add("activeP");
        this.showFiltred();


      }
      if( e.target.id === "black" ){
        if( this.filter.indexOf("black") > -1 ){
          const index = this.filter.indexOf("black");
          this.filter.splice(index, 1);
        }
        if( this.filter.indexOf("color") > -1 ){
          const index = this.filter.indexOf("color");
          this.filter.splice(index, 1);
        }
        this.filter.push("black")
        this.$refs.rcolor.classList.remove("activeP");
        this.$refs.rblack.classList.add("activeP");
        this.showFiltred();


      }
      if( e.target.id === "color" ){
        if( this.filter.indexOf("color") > -1 ){
          const index = this.filter.indexOf("color");
          this.filter.splice(index, 1);
        }
        if( this.filter.indexOf("black") > -1 ){
          const index = this.filter.indexOf("black");
          this.filter.splice(index, 1);
        }
        this.filter.push("color")
        this.$refs.rblack.classList.remove("activeP");
        this.$refs.rcolor.classList.add("activeP");
        this.showFiltred();


      }
      console.log(this.filter);
      
      // this.filter.push(e.target.id)
      // console.log(this.filter);      
    },
    showBlack(){

    },
    getFilters(){
      if( this.viewTextFlag ){
        this.$refs.galleryInner.style.display = "none";
        this.viewText = "Показать фильтры";
        this.viewTextFlag = false;
      }else{
        this.$refs.galleryInner.style.display = "block";        
        this.viewText = "Скрыть фильтры";
        this.viewTextFlag = true;
      }      
    },
    getConnect(){
        
        axios.get(`http://rikkitikkitatto.ru/api/tat`).then(response => {
        this.items = response.data;
        // this.$refs.load.style.display = "none";
        
        console.log(this.items); 
        console.log(1);               

        }).catch(error => {
          console.log(error);      
          // this.$refs.load.style.display = "none";
          // this.$refs.g1load.style.display ="block";
        });  
    },
    fetchPhotosSize(){
      axios.get('http://localhost:8888/libsize')
      .then((response) => {       
        this.totalPhotos = response.data[0]["COUNT(*)"];
        console.log(this.totalPhotos);
        
      }
       )
      .catch((error) => console.log(error.response.data));
    },
    fetchPhotos(){
      axios.get('http://localhost:3002/tattoo')
      .then((response) => {
        this.photos = response.data;
        console.log(this.photos);
      }
       )
      .catch((error) => console.log(error.response.data));
    }
  },
  mounted(){
    // this.fetchPhotosSize();
    // this.fetchPhotos();
      // console.log(this.gender.indexOf(0));

    this.getConnect();
  }
}
</script>

<style lang="scss">
.activeP{
  background-color: white !important;
  color: black !important;
}
.gallery__holder{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
}
.gallery__big-img{
  width: 100%;
  height: 100%;
  padding: 5px;
  object-fit: cover;
}
.Gallery {
  height: max-content !important;
  background-color: black;
}
.gallery-road {
  display: flex;
  justify-content: center;
  position: relative;
  p{
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
}
.gallery-body {

		// .gallery-body__btn
    // height: max-content;

		&__btn {
      margin-bottom: 50px;
      cursor: pointer;
      transition: 0.4s;
      margin-top: 50px;
      
      &:hover{
        color: #ff3d58;
      }
		}

		// .gallery-body__seo

		&__seo {
      p{
        margin-bottom: 10px;
      }
		}
}
.gallery-inner {

    // .gallery-inner__row
    margin-top: 50px;
    margin-bottom: 50px;

		&__row {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      position: relative;
      margin-bottom: 20px;
		}

		// .gallery-inner__marker

		&__marker {
      margin-right: 50px;
      color: #ff3d58;
		}

		// .gallery-inner__filters

		&__filters {
      display: flex;
      p{
        margin-left: 30px;
        cursor: pointer;
        background-color: #ff3d58;
        border-radius: 10%;
        border-bottom: 2px solid #ff3d58;
        transition: 0.4s;
        padding: 5px;
        
        &:hover{
          color: black;
          // background-color: white;
        }
      }
		}
}
@media only screen and (max-width: 578px){
  .gallery-inner__marker{
    margin-right: 10px;
  }
  .gallery-inner__filters{
    p{
      margin-left: 10px;
    }
  }
}
@media only screen and (max-width: 426px){
  .gallery-inner__row{
    flex-direction: column;
  }
  .gallery-inner__marker{
    margin-bottom: 10px;
  }
}

</style>