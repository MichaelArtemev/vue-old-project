<template>
  <div class="blog">
    <h1>БЛОГ</h1>
    <div class="blog__body">
      <div class="blog__inner">
        <div class="blog__l blog-content">
          <div class="blog-content__row">
            <a href="/blog1">
              <div class="blog-content__col col1">
                <h2>БОЛЬНО ЛИ ДЕЛАТЬ ТАТУ?</h2>
                <div class="blog-content__view">
                  <img src="../../assets/images/content/blog/view.svg" alt="">
                  <p>405</p>
                </div>
              </div>
            </a>
            <a href="/blog2">
              <div class="blog-content__col col2">
                <h2>УХОД ЗА ТАТУИРОВКОЙ</h2>
                <div class="blog-content__view">
                  <img src="../../assets/images/content/blog/view.svg" alt="">
                  <p>315</p>
                </div>
              </div>
            </a>
          </div>
          <div class="blog-content__row">
            <a href="/blog3">
              <div class="blog-content__col col3">
                <h2>КАК ВЫБРАТЬ ТАТУ?</h2>
                <div class="blog-content__view">
                  <img src="../../assets/images/content/blog/view.svg" alt="">
                  <p>265</p>
                </div>
              </div>
            </a>
            <a href="/blog4">
              <div class="blog-content__col col4">
                <h2>КАК ВЫБРАТЬ МАСТЕРА?</h2>
                <div class="blog-content__view">
                  <img src="../../assets/images/content/blog/view.svg" alt="">
                  <p>512</p>
                </div>
              </div> 
            </a>           
          </div>
          <div class="blog-content__row">
            <a href="/blog5">
              <div class="blog-content__col col5">
                <h2>ТАТУ ДО 18</h2>
                <div class="blog-content__view">
                  <img src="../../assets/images/content/blog/view.svg" alt="">
                  <p>198</p>
                </div>
              </div>
             </a>   
             <a href="/blog6">
              <div class="blog-content__col col6">
                <h2>ПАРНЫЕ ТАТУ</h2>
                <div class="blog-content__view">
                  <img src="../../assets/images/content/blog/view.svg" alt="">
                  <p>458</p>
                </div>
              </div>  
            </a>            
          </div>
          
        </div>
        <div class="blog__r">
          <h2>КУПОН НА СКИДКУ</h2>
          <p>Хочешь сделать татуировку
          со скидкой?
          Получи уникальный промокод прямо сейчас и обменяй его
          на скидку в нашем салоне!
          </p>
          <br>
          <p>Внимание предложение ограничено, если промокоды сегодня кончились, заходите
              на наш сайт завтра!
          </p>
          <div class="blog__cupons">
            <p>Осталось <br> купонов: </p>
            <h2>14</h2>
          </div>
          <div class="blog__form" >
            <input type="text" ref="input1" placeholder=" Имя"  v-model="name">
            <input type="text" ref="input2" placeholder=" EMail" v-model="email">
            <input type="text" ref="input3" placeholder=" Телефон" v-model="phone" @click="getPhoneTemplate">
          </div>
          <div class="blog__chek">
            <input type="checkbox"  v-model="checkBox">
            <p>Вы даете согласи на обработку <span>персональных данных</span></p>
          </div>
          <div class="blog__error" ref="error">
            <p>{{errorMsg}}</p>
          </div>
          <div class="blog__button">
            <button @click="sendForn">ПОЛУЧИТЬ КУПОН</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      phoneCheck: false,
      checkBox: false,
      errorMsg: 'подтвердите согласие'
    }
  },
  methods:{
    getPhoneTemplate(){
      if( this.phoneCheck ){
        return
      }else{
        this.phoneCheck = true;
        this.phone = '+7 '
      }      
    },
    sendForn(){
      if( this.name === '' || this.email === '' || this.phone === ''){
        this.$refs.error.style.display = "block";
        this.$refs.input1.style.borderColor = "red";
        this.$refs.input2.style.borderColor = "red";
        this.$refs.input3.style.borderColor = "red";
        this.errorMsg = "красные поля обязательны к заполению!";
      }else if( this.checkBox === false ){
        this.$refs.error.style.display = "block";
        this.errorMsg = "подтвердите согласие на обработку личных данных";        
      }else{
        alert("запрос отправлен")
      }
    }
  }
}
</script>

<style lang="scss">
.blog {

    // .blog__body
    h1{
      margin-bottom: 50px;
    }
    width: 100%;
    height: 100vh;
    margin-top: 190px;

		&__body {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
		}

		// .blog__inner

		&__inner {
      display: flex;
      padding: 0px 10px;
		}

		// .blog__l

		&__l {
		}

		// .blog__r

		&__r {
      display: flex;
      flex-direction: column;  
      justify-content: space-evenly;
      padding: 0px 20px;
      align-content: space-around;    
      background-image: url("../../assets/images/content/blog/r.jpg");
      background-size: cover;
      background-blend-mode: multiply;
      background-color: rgba(0, 0, 0, 0.6);
      width: 400px;
      margin-left: 40px;
      h2{
        color:#ff3d58;
      }
      span{
        color:#ff3d58;
      }
      p{
        font-size: 1.2em;
      }

		}

		// .blog__cupons

		&__cupons {
		}

		// .blog__form

		&__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      margin-left: 30px;
      width: 310px;
      input{
        background-color: transparent;
        border: 2px solid #ff3d58;
        color: white;
        padding: 5px;
      }
    }
    &__form > *{
      margin-bottom: 10px;
    }

		// .blog__chek

		&__chek {
		}

		// .blog__error

		&__error {
      color: red;
      display: none;
		}

		// .blog__button

		&__button {
      button{
        width: 250px;
        height: 60px;
        background-color: #ff3d58;

        font-size: 1.2em;
        color: white;
        border: none;
        opacity: 0.7;
        cursor: pointer;
        transition: 1s;
        &:hover{
          opacity: 1;
        }
      }
		}
}
.blog-content {

		// .blog-content__row

		&__row {
      display: flex;
		}

		// .blog-content__col

		&__col {
      width: 300px;
      height: 300px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      cursor: pointer;
      transition: 0.4s;
      &:hover{
        border: 5px solid #ff3d58;
        transform: scale(1.1);
      }
      p{
        font-size: 1.2em;
      }
      img{
        width: 50px;
        height: 50px;
      }
		}

		// .blog-content__view

		&__view {
		}
}
.col1 {
  background-image: url("../../assets/images/content/blog/1.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.col2 {
  background-image: url("../../assets/images/content/blog/2.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.col3 {
  background-image: url("../../assets/images/content/blog/3.jpg");
  background-size: cover;
  background-color: rgba(#fff, .5);
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.col4 {
  background-image: url("../../assets/images/content/blog/4.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.col5 {
  background-image: url("../../assets/images/content/blog/5.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
.col6 {
  background-image: url("../../assets/images/content/blog/6.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}
@media only screen and (max-height: 862px){
  .blog{
    min-height: 862px;

  }
  .blog__body{
    min-height: 862px;
  }
}
@media only screen and (max-width: 1000px){
  .blog__inner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px !important;
}
  .blog{
    margin-top: 600px;
    h1{
      margin-bottom: 500px;
      margin-top: 0px;
    }
    
  }
  .blog__r{
    width: 100%;
    
    margin-left: 0px;
    margin-top: 40px;
    align-items: center;
    padding-bottom: 130px;
    h2{
      margin-bottom: 30px;
      margin-top: 30px;
    }
    p{
      margin-bottom: 10px;
    }
  }
  .blog__inner{
    flex-direction: column;
    margin-top: -350px;
  }
}
@media only screen and (max-width: 650px){
  .blog-content__row{
    flex-direction: column;
  }
  .col6{
    display: none;
  }
  .col5{
    display: none;
  }
  .col4{
    display: none;
  }
}
@media only screen and (max-width: 406px){
  .blog-content__col {
   
    margin-left: 0px;
    margin-right: 0px;
    
}
.blog{
  margin-left: 16px;
}
}
@media only screen and (max-width: 496px){
  .blog__form{
    margin-left: 0;
  }
  .blog__r{
    margin-left: 5px;
  }
}
@media only screen and (max-width: 402px){
  .blog__r{
    margin-left: 0;
    padding: 0;

  }
  .blog{
    margin-left: 0px;
    margin-top: 700px;
  }
  .blog h1 {
    margin-bottom: 691px;
}
}

</style>