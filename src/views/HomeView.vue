<script setup>
import Header from "../components/Header.vue"
import Modal from "../components/ModalHead.vue";

</script>

<template>
<body>
  <Modal/>

  <Header/>

  <section class="carousel" aria-label="Gallery">
    <ol class="carousel__viewport">
      <li id="carousel__slide1" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper">
          <img src="../imege/банер2.png" alt="Slide 1">
          <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
          <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
        </div>
      </li>
      <li id="carousel__slide2" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper">
          <img src="../imege/181.png" alt="Slide 2">
        </div>
        <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
        <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
      </li>
      <li id="carousel__slide3" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper">
          <img src="../imege/банер3.png" alt="Slide 3">
        </div>
        <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
        <a href="#carousel__slide4" class="carousel__next">Go to next slide</a>
      </li>
      <li id="carousel__slide4" tabindex="0" class="carousel__slide">
        <div class="carousel__snapper">
          <img src="../imege/банер4.png" alt="Slide 4">
        </div>
        <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
        <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
      </li>
    </ol>
    <aside class="carousel__navigation">
      <ol class="carousel__navigation-list">
        <li class="carousel__navigation-item">
          <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide4" class="carousel__navigation-button">Go to slide 4</a>
        </li>
      </ol>
    </aside>
  </section>

  <div class="Zagolovok1">
    <h1 style="text-align: center; margin-top: 100px; margin-bottom: 50px;">Почему нужно выбрать нас?</h1>
  </div>

  <div class="center-block">
    <p>Индивидуальный подход, оперативное выполнение поставленных задач, профессиональные операторы. Договорные отношения приветствуются, любая форма оплаты, гибкая система скидок на оказание услуг!</p>
  </div>

  <div class="photos" id="photos">
    <div class="photo-item">
      <img src="../imege/double-tick.png" alt="">
      <p>Качественное обслуживание с опытными специалистами.</p>
    </div>

    <div class="photo-item">
      <img src="../imege/excavator.png" alt="">
      <p>Широкий выбор спецтехники для выполнения конкретной задачи</p>
    </div>

    <div class="photo-item">
      <img src="../imege/support-services.png" alt="">
      <p>Гарантия круглосуточной технической поддержки наших клиентов</p>
    </div>

    <div class="photo-item">
      <img src="../imege/professionalism.png" alt="">
      <p>Профессионализм персонала, готовых предоставить качественный сервис и решить любые задачи</p>
    </div>
  </div>

  <div class="Zagolovok1">
    <h1 style="text-align: center; margin-top: 100px; margin-bottom: 50px;">Наша техника</h1>
  </div>

  <div class="tehnika">
    <div class="photo">
      <img src="../imege/1.jpeg" alt="Photo 1">
      <p>Экскаватор колесный Hyundai R180W-9S</p>
    </div>
    <div class="photo">
      <img src="../imege/2.jpeg" alt="Photo 2">
      <p>Экскаватор-погрузчик NewHolland B115B</p>
    </div>
    <div class="photo">
      <img src="../imege/4.jpg" alt="Photo 3">
      <p>Универсальный погрузчик Bobcat S650</p>
    </div>
  </div>

  <div class="tehnika">
    <div class="photo">
      <img src="../imege/5.jpg" alt="Photo 1">
      <p>Миниэкскаватор Bobcat E45</p>
    </div>
    <div class="photo">
      <img src="../imege/6.png" alt="Photo 2">
      <p>Автоэвакуатор с манипулятором</p>
    </div>
    <div class="photo">
      <img src="../imege/7.jpg" alt="Photo 3">
      <p>Виброкаток дорожный комбинированный</p>
    </div>
  </div>

  <footer>
    <div class="footer">
      <div class="row">
        <a href="#"><img src="../imege/alfabank-icon-logotic.png" alt=""></a>
        <a href="#"><img src="../imege/visa.png" alt=""></a>
        <a href="#"><img src="../imege/master.png" alt=""></a>
        <a href="#"><img src="../imege/сбербанк.png" alt=""></a>
      </div>

      <div class="row">
        <ul>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Запчасти и ремонт</a></li>
          <li><a href="#">Техника</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>

      <div class="row">
        Компания «НК Сервис» предоставляет спецтехнику в аренду по Красноярску и краю строительным организациям и частным лицам.
      </div>
    </div>
  </footer>

</body>
</template>


<style scoped>
  @font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-Black.ttf') format('truetype');
  font-weight: 900;
}

@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-ExtraLight.ttf') format('truetype');
  font-weight: 200;
}

@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-Medium.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-Regular.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-SemiBold.ttf') format('truetype');
  font-weight: 600;
}


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 600px;
  background-color: rgba(24, 33, 160, 0.038);
}

header {
  background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
  text-align: center;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  color: #FFF;
  text-shadow: 1px 1px 1px #333;
}

header .overlay {
  padding: 50px;
  background-image: linear-gradient(135deg, #070707 10%, #000000a4 100%);
}

.logo {
  position: absolute;
  top: 5px;
  left: 15px;
  max-width: 100px; /* Устанавливаем максимальную ширину логотипа */
}

h3, p {
  margin-top: 20px;
  font-size: 20px;
	margin-bottom: 30px;
 
    font-weight: 500px;
    font-family: 'Montserrat';
  src: url('hrift/Montserrat-Bold.ttf') format('truetype');
  
}


button {
  border: none;
  outline: none;
  padding: 15px 25px;
  border-radius: 30px;
  color: #333;
  background: #fff;
  margin-bottom: 50px;
  box-shadow: 0 3px 20px 0 #0000003b;
  font-family: 'Montserrat Black';
    src: url('hrift/Montserrat-Black.ttf') format('truetype');
  transition: all 0.3s ease; /* добавляем анимацию для всех свойств при изменении */
}

button:hover {
  cursor: pointer;
  transform: scale(1.1); /* увеличиваем размер при наведении */
  box-shadow: 0 6px 20px 0 #0000003b; /* меняем тень */
  color: #fff; 
  background: #555; 
}




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.container {
    max-width: 1050px;
    width: 90%;
    margin: auto;
    position: relative; 
    z-index: 1; 
}

 


form {
  margin-top: 20px;
  border-radius: 5em;
}

form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #2140cb;
  
  box-sizing: border-box;
  border-radius: 5em;
}

form button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #2140cb;
  color: #fff;
  cursor: pointer;
  border-radius: 5em;
  
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: none; 
}

.modal-content {
  position: relative;
  background-color: #fff;
  margin: 10% auto; 
  padding: 20px;
  max-width: 400px; 
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #000;
}




h2 {
  color: #262525;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
}


.nav {
  font-family: 'Montserrat', sans-serif; 
}

.nav h2 {
  font-weight: 500; 
}

.nav li {
  list-style: none; 
}

.nav a {
  text-decoration: none; 
  color: #333; 
}


.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2; 
  padding: 10px 0; 
}

.nav h2 {
  display: none; 
}

.nav ul {
  list-style: none; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%; 
}

.nav li {
  margin: 0 10px; 
  list-style-type: none; 
}

.nav li {
  margin: 0 10px; 
}

.nav a {
  text-decoration: none;
  color: #333; 
  padding: 10px; 
  border-radius: 5px; 
  transition: all 0.3s; 
}

.nav a:hover {
  background-color: #ddd; 
  color: #555;
}


@media screen and (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav ul {
    width: 100%;
    justify-content: flex-start;
  }

  .nav li {
    margin: 10px 0;
  }
}
.nav a {
  text-decoration: none;
  color: #333; 
  padding: 10px; 
  border-radius: 5px; 
  transition: all 0.3s; 
  background-color: transparent; 
}

.nav a:hover {
  background-color: #ddd; 
  color: #555; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); 
}

.nav a.active {
  background-color: #ccc; 
}


@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}



* {
  box-sizing: border-box;
  scrollbar-color: transparent transparent; 
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 55%;
  ;
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  
  background-attachment: fixed; 
  counter-increment: item;
}

.carousel__slide:nth-child(even) {
 
  background-attachment: fixed; 
}
.carousel__slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}


.carousel__slide img {
  width: 100%;
  
}




















.Zagolovok1 h1 {
  font-family: 'Montserrat Black', 'Montserrat', sans-serif; 
  
}






@font-face {
  font-family: 'Montserrat';
  src: url('hrift/Montserrat-Light.ttf') format('truetype');
  font-weight: 300; 
  font-style: normal; 
}

.center-block {
  text-align:center; 
  width: 70%; /* Ширина блока */
  margin: 0 auto; 
  font-family: 'Montserrat', sans-serif; 
}

.center-block p {
  text-align: justify; 
  font-family: 'Montserrat', sans-serif; 
}







#photos {
  font-family: 'Montserrat', sans-serif; /* Устанавливаем шрифт Montserrat для блока photos */
}
.photos {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%; /* Устанавливаем ширину блока */
  margin: 0 auto; /* Центрируем блок по горизонтали */
  
  
}

.photo img {
 width: 300px;
 height: 250px;
 border: 1px solid ccc;
 
} 

.hidden {
 opacity: 0;
}

.photos {
    text-align: center; /* Выравнивание фотографий по центру */
}

.photo-item {
  width: 300px; /* Устанавливаем ширину каждого элемента фотогалереи */
  margin-bottom: 20px; /* Отступ между фотографиями */
  
}

.photo-item img {
  width: 100%;
  height: 250px;
  border: 1px solid #f7f4f400;
  transition: box-shadow 0.3s; /* Добавляем плавный переход для свойства box-shadow */
}

.photo-item img:hover {
  box-shadow: 0 0 10px rgba(4, 69, 165, 0.5); /* Добавляем эффект подсветки при наведении курсора */
}

.photo-item p {
    text-align: center; /* Выравнивание текста под каждой фотографией по центру */
    font-family: 'Montserrat', sans-serif; /* Устанавливаем шрифт Montserrat для параграфов внутри photo-item */
}
  







.footer{
  background:#000;
  padding:30px 0px;
  font-family: 'Play', sans-serif;
  text-align:center;
  
  
  }
  
  .footer .row {
  width:100%;
  margin:1% 0%;
  padding:0.6% 0%;
  color:gray;
  font-size:0.8em;
  }
  
  .footer .row {
  text-decoration:none;
  color:gray;
  transition:0.5s;
  }
  
  .footer .row a:hover{
  color:#fff;
  }
  
  .footer .row ul{
  width:100%;
  }
  
  .footer .row ul li{
  display:inline-block;
  margin:0px 30px;
  }
  
  .footer .row a i{
  font-size:2em;
  margin:0% 1%;
  }
  
  @media (max-width:720px){
  .footer{
  text-align:left;
  padding:5%;
  }
  .footer .row ul li{
  display:block;
  margin:10px 0px;
  text-align:left;
  }
  .footer .row a i{
  margin:0% 3%;
  }
  }

  .footer .row a img {
    width: 50px; /* Задаем ширину изображений */
    height: auto; /* Подгоняем высоту автоматически */
    margin: 0 10px; /* Добавляем отступы вокруг изображений */
  }
  
  @media (max-width: 720px) {
    .footer .row a img {
      width: 40px; /* Изменяем ширину изображений для мобильных устройств */
      margin: 0 5px; /* Изменяем отступы вокруг изображений для мобильных устройств */
    }
  }

  .tehnika { 
    display: flex;
    justify-content: space-around;
    margin-top: 20px; 
    margin-bottom: 20px;
    
  }
  
  .tehnika .photo { 
    text-align: center;
    margin-bottom: 60px;
  }
  
  .tehnika .photo img { 
    border-radius: 13px;
  }
  
  .tehnika .photo p { 
    margin-top: 10px;
  }

</style>