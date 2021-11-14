<template>
  <div id="Slide">    
   <div class="main-page-content__slider">
      <div class="main-page-content__promo"> <h5>АКЦИЯ</h5></div>
      <div class="main-page-content__main-txt">
        <h2>{{this.dataToRender.firstSection.h2}}</h2>
        <h1>{{this.dataToRender.firstSection.h1}}</h1>
        <p>{{this.dataToRender.firstSection.p}}</p>
      </div>
    <div class="main-page-content__info-block">
      <div class="main-page-content__info">
        <div class="main-page-content__info-main-txt">
          <h3>{{this.dataToRender.secondSection.block1.h3}}</h3>
        </div>
        <div class="main-page-content__line"></div>
        <div class="main-page-content__info-txt">
          {{this.dataToRender.secondSection.block1.info}}
        </div>
      </div>
      <div class="main-page-content__info slider-info2">
        <div class="main-page-content__info-main-txt">
          <h3>{{this.dataToRender.secondSection.block2.h3}}</h3>
        </div>
        <div class="main-page-content__line"></div>
        <div class="main-page-content__info-txt">
          {{this.dataToRender.secondSection.block2.info}}
        </div>
      </div>
      <div class="main-page-content__info slider-info3">
        <div class="main-page-content__info-main-txt">
          <h3>{{this.dataToRender.secondSection.block3.h3}}</h3>
        </div>
        <div class="main-page-content__line"></div>
        <div class="main-page-content__info-txt">
          {{this.dataToRender.secondSection.block3.info}}
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  

   export default {
    name: 'Slide',
    props:{
      dataToRender:{
        type: Object
      }
    },
    components: {
    },
    data () {
      return {
        greeting: 'Hello'
      }
    },
    created(){
    }
  }
</script>

<style lang="scss">

@media only screen and (max-width : 1025px){
  .slider-info3{
    display: none;
  }
}


</style>