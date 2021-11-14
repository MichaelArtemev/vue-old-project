<template>
  <div class="reviewSlide">
    <div class="reviewSlide-body">
      <div class="reviewSlide-left">
        <div class="reviewSlide-left__inner">
          <div class="reviewSlide-left__txt">
            <p>{{reviewTxt}}</p>
          </div>
          <div class="reviewSlide-left__author">
            <h2>{{reviewAuthor}}</h2>
          </div>
          <div class="reviewSlide-left__button">
            <button>ОСТАВИТЬ ОТЗЫВ</button>
          </div>
        </div>
      </div> 
      <div class="reviewSlide-right">
        <img :src="src" alt="">
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  name:"reviewSlide",  
  props:{
    reviewAuthor: {
      type: String,
      required: true
    },
    reviewTxt: {
      type: String,
      required: true
    },
    reviewId: {
      type: Number,
      required: true
    }
  },
  created(){ 
    if( this.reviewId === 1 ){
      this.src = require("../../../assets/images/content/review/1.jpg"); 
    }else if( this.reviewId === 2 ){
      this.src = require("../../../assets/images/content/review/2.jpg"); 
    }else if( this.reviewId === 3 ){
      this.src = require("../../../assets/images/content/review/3.jpg"); 
    } else if( this.reviewId === 4 ){
      this.src = require("../../../assets/images/content/review/4.jpg"); 
    }  else if( this.reviewId === 5 ){
      this.src = require("../../../assets/images/content/review/5.jpg"); 
    }  else if( this.reviewId === 6 ){
      this.src = require("../../../assets/images/content/review/6.jpg"); 
    }    
  },
  data () {
    return{      
      reviewWork: [

      ],
      src: null
    }
  }
}
</script>

<style lang="scss">
.reviewSlide {
}
.reviewSlide-body {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.reviewSlide-left {

		// .reviewSlide-left__inner
    width: 50%;

		&__inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    &__inner > *{
      margin-bottom: 10px;
    }

		// .reviewSlide-left__txt

		&__txt {
      width: 500px;
      font-size: 1.3em;
      border: 5px solid #ff3d58;
      padding: 20px;
      border-radius: 10px;
		}

		// .reviewSlide-left__author

		&__author {
		}

		// .reviewSlide-left__button

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
.reviewSlide-right {
  width: 50%;
  height: 100%;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}
@media only screen and (max-width: 1000px){
  .reviewSlide-body{
    flex-direction: column;
  }
  .reviewSlide-left{
    margin-bottom: 50px;
  }
  .reviewSlide-right{
    width: 100% !important;
  }
  .reviewSlide-left__txt{
    width: 310px;
  }
}
</style>