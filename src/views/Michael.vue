<template>
  <div class="master2">
     <div class="master2__content">
       <h1>
        Яннэ
       </h1>
       <img src="@/assets/3.jpg" alt="">
       <p>
         С детства привлекало изобразительное искусство, поэтому проявлять себя в этом начал довольно рано. Со временем стали открываться разные грани художественного творчества, и он все больше проникся этим. Безгранично любит свою профессию и стремится к постоянному росту и совершенствованию!
 Превосходно создает живописные и монохромные композиции, точно передавая их характер и уделяя внимание каждой детали будущей работы. В татуировке считает главным гармоничное расположение рисунка, с учетом динамики тела. Разрабатывает уникальные и неповторимые авторские эскизы.
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
.master2{
  width: 100%;
  height: max-content;
  background-color: black;
}
.master2__content{
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