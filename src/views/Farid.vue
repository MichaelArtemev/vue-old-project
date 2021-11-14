<template>
  <div class="master4">
     <div class="master4__content">
       <h1>
        Фарид
       </h1>
       <img src="@/assets/images/content/masters/3.jpg" alt="">
       <p>
         Имеет высшее художественное образование. В рисунке предпочитает яркие краски и тщательную проработку деталей изображения, делая абсолютно любой образ неповторимым и особенным. Мастерски владеет академическим рисунком, создает уникальные дизайны будущих татуировок.

Всегда придерживается принципам: профессионализм, любовь к работе, доверие и дружественный настрой, общительность, индивидуальный подход и креативность!
       </p>
     </div>
     <foot/>
  </div>
</template>

<script>
import foot from '@/componentsStorage/foot/foot.vue'

export default {
  components:{
    foot
  },
  data () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.master4{
  width: 100%;
  height: max-content;
  background-color: black;
}
.master4__content{
  h1{
    padding: 50px 30px;
  }
  img{
    margin: 0 auto;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  p{
    margin-top: 50px;
    padding: 50px 30px;
    background-color: #ff3d58;
  }
}
</style>