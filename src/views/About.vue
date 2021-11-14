<template>
  <div class="About">
    <div class="about-road">
      <p><a href="/">Главная</a></p> > 
      <p>О нас</p>
    </div>
    <div class="about-body">
      <div class="about-inner">
        <h1>Салон татуировок «РИККИТИККИ»</h1>
        <img src="../assets/images/content/about/1.jpg" alt="">
        <p>
          Привет, раз вы зашли на САЙТ, значит ваше появление здесь не случайно!! Вы попали в нужное место и в нужное время, где вам рады и с удовольствием помогут в решении вопроса советом и действием. РИККИТИККИ, татуировка может говорить с вами на своем уникальном языке, устраняя барьеры в общении, (как и другие способы модификации тела, вроде <a href="">ПИРСИНГА</a> , <a href="">ПЕРМАНЕНТА</a>, <a href="">ТАТУАЖА</a>. Так налаживаются связи между представителями разных возрастов, культур и полов. Следствием чего иногда является ВЗАИМОПОНИМАНИЕ. 
          <br>
          <br>
          <a href="">Читайте отзывы наших клиентов</a>
        </p>
        <img src="../assets/images/content/about/2.jpg" alt="">
        <p>Здесь работают не приверженцы своего дела, мы настоящие профи в татуировке, пирсинге, перманенте и боди-арте. Впрочем, что слова? Говорить можно много. Лучше всего за мастеров и тату-салон скажут их <a href="">ОТЛИЧНЫЕ работы!</a></p>
        <img src="../assets/images/content/about/3.jpg" alt="">
        <p>Сегодян в татуировке выражают себя многие люди, артисты, да и просто обычные смертные, это лучший вид исскуства, прекрасные картины на коже, которые сделают вам приятно. это не просто символы, пустые картинки, это вещи которые могут изменить вашу жизнь на корню.</p>
        <img src="../assets/images/content/about/4.jpg" alt="">
        <p>знаки, символы, рисунки, иероглифы, все они обьединяют людей. какой то признак
              15% взрослого населения планеты имеет хотя бы один рисунок на теле, а сама же 
              тату истоками уходит в самую древность, как клеймо или почетный знак отличия
              интерпретаций данного явления невероятное множество.</p>
        <img src="../assets/images/content/about/5.jpg" alt="">
        <p>делать татуировку или нет?! выбирая рисунок для татуировки вы в любом
              случае остановитесь на том что отражает вас, говорит о вас, показывает вашу 
              внутреннюю сущность. если вы человек впечатлительный то стоит узнать смысл татуировки
              ее значение. если конечно вы выбираете уже существующую. узнайте как к ней относяться 
              в разных культурах и прочах. а то иногда можно узнать что ваша татуировка и милая
              зверушка это злобное божество. помните что это на всегда и не путайтесь в символах</p>
              <img src="../assets/images/content/about/6.jpg" alt="">
              <img src="../assets/images/content/about/8.jpg" alt="">
              <img src="../assets/images/content/about/9.jpg" alt="">
        
      </div>      
      
    </div>
    <foot/>
  </div>
</template>

<script>
import foot from '@/componentsStorage/foot/foot.vue'

export default {
  name:"About",
  components:{
    foot
  },
  data () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.About {
  background-color: black;
}
.about-road {
  display: flex;
  justify-content: center;
  p{
    margin: 0px 20px;
  }  
  padding-top:50px;
  padding-bottom:50px;
}
.about-body {
  display: flex;
  justify-content: center;
  background-color: black;
}
.about-inner {
  text-align: start;
  
  background-color: rgba(255, 61, 88, 0.5);
  font-size: 1.3em;
  h1{
    margin: 50px 0px;
  }
  padding: 0px 40px;
  p{
    margin: 30px 0px;
  }
  img{
    margin-bottom: 30px;
  }
  width: 60%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
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
@media only screen and (max-width: 700px)
{
  .about-inner{
    font-size: 1em;
  }
}
@media only screen and (max-width: 600px)
{
  .about-inner{
    padding: 0px 10px;
    width: 100%;
  }
  
}
.about-road{
  cursor: pointer;
  position: relative;
}
</style>