<template>
  <div class="booking"> 
    <div class="booking__content">
      <h1>ЗАПИСЬ</h1>
      <h3>Введите номер телефона</h3>
      <input type="phone" v-model="phone">
      <h3>Или email</h3>
      <input type="email" v-model="email">
      <br>
      <br>
      <button class="btn" @click="getAlert">Отправить</button>
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
    

    return {
      phone: "",
      email: ""
    }
  },
  methods:{
    getAlert(){
      if( this.phone === '' && this.email === ''){
        alert('Заполните поля')
      }else{
        alert('данные отправлены')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.booking__content{
  padding-top: 150px;
}
.booking{
  width: 100%;
  height: max-content;
  background-color: black;
}
</style>