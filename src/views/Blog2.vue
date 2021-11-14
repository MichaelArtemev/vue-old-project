<template>
  <div class="news2">
     <div class="news2__content">
       <h1>
         Уход за тату
       </h1>
       <img src="../assets/4.jpg" alt="">
     <p>
       Уход в первые дни
Сразу же после нанесения рисунка ваш мастер обработает татуировку антисептическим и/или ранозаживляющим средством. Далее, сверху накладывается пленка, которая фиксируется пластырем. Обычно многие используют впитывающую пеленку (ее можно приобрести в аптеке). Однако, сейчас не менее популярны специальные пленки, которые не придется менять в первые дни несколько раз за день, что облегчает уход тем, кто, например, работает или учится. К таким пленкам относится Suprasorb F – она не только защищает кожу от инфицирования, но позволяет ей дышать, имеет газо- и паропроницаемую структуру. На пленку нанесен гипоаллергенный клей, поэтому дополнительная фиксация не нужна.
Обратите внимание на рекомендации вашего мастера, они важны для сохранения качества и итогового результата.
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
.news2{
  background-color: black;
  width: 100%;
  height: max-content;
}
.news2__content{
  img{
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-bottom: 50px;
    object-fit: cover;
  }
  padding-top: 100px;
  h1{
    margin-bottom: 50px;
  }
  p{
    padding: 50px 30px;
    background-color: #ff3d58;
  }
}
</style>