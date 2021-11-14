<template>
  <div class="home">
    <MainPageContainer/>  
    <servicesPage/>  
    <gallery/>
    <promotion/>
    <masters/>
    <review/>
    <blog/>
    <div class="home__buffer"></div>
    <foot/>    
  </div>
</template>

<script>
// @ is an alias to /src
import MainPageContainer from '@/componentsStorage/mainPage/MainPageContainer.vue'
import servicesPage from '@/componentsStorage/servicesPage/servicesPage.vue'
import gallery from '@/componentsStorage/gallery/gallery.vue'
import promotion from '@/componentsStorage/promotion/promotion.vue'
import masters from '@/componentsStorage/masters/masters.vue'
import review from '@/componentsStorage/review/review.vue'
import blog from '@/componentsStorage/blog/blog.vue'
import foot from '@/componentsStorage/foot/foot.vue'


  
  export default {
    components: {
      MainPageContainer,
      servicesPage,
      gallery,
      promotion,
      masters,
      review,
      blog,
      foot
    },
   
    data () {
      return {
        greeting: 'Hello'
      }
    }
  }

</script>

<style lang="scss">
  @media(max-width: 1002px){
    .home__buffer{
   width: 100%;
   height: 850px; 
  }
  }
   @media(max-width: 553px){
    .home__buffer{
   width: 100%;
   height: 1070px; 
  }
  }
</style>
