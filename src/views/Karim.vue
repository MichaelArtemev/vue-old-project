<template>
  <div class="master1">
     <div class="master1__content">
       <h1>
         Карим
       </h1>
       <img src="@/assets/images/content/masters/5.jpg" alt="">
       <p>
         Профессиональный мастер с высшим художественным образованием.
Специализируется на работах любой сложности. Работает во всех стилях и направлениях: традишинал, неотрадишинал, биомеханика, реализм, графика и многое другое. В татуировках уделяет особое внимание , композиционной слаженности, акцентировке отдельных элементов, цветовому контрасту.
С огромным удовольствием занимается своим творчеством и считает, что татуировка должна радовать сердце и душу человека. Постоянно совершенствуется в своем деле и уверен в том, что лучший способ достичь мастерства – это практика.  
       </p>
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
.master1{
  width: 100%;
  height: max-content;
  background-color: black;
}
.master1__content{
  h1{
    padding: 50px 30px;
  }
  img{
    margin: 0 auto;
  }
  p{
    margin-top: 50px;
    padding: 50px 30px;
    background-color: #ff3d58;
  }
}
</style>