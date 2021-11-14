<template>
  <div class="Contacts">
    <h1>КОНТАКТЫ</h1>
    <div class="contacts-road">
     <a href="/"><p>Главная</p></a>  > <p>Контакты</p>
    </div>
    <div class="contacts-info">
      <div class="contacts-info__row">
        <div class="contacts-info__h2"><h2>Адресс</h2></div>
        <div class="contacts-info__p"><p>г.Москва Краснобогатырская 42 с.16</p></div>
      </div>
      <div class="contacts-info__row">
        <div class="contacts-info__h2"><h2>Время работы</h2></div>
        <div class="contacts-info__p"><p>г.Москва Краснобогатырская 42 с.16</p></div>
      </div>
      <div class="contacts-info__row">
        <div class="contacts-info__h2"><h2>Телефон</h2></div>
        <div class="contacts-info__p"><p>7 (495) 619-12-19</p></div>
      </div>
      <div class="contacts-info__row">
        <div class="contacts-info__h2"><h2>WhatsApp</h2></div>
        <div class="contacts-info__p"><p>+7 (495) 167 70 43</p></div>
      </div>
      <div class="contacts-info__row">
        <div class="contacts-info__h2"><h2>Email</h2></div>
        <div class="contacts-info__p"><p>info@rikkitikki.ru</p></div>
      </div>
    </div>
    <div class="contacts-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.1401128182824!2d37.70148691613675!3d55.80816789518768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535ae7c86ec75%3A0xdf46f979af168134!2z0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C7LiwgNDIg0YHRgtGA0L7QtdC90LjQtSAxNiwg0JzQvtGB0LrQstCwLCBNb3Njb3cgT2JsYXN0LCAxMDc1NjQ!5e0!3m2!1sru!2sru!4v1608127253538!5m2!1sru!2sru" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <foot/>
  </div>
</template>

<script>
import foot from '@/componentsStorage/foot/foot.vue'

export default {
  components: { foot },
  name: "Contacts",
  comments:{
    foot
  },
  data () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
#app{
  background-color: black !important;
}
.Contacts {
  padding-top: 50px;
  background-color:none;
}
.contacts-road {
  display: flex;
  justify-content: center;
  
  p{
    margin: 0px 20px;
    cursor: pointer;
  }
}
.contacts-info {

    // .contacts-info__row
    margin: 50px;

		&__row {
      display: flex;
      align-content: center;
      align-items: center;
		}

		// .contacts-info__h2

		&__h2 {
      color:#ff3d58;
		}

		// .contacts-info__p

		&__p {
      margin-left: 40px;
		}
}
.contacts-map {
      margin-bottom: -157px;
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
.contacts-road{
  position: relative;
}

</style>