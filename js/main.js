/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var btn = document.querySelector(".dropbtn");
btn.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let svgg = {
  template: `<svg width="48px" height="48px" viewBox="-5 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1783.000000, -158.000000)" fill="#0980c4" fill-rule="nonzero">
          <g id="1" transform="translate(1350.000000, 120.000000)">
              <path d="M436.453517,38.569249 L447.302459,48.9938158 L447.39261,49.0748802 C447.75534,49.423454 447.968159,49.8870461 448,50.4382227 L447.998135,50.6228229 C447.968159,51.1129539 447.75534,51.576546 447.333675,51.9774469 L447.339095,51.9689832 L436.453517,62.430751 C435.663694,63.1897497 434.399001,63.1897497 433.609178,62.430751 C432.796941,61.650213 432.796941,60.3675924 433.609432,59.5868106 L443.012324,50.5572471 L433.609178,41.4129456 C432.796941,40.6324076 432.796941,39.349787 433.609178,38.569249 C434.399001,37.8102503 435.663694,37.8102503 436.453517,38.569249 Z" id="right"></path>
          </g>
      </g>
  </g>
  </svg>`
}
let svgl = {
  template: `<svg width="48px" height="48px" viewBox="-5 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1913.000000, -158.000000)" fill="#0980c4" fill-rule="nonzero">
          <g id="1" transform="translate(1350.000000, 120.000000)">
              <path d="M566.453517,38.569249 L577.302459,48.9938158 L577.39261,49.0748802 C577.75534,49.423454 577.968159,49.8870461 578,50.4382227 L577.998135,50.6228229 C577.968159,51.1129539 577.75534,51.576546 577.333675,51.9774469 L577.339095,51.9689832 L566.453517,62.430751 C565.663694,63.1897497 564.399001,63.1897497 563.609178,62.430751 C562.796941,61.650213 562.796941,60.3675924 563.609432,59.5868106 L573.012324,50.5572471 L563.609178,41.4129456 C562.796941,40.6324076 562.796941,39.349787 563.609178,38.569249 C564.399001,37.8102503 565.663694,37.8102503 566.453517,38.569249 Z" id="left" transform="translate(570.500000, 50.500000) scale(-1, 1) translate(-570.500000, -50.500000) "></path>
          </g>
      </g>
  </g>
</svg>`
}

let img = {

  data() {
    return {
      id: 1,
      img: "image1",
      h3: "Разработка мобильных приложений",
      p: " Создаем уникальные приложения для крупного и среднего бизнеса,интегрированные с вашими IT-системами.iOS/Android/Кроссплатформа"
    }
  },

  template: `
  <div :id="img" class="img">
  <div class="services_item">
    <h3>{{ h3 }}</h3>
    <p>
     {{ p }}
    </p>
  </div>
</div>
<div @click="left()" class="left">
<svg width="48px" height="48px" viewBox="-5 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1913.000000, -158.000000)" fill="#1C1C1F" fill-rule="nonzero">
            <g id="1" transform="translate(1350.000000, 120.000000)">
                <path d="M566.453517,38.569249 L577.302459,48.9938158 L577.39261,49.0748802 C577.75534,49.423454 577.968159,49.8870461 578,50.4382227 L577.998135,50.6228229 C577.968159,51.1129539 577.75534,51.576546 577.333675,51.9774469 L577.339095,51.9689832 L566.453517,62.430751 C565.663694,63.1897497 564.399001,63.1897497 563.609178,62.430751 C562.796941,61.650213 562.796941,60.3675924 563.609432,59.5868106 L573.012324,50.5572471 L563.609178,41.4129456 C562.796941,40.6324076 562.796941,39.349787 563.609178,38.569249 C564.399001,37.8102503 565.663694,37.8102503 566.453517,38.569249 Z" id="left" transform="translate(570.500000, 50.500000) scale(-1, 1) translate(-570.500000, -50.500000) "></path>
            </g>
        </g>
    </g>
</svg>

</div>
<div @click="right()" class="right"><svg width="48px" height="48px" viewBox="-5 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1783.000000, -158.000000)" fill="#1C1C1F" fill-rule="nonzero">
        <g id="1" transform="translate(1350.000000, 120.000000)">
            <path d="M436.453517,38.569249 L447.302459,48.9938158 L447.39261,49.0748802 C447.75534,49.423454 447.968159,49.8870461 448,50.4382227 L447.998135,50.6228229 C447.968159,51.1129539 447.75534,51.576546 447.333675,51.9774469 L447.339095,51.9689832 L436.453517,62.430751 C435.663694,63.1897497 434.399001,63.1897497 433.609178,62.430751 C432.796941,61.650213 432.796941,60.3675924 433.609432,59.5868106 L443.012324,50.5572471 L433.609178,41.4129456 C432.796941,40.6324076 432.796941,39.349787 433.609178,38.569249 C434.399001,37.8102503 435.663694,37.8102503 436.453517,38.569249 Z" id="right"></path>
        </g>
    </g>
</g>
</svg></div>
<div class="dots">
    <div class="dot a1"></div>
    <div class="dot a2"></div>
    <div class="dot a3"></div>
    <div class="dot a4"></div>
    <div class="dot a5"></div>
</div>


  `,
  methods: {
    right(){

      if(this.id == 1){
      this.img = "image2"
      this.h3 = `Поддержка и развитие мобильных приложений`
      this.p  = `Оптимизируем мобильные продукты под обновления iOS и Android и
      новые устройства. Развиваем функционал приложения согласно
      требованиям заказчика, отвечаем на вопросы пользователей`
      this.id = this.id + 1    
      }
      else if(this.id == 2){
        this.img = "image3"
        this.h3 = "Веб-приложения и сайты"
        this.p = ` Разрабатываем Web-приложения и сайты с широким функционалом и
        сложными интеграциями.`
        this.id = this.id + 1
      }
      else if(this.id ==3 ){
        this.img = "image4"
        this.h3 = `Дизайн и проектирование`
        this.p = `    UI/UX дизайн. Создаем и улучшаем дизайн мобильных и web –
        приложений, сайтов, сервисов.`
        this.id = this.id + 1
      }
      else if (this.id == 4){
        this.img = "image5"
        this.h3 = `Консультации`
        this.p = `                    Мы проводим аудит программной архитектуры и кода; консалтинг
        по организации процесса разработки.`
        this.id = this.id + 1
      }
      else if (this.id == 5){
        this.img = "image1"
        this.h3 = `Разработка мобильных приложений`
        this.p = `Создаем уникальные приложения для крупного и среднего бизнеса,
        интегрированные с вашими IT-системами.
        iOS/Android/Кроссплатформа`
        this.id = 1
      }
    },
    left(){
      if(this.id == 4){
        this.img = "image2"
        this.h3 = `Поддержка и развитие мобильных приложений`
        this.p  = `Оптимизируем мобильные продукты под обновления iOS и Android и
        новые устройства. Развиваем функционал приложения согласно
        требованиям заказчика, отвечаем на вопросы пользователей`
        this.id = this.id + 1
        }
        else if(this.id == 3){
          this.img = "image3"
          this.h3 = "Веб-приложения и сайты"
          this.p = ` Разрабатываем Web-приложения и сайты с широким функционалом и
          сложными интеграциями.`
          this.id = this.id + 1
        }
        else if(this.id == 2){
          this.img = "image4"
          this.h3 = `Дизайн и проектирование`
          this.p = `    UI/UX дизайн. Создаем и улучшаем дизайн мобильных и web –
          приложений, сайтов, сервисов.`
          this.id = this.id + 1
        }
        else if (this.id == 1){
          this.img = "image5"
          this.h3 = `Консультации`
          this.p = `                    Мы проводим аудит программной архитектуры и кода; консалтинг
          по организации процесса разработки.`
          this.id = 2
        }
        else if (this.id == 5){
          this.img = "image1"
          this.h3 = `Разработка мобильных приложений`
          this.p = `Создаем уникальные приложения для крупного и среднего бизнеса,
          интегрированные с вашими IT-системами.
          iOS/Android/Кроссплатформа`
          this.id =  1
        }
    }
  }
}


const iagroup = Vue.createApp({
  data() {
    return {
      twotr: false,
      threetr : false,
      fourtr : false,
      onetr : false
    }
  },
  methods: {
    btnback(){
      console.log("Sucses")
      }
    },
  components: {
    "image1": img,
    "svgr": svgg,
    "svgl": svgl,
  }
}).mount("#iagroup")

