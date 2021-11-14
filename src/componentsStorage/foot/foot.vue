<template>
  <div class="footer">
    <div class="footer__pop">
      <div class="footer__pop-content">

      </div>
    </div>
    <div class="footer-body">
      <div class="footer-header">
        <div class="footer-header__row">
          <div class="footer-header__col fcol1" ref="buttonRiki" id="h1"><h3 @click="getDopBlock" id="d1" >Почему Риккитикки?</h3></div>
          <div class="footer-header__col fcol2" ref="buttonHistory" id="h2"><h3 @click="getDopBlock" id="d2">История тату</h3></div>
          <div class="footer-header__col fcol3" ref="buttonAll" id="h3"><h3 @click="getDopBlock" id="d3">Разное о Тату</h3></div>
        </div>
        <div class="footer-header__row bottom-row">
          <div class="bottom-row__rikki" v-if="drawRikki">
            <h2>Рады вам в нашей студии!</h2>
            <p class="rikki__margin">
              1) Только профессиональные художники - изготовление эскиза любой сложности в кратчайшие сроки <br>
2) Ваша татуировка выполняется качественными мастерами. Мы гарантируем уровень качества исполнения вашей работы. <br>
3) Абсолютная безопасность – только одноразовые расходные материалы, уровень стерильности соответствует всем стандартам! <br>
4) Бесплатная консультация и высокий уровень сервиса.
            </p>
            <h4 @click="getInfo" id="i1">Подробнее</h4>
            <p class="footer-header__row-hidden" ref="hidden1">
              делать татуировку или нет?! выбирая рисунок для татуировки вы в любом
              случае остановитесь на том что отражает вас, говорит о вас, показывает вашу 
              внутреннюю сущность. если вы человек впечатлительный то стоит узнать смысл татуировки
              ее значение. если конечно вы выбираете уже существующую. узнайте как к ней относяться 
              в разных культурах и прочах. а то иногда можно узнать что ваша татуировка и милая
              зверушка это злобное божество. помните что это на всегда и не путайтесь в символах
            </p>
          </div>
           <div class="bottom-row__history" v-if="drawHistory">
            <h2>История татуировки!</h2>
            <p>
              География татуировки невероятна обшира, огромное колличество культур 
              внесли туда свой вклад, даше наша матушка Россия, правда не с самой хорошей стороны
              татуировок, стилей существует безмерное множество, все зависит только от вашей фантазии
            </p>
            <h4 @click="getInfo" id="i2">Подробнее</h4>
            <p class="footer-header__row-hidden" ref="hidden2">
              знаки, символы, рисунки, иероглифы, все они обьединяют людей. какой то признак
              15% взрослого населения планеты имеет хотя бы один рисунок на теле, а сама же 
              тату истоками уходит в самую древность, как клеймо или почетный знак отличия
              интерпретаций данного явления невероятное множество.
            </p>
          </div>
           <div class="bottom-row__all" v-if="drawAll">
            <h2>Современные тенденции!</h2>
            <p>
              Татуировка давно уже возведена в ранг искуссва, и высоко цениться во всех культурах
            </p>
          </div>
        </div>
        <div class="footer-footer__row footer-row">
          <div class="footer-row__nav">
            <nav>
              <ul>
                <li><a href="/about">О САЛОНЕ</a></li>
                <li> <a href="/services">УСЛУГИ</a></li>
                <li> <a href="/gallery">ГАЛЕРЕЯ</a></li>
                <li> <a href="/#response">ОТЗЫВЫ</a></li>
                <li><a href="/money">ЦЕНЫ</a></li>
                <li> <a href="/teach">ОБУЧЕНИЕ</a></li>
                <li> <a href="/contacts">КОНТАКТЫ</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="footer-map">
          <div class="footer-map__l">
            <div class="footer-map__inner-l">
              <div class="footer-map__row-adress">
                <img src="../../assets/images/content/locato.svg" alt="">
                <p>г.Москва Краснобогатырская 42 с.16</p>
              </div>
              <div class="footer-map__row-phone">
                <img src="../../assets/images/content/call.svg" alt="">
                <p>+7 (495) 167 70 43</p>
              </div>
              <div class="footer-map__row-info">
                <img src="../../assets/images/content/mail.svg" alt="">
                <p>rikkitikki@gmail.com</p>
              </div>
              <div class="footer-map__work-info">
                <p>Режим работы: <br>
Ежедневно с 10:00 до 22:00</p>
              </div>
              <div class="footer-map__buttons">
                <p class="footer-map__b1"> <a href="/booking"> Запись онлайн</a></p>
              </div>
              <div class="footer-map__social">
                <img src="../../assets/images/content/whatsapp.svg" alt="">
              </div>
              <div class="footer-map__judge">
                © Все права защищены, ООО «РИККИТИККИ» 2015 - 2021
              </div>
            </div>
            <div class="footer-map__inner-r">
              <img src="../../assets/images/content/age-limit.svg" alt="">
            </div>
          </div>
          <div class="footer-map__r">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.1401128182824!2d37.70148691613675!3d55.80816789518768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535ae7c86ec75%3A0xdf46f979af168134!2z0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C7LiwgNDIg0YHRgtGA0L7QtdC90LjQtSAxNiwg0JzQvtGB0LrQstCwLCBNb3Njb3cgT2JsYXN0LCAxMDc1NjQ!5e0!3m2!1sru!2sru!4v1608127253538!5m2!1sru!2sru" width="1000" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data () {
    

    return {
      drawRikki: true,
      drawHistory: false,
      drawAll: false,
      isVisible: false
    }
  },
  mounted(){
    document.querySelector("#h1").classList.add("active");
  },
  methods: {
    getDopBlock(e){
      if( e.target.id === "d1"){        
        document.querySelector("#h1").classList.add("active");
        document.querySelector("#h2").classList.remove("active");
        document.querySelector("#h3").classList.remove("active"); 
        this.drawRikki = true;
        this.drawHistory = false;
        this.drawAll = false;   
      }else if( e.target.id === "d2" ){
        document.querySelector("#h2").classList.add("active");
        document.querySelector("#h1").classList.remove("active");
        document.querySelector("#h3").classList.remove("active")
        this.drawRikki = false;
        this.drawHistory = true;
        this.drawAll = false;  
      }else{
        document.querySelector("#h3").classList.add("active");
        document.querySelector("#h1").classList.remove("active");
        document.querySelector("#h2").classList.remove("active");  
        this.drawRikki = false;
        this.drawHistory = false;
        this.drawAll = true;
      }

    },
    getInfo(e){
      if( e.target.id === "i1"){
        if( !this.isVisible ){
          this.$refs.hidden1.style.display = "block";
          this.isVisible = true;
        }else{
          this.$refs.hidden1.style.display = "none";
          this.isVisible = false;
        }        
      }else{
        if( !this.isVisible ){
          this.$refs.hidden2.style.display = "block";
          this.isVisible = true;
        }else{
          this.$refs.hidden2.style.display = "none";
          this.isVisible = false;
        }      
      }
    }
  }
}
</script>

<style lang="scss">

.active{
  border-bottom: 3px solid #ff3d58;
  color: #ff3d58;
}
  .footer {
    width: 100%;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.8);
    margin-top: 150px;
}
.footer-body {
}
.footer-header {
  h3{
    margin-top: 50px;
    font-size: 1.4em;
    transition: 1s;
    cursor: pointer;
    
    &:hover{
      transform: scale(1.2);
      color: #ff3d58;
    }
  }

		// .footer-header__row

		&__row {
      display: flex;
      justify-content:space-evenly;
      margin-top: 50px;
      height: 100px;
		}

		// .footer-header__col

		&__col {
      
      transition: 0.1s;
      &:hover{
        border-bottom: 3px solid #ff3d58 ;
      }
		}
}
.fcol1 {
}
.fcol2 {
}
.fcol3 {
}
.footer-header__row-hidden{
  display: none;
}
.bottom-row {

		// .bottom-row__rikki

		&__rikki {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: 190px;
      h4{
        transition: 1s;
        
        &:hover{
          color:#ff3d58;
        }
        cursor: pointer;
        &::before{
          content: '';
          width: 20px;
          height: 20px;
          margin-left: -30px;
          transform: rotate(-90deg);
          position: absolute;
          background-image: url("../../assets/images/content/tr.svg");
          background-size: cover;
        }
      }
      .rikki__margin{
        margin-bottom: 40px;
      }
      p{
        width: 700px;
      }

		}

		// .bottom-row__history

		&__history {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: 190px;
      h4{
        transition: 1s;
        
        &:hover{
          color:#ff3d58;
        }
        cursor: pointer;
        &::before{
          content: '';
          width: 20px;
          height: 20px;
          margin-left: -30px;
          transform: rotate(-90deg);
          position: absolute;
          background-image: url("../../assets/images/content/tr.svg");
          background-size: cover;
        }
      }
      p{
        width: 800px;
      }
		}

		// .bottom-row__all

		&__all {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: 190px;
      h4{
        transition: 1s;
        
        &:hover{
          color:#ff3d58;
        }
        cursor: pointer;
        &::before{
          content: '';
          width: 20px;
          height: 20px;
          margin-left: -30px;
          transform: rotate(-90deg);
          position: absolute;
          background-image: url("../../assets/images/content/tr.svg");
          background-size: cover;
        }
      }
		}
}
@media only screen and (max-width: 1000px){
  .footer{
    margin-top: 1000px;
  }
}
@media only screen and (max-width: 700px){
  .bottom-row{
    p{
      width: 400px;
    }
  }
}
@media only screen and (max-width: 650px){
  .footer-header__row{
    h3{
      font-size: 1em;
    }
  }
}
@media only screen and (max-width: 472px){
  .footer-header__row{
    h3{
      font-size: 0.8em;
    }
  }
}
@media only screen and (max-width: 400px){
  .bottom-row{
    p{
      width: 310px;
    }
  }
  .footer{
    margin-top: 1190px;
  }
  .footer-header__row{
    h3{
      font-size: 0.6em;
    }
  }
}
@media only screen and (max-width: 700px){
  .footer-header__row{
    p{
      font-size: 0.8em;
    }
  }
}
@media only screen and (max-width: 443px){
  .footer-header__row{
    p{
      font-size: 0.7em;
    }
  }
}
.footer-footer {

		// .footer-footer__row
    background-color: rgba(0, 0, 0, 0.8);
    margin-top: 500px;

		&__row {
      margin-top: 350px;
		}
}
.footer-row {
    background-color: rgba(0, 0, 0, 0.8);
		// .footer-row__nav

		&__nav {
      padding: 0px 250px;
      ul{
        display: flex;
        height: 50px;
        justify-content: space-evenly;
        li{
          cursor: pointer;
          transition: 1s;
          
          &:hover{
            color:#ff3d58;
            border-bottom: 3px solid #ff3d58;
          }
          font-size: 1.4em;
          list-style-type: none;
        }
      }
		}
}
.footer-map {

    // .footer-map__l
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    background-color:  rgba(0, 0, 0, 0.8);
    padding-top: 30px;
    margin-top: -16px;

		&__l {
      display: flex;
		}

		// .footer-map__inner-l

		&__inner-l {
      text-align: start;
      padding-left: 90px;
      img{
        width: 20px;
        height: 20px;
      }
		}

		// .footer-map__row-adress

		&__row-adress {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img{
        margin-right: 30px;
      }
		}

		// .footer-map__row-phone

		&__row-phone {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img{
        margin-right: 30px;
      }
		}

		// .footer-map__row-info

		&__row-info {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img{
        margin-right: 30px;
      }
		}

		// .footer-map__work-info

		&__work-info {
		}

		// .footer-map__buttons

		&__buttons {
      display: flex;
      margin-top: 20px;
      cursor: pointer;
      color:#ff3d58;
      
      p{
        margin-right: 20px;
        border-bottom: 3px solid #ff3d58;
        margin-bottom: 20px;
        transition: 1s;
        
        &:hover{
          color: white;
        }
      }
		}

		// .footer-map__b1

		&__b1 {
		}

		// .footer-map__social

		&__social {
      margin-bottom: 20px;
		}

		// .footer-map__judge

		&__judge {
      margin-top: 170px;
		}

		// .footer-map__inner-r

		&__inner-r {
      img{
        width: 100px;
        height: 100px;
      }
		}

		// .footer-map__r

		&__r {
		}
}
@media only screen and (max-width: 1448px){
  .footer-map__r{
    iframe{
      width: 600px;
    }
  }
}
@media only screen and (max-width: 1120px){
  .footer-map__r{
    iframe{
      width: 400px;
    }
  }
}
@media only screen and (max-width: 928px){
  .footer-map {
    flex-direction: column;
  }
  .footer-map__r{
    iframe{
      width: 100%;
    }
  }
}
@media only screen and (max-width: 1672px){
  .footer-row__nav{
    ul{
      li{
        font-size: 1em;
      }
    }
  }
}
@media only screen and (max-width: 1380px){
  .footer-row__nav{
    ul{
      li{
        font-size: 0.8em;
      }
    }
  }
}
@media only screen and (max-width: 1100px){
  .footer-row__nav{
    ul{
      display: none;
    }
  }
  .footer-map{
    margin-top: 0px;
  }
}
@media only screen and (max-width: 496px){
  .footer-map__inner-l{
    padding-left: 10px;
  }
  
}
.footer-body{
  background-color: black;
}
.footer-header{
  background-color: black;
}
.footer-map{
  background-color: black;
}
</style>