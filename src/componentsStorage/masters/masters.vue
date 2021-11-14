<template>
  <div class="masters">    
    <div class="masters-body"> 
      <h1>МАСТЕРА</h1>     
      <div class="masters-inner" @click="showP">
        <div class="masters-inner__group1">
          <a href="/karim">
            <div class="masters-inner__master1">
              <img src="../../assets/images/content/masters/5.jpg" alt="" id="1">
              <h2>Карим</h2>
              <div class="masters-inner__master1-info" ref="master1">
                <p>стаж 3 года. орнаментал / графика</p>
              </div>          
            </div>
          </a>
          <a href="/vit">
            <div class="masters-inner__master2">
              <img src="../../assets/images/content/masters/2.jpg" alt="" id="2">
              <h2>Виталий</h2>
              <div class="masters-inner__master2-info" ref="master2">
                <p>10 лет опыта. татуировка</p>
              </div>
            </div>
          </a>
        </div>
        <div class="masters-inner__group2">
          <a href="/janne">
            <div class="masters-inner__master3">
              <img src="../../assets/9.jpg" alt="" id="3">
              <h2>Яннэ</h2>
              <div class="masters-inner__master3-info" ref="master3">
                <p>Малый стаж. шрам. / тату</p>
              </div>
            </div>
          </a>
          <a href="/farid">
            <div class="masters-inner__master4">
              <img src="../../assets/images/content/masters/3.jpg" alt="" id="4">
              <h2>Фарид</h2>
              <div class="masters-inner__master4-info" ref="master4">
                <p>Малый стаж. татуировка / пирсинг</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "masters",
  methods:{
    showP(e){
      console.log(this.$refs.master1.style);
      
      if( e.target.id === 1 ){
        this.$refs.master1.style.opacity = 1;
      }
    }
  }
}
</script>

<style lang="scss" >
  .masters {
    width: 100%;
    height: 100vh;
}
.masters-body {
  padding-top: 50px;
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/images/content/masters.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      margin: 50px;
    }
}
.masters-inner__master1-info{
  
  
}
.masters-inner {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding-left: 30px;
  padding-right: 30px;

    // .masters-inner__master1
    img{
      width: 250px;
      height: 250px;
      border-radius:50%;   
      object-fit: cover;  
      cursor: pointer; 
      transition: 0.5s;      
      &:hover{
        border: 5px solid #ff3d58;
        transform: scale(1.1);
      }
    }
    h2{
      margin-top: 25px;
    }
    p{
      font-size: 1.3em;
      color:#ff3d58;
      margin-top: 10px; 
      margin-bottom: 5px;     
    }
		&__master1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
		}

		// .masters-inner__master2

		&__master2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
		}

		// .masters-inner__master3

		&__master3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
		}

		// .masters-inner__master4

		&__master4 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
		}
}
@media only screen and (max-width :1314px){
  .masters-inner {
    img{
      width: 150px;
      height: 150px;
    }
  }
}
@media only screen and (max-width :700px){
  .masters-inner {
    img{
      width: 120px;
      height: 120px;
    }
  }
}
@media only screen and (max-width :596px){
  .masters-body{
    h1{
      display: none;
    }
  }
}
@media only screen and (max-width :372px){
  .masters-inner {
    img{
      width: 100px;
      height: 100px;
    }
    p{
      font-size: 1em;
    }
  }
}
// @media only screen and (max-width :630px){
//   .masters-inner {
//      flex-direction: column;
//   }
// }

@media only screen and (max-height : 786px){
  .masters{
    padding-bottom:100px;
  }
}
@media only screen and (max-height : 786px){
  .masters{
    height: 786px;
    min-height: 786px;
  }
  .masters-body{
    height: 786px;
    min-height: 786px;
  }
}
</style>