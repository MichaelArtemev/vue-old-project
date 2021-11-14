<template>
  <div class="master3">
     <div class="master3__content">
       <h1>
        Виталий
       </h1>
       <img src="@/assets/images/content/masters/2.jpg" alt="">
       <p>
         Еще в 10 классе сделал первую татуировку товарищу, а потом, после получения высшего художественного образования, все приняло оборот профессиональной деятельности.

Основательно подходит к разработке эскиза, работает во всех стилях, выполняя даже самые сложные и нереальные работы на высшем уровне.

Качеству исполнения работы, Вашей безопасности, стерильности и комфорту уделяет самое пристальное внимание.

Невероятно предан своей работе и безгранично серьезно подходит к каждой татуировке.
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
.master3{
  width: 100%;
  height: max-content;
  background-color: black;
}
.master3__content{
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