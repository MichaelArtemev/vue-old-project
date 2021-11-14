<template>
<div>
  <div class="fix__write" ref="fixwrite">
    <div class="fix__wtire-cross" @click="closeWrite">
      X
    </div>
    <div class="fix__write-content">
      <h1>Введите номер телефона</h1>
      <input type="phone" v-model="phone">
      <h1>Или свой email</h1>
      <input type="email" v-model="email">
      <br>
      <br>

        <button class="btn" @click="getAlert"> Отправить 

        </button>
    </div>
  </div>
    <div class="fix__pop" ref="fixpop">
      <div class="fix__cross" @click="closeModal">
        X
      </div>
      <div class="fix__pop-menu">
        <ul>
          <li>
           <a href="/gallery" @click="closeModal"> Галерея</a>
          </li>
          <li>
           <a href="/about" @click="closeModal"> О салоне</a>
          </li>
          <li>
           <a href="/services" @click="closeModal"> Услуги</a>
          </li>
          <li>
          <a href="/#response" @click="closeModal">  Отзывы</a>
          </li>
          <li>
          <a href="/money" @click="closeModal">  Цены </a>
          </li>
          <li>
          <a href="/teach" @click="closeModal">   Обучение</a>
          </li>
          <li>
          <a href="/contacts" @click="closeModal">  Контакты</a>
          </li>
          <li>
          <a href="/#home" @click="closeModal">  Главная</a>
          </li>
        </ul>
      </div>
    </div>
  <div class="FixNavigationContainer">
    

    <div class="FixNavigationContainer__content content-nav">
      <nav class="content-nav__main-container">
        <div class="content-nav__left-block left-block">
          <div class="left-block__logo">
            Rikkitikki tatto
          </div>
          <div class="left-block__info-container info-container">
            <div class="info-container__info-line info-line">
              <div class="info-line__svg"><img src="../../assets/images/content/locato.svg" width="20px" height="20px" alt=""></div>
              <div class="info-line__addres">г.Москва Краснобогатырская 42 с.16</div>
            </div>
            <div class="info-container__info-line info-line">
              <div class="info-line__svg"><img src="../../assets/images/content/call.svg" width="20px" height="20px" alt=""></div>
              <div class="info-line__addres">+7 (495) 167 70 43</div>
            </div>
          </div>
        </div>
        <div class="content-nav__right-block right-block">
          <div class="right-block__button">
            <button @click="openWrite"><h4>ЗАПИСАТЬСЯ <br>
              К МАСТЕРУ</h4> 
            </button>
          </div>
          <div class="right-block__burger"
           @click="openModal" 
           ref="burgerBlock">
            <span></span>
            <div class="burger-line"></div>
          </div>
        </div>
      </nav>
    </div>

    
  </div>
</div>
</template>

<script>
export default {
    name: 'FixNavigationContainer',
    components: {
      
    },
    data () {
      return {
        burgerCheck: false,
        phone: '',
        email: ''
      }
    },
    methods: {
      getAlert(){
        if(this.phone === "" && this.email ===""){
          alert("заполните поле");
        }else{
          alert("данные отправлены")
        }
      },
      closeWrite(){
        this.$refs.fixwrite.style.display = "none";

      },
      openWrite(){
        this.$refs.fixwrite.style.display = "block";

      },
      openModal(){
        this.$refs.fixpop.style.display = "block";
      },
      closeModal(){
        this.$refs.fixpop.style.display = "none";
      },
      animateBurgerBlock(){
        if(this.burgerCheck){
          this.$refs.burgerBlock.classList.remove('active');
          this.burgerCheck = false; 
        }else{
          this.$refs.burgerBlock.classList.add('active');
          this.burgerCheck = true;   
        }            
      }
    }
  }
</script>

<style lang="scss">
.btn{
  cursor: pointer;
  padding: 10px 30px;
  background-color: #ff3d58;
  color: white;
  border: none;
}
.fix__wtire-cross{
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  font-size: 3em;
}
.fix__write-content{
  margin-top: 10%;
}
.fix__write{
  width: 100%;
  height: 120vh;
  background-color: black;
  position: fixed;
  z-index: 199;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: none;

}
@media(max-height: 521px){
  .fix__pop-menu{
    padding-top: 0px !important;
  }
}
@media(max-height: 361px){
  .fix__pop-menu{
    li {
    font-size: 1.5em !important;
   }
  }
}
.fix__cross{
  font-size: 3em;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.fix__pop-menu{
  padding-top: 150px;
   li {
    list-style-type: none; /* Убираем маркеры */
    font-size: 2em;
    cursor: pointer;
   }
   ul {
    margin-left: 0; /* Отступ слева в браузере IE и Opera */
    padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
   }
}
.fix__pop{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
  background-color: black;
  z-index: 199;
  position: fixed;
  display: none;
}
.FixNavigationContainer__content{
  z-index: 200 !important;
}

.FixNavigationContainer {
  margin-top:5px;
  margin-left: 10px;
  position: fixed;
  width: 100%;

    // .FixNavigationContainer__content
    .right-block{
      margin-top: 45px;
      display: flex;
      align-items: center;      
      &__burger{
          width: 75px;
          height: 75px;
          margin-left: 20px;
          margin-right: 20px;
          background-color: rgba(0, 0, 0, 0.6);
          cursor: pointer;
          transition: 1s;
          position: relative;
          span{
            background-color: white;
            position: absolute;
            width: 50px;
            height: 3px;
            left: 12px;
            top: 36px;
            transition: 0.5s;
            
          }
          .burger-line{   
            transition: 1s;                                
            &::before,
            &::after
            {
              content: "";
              background-color: white;
              position: absolute;
              width: 50px;
              height: 3px;
              left: 0;
              transition: 0.5s;  
            }     
            &::before{
              top: 24px;
              left: 12px;
            }  
            &::after{
              bottom:24px;
              left: 12px;
            }      
          }
          &:hover{
            background-color: rgba(0, 0, 0,1);
          }
        }
      button{
        width: 250px;
        background-color: #ff3d58;
        color:white;
        border: none;
        opacity: 0.7;
        cursor: pointer;
        transition: 1s;
                &:hover{
          opacity: 1;
        }
      }
    }

		&__content {
		}
}
.content-nav {

    // .content-nav__main-container
    

		&__main-container {
      display: flex;
      -webkit-justify-content: space-between; /* Safari */

      justify-content: space-between;
		}

		// .content-nav__left-block

		&__left-block {
      display: flex;
      align-items: center;
		}
}
.left-block {

		// .left-block__logo

		&__logo {
      font-family: 'Dancing Script', cursive;
      font-size: 5em;
		}

		// .left-block__info-container

		&__info-container {
      margin-top:20px;
      margin-left: 30px;
		}
}
.info-container {

		// .info-container__info-line

		&__info-line {
		}
}
.info-line {

    // .info-line__svg
    display: flex;

		&__svg {
      margin-right: 20px;
		}

		// .info-line__addres

		&__addres {
		}
}
.right-block__burger.active{
  span{
    transform: scale(0);
  }
  .burger-line{
    &::before{
      transform: rotate(45deg);
      top:36px;
    }
    &::after{
      transform: rotate(-45deg);
      bottom: 36px;
    }
  }
}
@media only screen and (max-width : 1250px){
  .info-container{
    visibility: hidden;
  }
}
@media only screen and (max-width : 1220px){
  .left-block__logo{
    font-size: 3em;
    margin-left: 50px;
  }
}
@media only screen and (max-width : 1102px){
  .left-block__logo{
    font-size: 2em;
    margin-left: 50px;
  }
}
@media only screen and (max-width : 1024px){
  .left-block__logo{
    font-size: 1.5em;
  }
}
@media only screen and (max-width : 714px){
  .right-block__button{
    display: none;
  }
}
@media only screen and (max-width : 448px){
  .right-block{
        margin-left: -50px;
  }
}
@media only screen and (max-width : 398px){
  .right-block{
        margin-left: -80px;
  }
}
@media only screen and (max-width : 370px){
  .right-block{
    margin-left: -200px;        
  }
}
@media only screen and (max-width : 369px){ 
  .right-block__burger.active{
  span{
    transform: scale(0);
  }
  .burger-line{
    &::before{
      transform: rotate(45deg);
      margin-top: 10px;
    }
    &::after{
      transform: rotate(-45deg);
      margin-bottom: 7px;
    }
  }
} 
  .FixNavigationContainer{
    margin-left: 0px !important;
  }
  .right-block__burger {
    width: 50px !important;
    height: 50px !important;
    margin-right: -25px !important;
  }
  .burger-line{   
            transition: 1s;                                
            &::before,
            &::after
            {
              content: "";
              background-color: white;
              position: absolute;
              width: 30px !important;
              height: 3px;
              left: 0;
              transition: 0.5s;  
            }     
            &::before{
              top: 15px !important;
              left: 10px !important;
            }  
            &::after{
              bottom: 15px !important;
              left: 10px !important;
            }      
          }
          span{
            width: 30px !important;
            left: 10px !important;
            top: 23px !important;
          }
}


</style>