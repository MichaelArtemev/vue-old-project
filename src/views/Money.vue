<template>
  <div class="money">
    <div class="money__content">
      <div class="money__info">
        <h1>Цены</h1>
      </div>
      <div class="money__line">
        <div class="money__col">
          <img src="../assets/3.jpg" alt="">
          <h2>тату от 3500 рублей</h2>
        </div>
        <div class="money__col">
          <img src="../assets/4.jpg" alt="">
          <h2>татуаж от 2500 рублей</h2>
        </div>
        <div class="money__col">
          <img src="../assets/5.jpg" alt="">
          <h2>исправление тату от 3500 рублей</h2>
        </div>
        <div class="money__col">
          <img src="../assets/6.jpg" alt="">
          <h2>реставрация тату от 1500 рублей</h2>
        </div>
        <div class="money__col">
          <img src="../assets/7.jpg" alt="">
          <h2>био тату от 500 рублей</h2>
        </div>
        <div class="money__col">
          <img src="../assets/3.jpg" alt="">
          <h2>размер 10х5 от 3000 рублей</h2>
        </div>
         <div class="money__col">
          <img src="../assets/3.jpg" alt="">
          <h2>размер 5х5 от 1000 рублей</h2>
        </div>
         <div class="money__col">
          <img src="../assets/8.jpg" alt="">
          <h2>коррекция бесплатно</h2>
          <p>*в течении 3х недель с момента нанесения в нашем салоне</p>
        </div>
      </div>
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
.money{
  width: 100%;
  height: max-content;
  background-color: black;
  padding-top: 50px;
}
.money__col{
  img{
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  h2{
    margin-top: 40px;
    margin-bottom: 30px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 80px;
}
.money__line{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>