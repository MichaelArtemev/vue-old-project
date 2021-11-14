<template>
  <div class="review" id="response">
    <div class="review-h1"><h1>ОТЗЫВЫ</h1></div>
    <div class="review-body">
      <VueSlickCarousel v-bind="settings">
        <div class="reviev-content" v-for="value in authors" v-bind:key="value.id">
          <reviewSlide 
            :reviewAuthor="value.name"
            :reviewTxt="value.comment"
            :reviewId="value.id"
          />
        </div>        
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import reviewSlide from '@/componentsStorage/review/components/reviewSlide.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name:"review",
  components:{
    reviewSlide,
    VueSlickCarousel
  },
  data () {
    return{
      settings: {
          "arrows":true,
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
      },
      authors: {
        autor1: {
          id: 1,
          name: "Ирина",
          comment: "Все очень быстро, СУПЕРСКАЯ АТМОСФЕРА! давно уже боялась, а оказалось все прямо волшебно"
        },
        autor2: {
          id: 2,
          name: "Салават",
          comment: "по совету знакомых вышел на Карима, более чем доволен результатом"
        },
        autor3: {
          id: 3,
          name: "Полина",
          comment: "Ха я наконецто нашла мастера который умеет слушать! и большой привет администратору, девочка по совместительсту еще и фотограф, спасибо за результат!"
        },
        autor4: {
          id: 4,
          name: "Настя",
          comment: "Очень внимательный персонал, работа понравилась, и отдельное спасибо мастеру Янне"
        },
        autor5: {
          id: 5,
          name: "Вероника",
          comment: "Спасибо! Все понравилось, Фарид супер."
        },
        autor6: {
          id: 6,
          name: "Дарья",
          comment: "забиваю тут спину, уже 3 сеанс, всем довольна и отдельное спасибо администратору"
        }
      }
    }
  }
}
</script>

<style lang="scss">
.review {
  width: 100%;
  max-height: 100vh;
}
.review-h1 {
  margin:50px 0px 50px 0px;
}
.review-body {
}
.reviev-content {
}
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-next{
  left: 800px;
}
.slick-prev{
  left: 50px;
  display: none !important;
}
@media only screen and (max-width: 1716px){
  .slick-next{
  left: 750px;
}
}
@media only screen and (max-width: 1600px){
  .slick-next{
  left: 700px;
}
}
@media only screen and (max-width: 1500px){
  .slick-next{
  left: 650px;
}
}
@media only screen and (max-width: 1350px){
  .slick-next{
  left: 600px;
}
}
@media only screen and (max-width: 1246px){
  .slick-next{
  left: 580px;
}
}
@media only screen and (max-width: 1200px){
  .slick-next{
  left: 560px;
}
}
@media only screen and (max-width: 1162px){
  .slick-next{
  display: none !important;
}
}
@media only screen and (max-width: 1004px){
  .reviewSlide-left__txt{
    padding: 5px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  
}

</style>