<template>
  <div class="promotion">
    <div class="promotion-outer">
      <div class="promotion-inner">
        
        <div class="promotion-inner__left promotion-left-content">
          <div class="promotion-left-content__outer">
            <div class="promotion-left-content__inner">
              <h1>НАШИ ОТЛИЧИЯ</h1>
              <div class="promotion-left-content__1block promo-block">
                <h2>ГОСТИ КОНВЕНЦИЙ</h2>
                <div class="promotion-left-content__p">
                  <p>Постоянная коммуникация с топовыми мастерами, доступ к самому ценному опыту.</p>
                </div>
              </div>
              <div class="promotion-left-content__2block promo-block">
                <h2>ГАРАНТИЯ</h2>
                <div class="promotion-left-content__p">
                  <p>Надежность и отлаженный механизм поставки услуг.</p>
                </div>
              </div>
              <div class="promotion-left-content__3block promo-block">
                  <!-- <h2>АНЕСТЕТИК</h2>
                  <div class="promotion-left-content__p">
                    <p>Делаем татуировку по самым инновационным препаратам, имеем медика в штате.</p>
                  </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="promotion-inner__absolute"></div>
        <div class="promotion-inner__right">
          <h1>ДОВЕРИЕ</h1>
              <div class="promotion-right-content__1block promo-block">
                <h2>3 ГОДА В БИЗНЕСЕ</h2>
                <div class="promotion-right-content__p">
                  <p>Богатый опыт и еще больше решенных художественных задач.</p>
                </div>
              </div>
              <div class="promotion-right-content__2block promo-block">
                <h2>МЫ СЛУШАЕМ</h2>
                <div class="promotion-right-content__p">
                  <p>Оставляйте отзывы и делает маркап на INKETT.</p>
                </div>
              </div>
              <div class="promotion-right-content__3block promo-block">
                <h2>ВСЕ ДОКУМЕНТЫ</h2>
                <div class="promotion-right-content__p">
                  <p>Имеем все медицинские документы.</p>
                </div>
              </div>
        </div>
        <!-- <div class="promotion-inner__button"><button>ЗАПИСАТЬСЯ К МАСТЕРУ</button></div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

  
  export default {
    name: "promotion",
    components: {
      
    },
    data () {
      return {
        greeting: 'Hello'
      }
    }
  }

</script>

<style lang="scss">
.promotion-left-content__inner > *{
  margin-bottom: 50px;
}
.promotion-inner__right > *{
  margin-bottom: 50px;
}
.promo-block{
  h2{
    margin-bottom: 20px;
  }
}
  .promotion {
}
.promotion-outer {
  // position: relative;
  // padding-top: 100px;
  height: 100vh;
}
.promotion-inner {
    display: flex;
    justify-content: space-between;
    align-content: center;
		// .promotion-inner__absolute

		&__absolute {
      // position: absolute;
      width: 700px;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      background-image: url("../../assets/images/content/promo.png");
      background-size:cover;
      background-position: center;
      background-repeat: no-repeat;
		}

		// .promotion-inner__left

		&__left {
      width: 50%;
      text-align: start;
      padding-left: 50px;
      background-color: #ff3d58; 
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      color: black;
      p{
        font-size: 1.2em;
      }
		}

		// .promotion-inner__right

		&__right {
      width: 50%;
      text-align:end;
      padding-right: 50px;
      background-color:rgba(0, 0, 0, 0.8);
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      p{
        font-size: 1.2em;
      }
		}

		// .promotion-inner__button

		// &__button {
    //   button{
    //     position: absolute;
    //     top: 435px;
    //     left: 642px;        
    //   }
		// }
}
.promotion-left-content {

		// .promotion-left-content__outer

		&__outer {
		}

		// .promotion-left-content__inner

		&__inner {
		}

		// .promotion-left-content__1block

		&__1block {
		}

		// .promotion-left-content__p

		&__p {
		}

		// .promotion-left-content__2block

		&__2block {
		}

		// .promotion-left-content__3block

		&__3block {
		}
}
.promotion-right-content {

		// .promotion-right-content__1block

		&__1block {
		}

		// .promotion-right-content__p

		&__p {
		}

		// .promotion-right-content__2block

		&__2block {
		}

		// .promotion-right-content__3block

		&__3block {
		}
}
@media only screen and (max-width :1162px){
  .promotion-inner__left{
    padding-left: 50px;
  }
  .promotion-inner__right{
    padding-right: 50px;
  }
}
@media only screen and (max-width :974px){
  .promotion-inner__left{
    padding-left: 10px;
  }
  .promotion-inner__right{
    padding-right: 10px;
  }
}
@media only screen and (max-width :600px){
  .promotion-inner__absolute{
    display: none;
  }
  .promotion-inner__left{
    padding-left: 20px;
    height: 140vh;
  }
  .promotion-inner__right{
    padding-right: 20px;
  }
  .promotion-outer{
    height: 140vh;
  }
}
@media only screen and (max-width :358px){
  
  .promotion-inner__left{
    padding-left: 5px;
  }
  .promotion-inner__right{
    padding-right: 5px;
  }
}
@media only screen and (max-height :688px){
  
  .promotion-right-content__2block,
  .promotion-left-content__2block,
  .promotion-right-content__3block{
    display: none;
  }
}
</style>