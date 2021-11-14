<template>
  <div class="Servicer">
    <h1>НАШИ УСЛУГИ</h1>
    <div class="services-road">
      <p><a href="/">Главная</a></p> > <p>Услуги</p>
    </div>
    <div class="services-body">
      <div class="services-row">
        <a href="/tattos">
        <div class="services-col scol1">
          <img src="../assets/images/content/p3.svg" alt="">
          <h2>ТАТУИРОВКИ</h2>
        </div>
        </a>
        <a href="/eye">
          <div class="services-col scol2">
            <img src="../assets/images/content/p2.svg" alt="">
            <h2>ТАТУАЖ</h2>
          </div>
        </a>
      </div>
      <div class="services-row">
        <a href="/piers">
        <div class="services-col scol3">
          <img src="../assets/images/content/p1.svg" alt="">
          <h2>ПИРСИНГ</h2>
        </div>
        </a>
         <a href="/teach">
        <div class="services-col scol4">
          <img src="../assets/images/content/p4.svg" alt="">
          <h2>ОБУЧЕНИЕ</h2>
        </div>
        </a>
      </div>
      <div class="services-row">
        <a href="/del">
        <div class="services-col scol5">
          <img src="../assets/images/content/p6.svg" alt="">
          <h2>УДАЛЕНИЕ</h2>
        </div>
        </a>
        <a href="/correct">
          <div class="services-col scol6">
            <img src="../assets/images/content/p5.svg" alt="">
            <h2>ИСПРАВЛЕНИЕ</h2>
          </div>
        </a>
      </div>
    </div>
    <div class="services-action">
      <h2>ЗАПИШИСЬ В САЛОН И ПОЛУЧИ ПОДАРОЧНУЮ КАРТУ НА 1000 РУБЛЕЙ</h2>
    </div>
    <foot/>
  </div>
</template>

<script>
import foot from '@/componentsStorage/foot/foot.vue'

export default {
  name:"Services",
  components:{
    foot
  },
  data () {
    

    return {}
  }
}
</script>

<style lang="scss">
.Servicer {
  background-color: black;
  padding-top: 50px;
  h1{
    
  padding-bottom: 50px;
  }
}
.services-road {
  display: flex;
  justify-content: center;
  p{
    margin: 0px 20px;
    padding-bottom: 50px;
  }
}
.services-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.services-row {
  display: flex;
  
  img{
    
    
    object-fit: cover;
  }
}
.services-col {
  margin: 20px;
  border: 3px solid #ff3d58;
  transition: 1s;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  cursor: pointer;
  img{
    width: 100px;
    height: 100px;
    margin: 20px;
  }
  
  &:hover{
    transform: scale(1.1);
  }
  
}
.scol1{
  background-image: url("../assets/images/content/service/tatto.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.scol2{
  background-image: url("../assets/images/content/service/eye.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.scol3{
  background-image: url("../assets/images/content/service/piercing.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.scol4{
  background-image: url("../assets/images/content/service/learn.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.scol5{
  background-image: url("../assets/images/content/service/delete.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.scol6{
  background-image: url("../assets/images/content/service/correct.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.services-action {
  width: 100%;
  height: 400px;
  background-image: url("../assets/images/content/s.jpg");
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 60px;
}
@media only screen and (max-width: 878px){
  .services-col{
    width: 300px;
  }
}
@media only screen and (max-width: 670px){
  .services-col{
    width: 250px;
    margin: 5px;
  }
}
@media only screen and (max-width: 518px){
  .services-row{
    flex-direction: column;
  }
}
@media only screen and (max-width: 400px)
{
  .footer {
    margin-top: 140px !important;
  }
}
@media only screen and (max-width: 1000px)
{
  .footer {
    margin-top: 140px !important;
  }
}
</style>