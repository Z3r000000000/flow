<script setup>
import Header from "../components/Header.vue"
</script>

<template>
  <body>
<header>
  <div class="overlay">

    <router-link to="/">
      <div class="logo"><img src="../imege/logo.png" accesskey="Логотп"></div>
    </router-link>

    <p1 class="telephone">+7 (391) 250-1662
      <br>+7 (391) 271-1662</p1>
  </div>
</header>

<Header/>

<div class="content">
  <div class="block">
    <h2 class="custom-font">Уважаемые партнеры!</h2>
    <p class="custom-font">Предлагаем воспользоваться услугами малогабаритной многофункциональной техники с различным навесным оборудованием для выполнения необходимых работ. Именно наша техника как никогда лучше подходит для работы на ограниченном пространстве и показывает высокую производительность не только в стесненных условиях.</p>
  </div>

  <div class="block">
    <h2 class="custom-font">Мы выполняем следующие виды работ:</h2>
    <p class="custom-font">Расчистка территорий от строительного и прочего мусора с погрузкой в автосамосвалы и вывозом в бурт или на хранилище ТБО. -Асфальтирование, благоустройство и планировочные работы любой сложности, в том числе и под отметку. -Устройство оснований под брусчатку или асфальт. Установка бордюрного камня.
      <br> -Устройство газонов, озеленение. -Комплексное устройство паркингов, стоянок, дворовых проездов, детских площадок и пр.
      <br> -Демонтаж строений, обрезка свай, разрушение асфальта, бетона любой сложности, в том числе внутри зданий.
      <br> -Уплотнение грунта, земляного полотна, оснований под асфальт, брусчатку и пр. Укатываем асфальтобетон: отмостки, тротуары, проезды, стоянки и пр.
      <br> -Уплотнение грунта в труднодоступных местах трамбовкой на базе гидромолота Bobcat, ручной виброплитой, виброкатком комбинированным.
      <br> -Бурение скважин под сваи, заборы, столбы и пр.
      <br> -Копка траншей под кабель, водопровод, канализацию. Прокладка коммуникаций.
      <br> -Устройство котлованов, подвалов, септиков любого объема, в том числе внутри зданий и пристроек с вывозом грунта автосамосвалами.
      <br> -Доставка сыпучих материалов: песок, щебень, ПГС, ПЩС, чернозем и пр.
      <br> -Услуги АВТОЭВАКУАТОРА грузоподъемностью до 5 т (сходни и лебедка).
      <br> Все работы выполняются опытным высококвалифицированным персоналом качественно и оперативно. Мы максимально заменяем ручной труд, но мы умеем работать руками. </p>
    <br>
    <p class="zvet">Мы не посредники, работаем только своей техникой, а значит с нами всегда можно договориться!</p>
  </div>
</div>

<div class="photo-container">
  <img src="../imege/us1.jpg" alt="Левая фотография">
  <img src="../imege/us2.jpg" alt="Правая фотография">
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
        <li><a href="kompania.html">О компании</a></li>
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
     src: url('../hrift/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Black.ttf') format('truetype');
    font-weight: 900;
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-ExtraLight.ttf') format('truetype');
    font-weight: 200;
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-SemiBold.ttf') format('truetype');
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
    left: 30px;
    max-width: 100px;
}

.telephone {
  float: right;
  margin-top: 0;
  margin-left: 10px; /* Обратите внимание, что важно исправить значение ширины "10 px" на "10px" без пробела */
  font-size: 20px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  margin-top: -40px;
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

  
  
  
  p {
    width: 100%;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.2rem;
    text-align: right; 
    text-align: justify; 
    max-width: 1000px; 
    margin: 0 auto; 
    margin-bottom: 20px;
    
    
  }

  h2 {

    width: 100%;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.8rem;
    text-align:right; 
    text-align: justify; 
    max-width: 1000px;
    margin: 0 auto; 
    margin-bottom: 50px;
    font-family: 'Montserrat', sans-serif;
    
    
  }

  
  .block {
    width: 100%;
    margin-top: 20px;
    background-color: #f9f9f9;
    padding: 10px;
  }


 


@font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
}

h1.company-heading {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-left: 20px;
}

@font-face {
    font-family: 'Montserrat-SemiBold';
     src: url('../hrift/Montserrat-SemiBold.ttfh') format('truetype');
    font-weight: 300;
}



h2.custom-font {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-weight: 600;
    margin-top: 15px;
}

p.custom-font {
    font-family: 'Montserrat-Light', sans-serif;
    font-weight: 300;
    margin-top: 15px;
}


.container {
    display: flex;
    justify-content: center; 
  }
  
  .photo-container {
    display: flex;
    justify-content: center; 
  }
  
  .photo-container img {
    margin: 10px;
    border-radius: 15px;
    width: 45%; 
    height: auto;
  }
  

  .footer {
    margin-top: 20px;
    background: #000;
    padding: 30px 0;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
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
      width: 50px; 
      height: auto; 
      margin: 0 10px; 
    }
    
    @media (max-width: 720px) {
      .footer .row a img {
        width: 40px; 
        margin: 0 5px; 
      }
    }

    .zvet{
      color: rgb(0, 0, 0);
      width: 100%;
      text-align: center;
      line-height: 2.4rem;
      font-size: 1.8rem;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align:right; 
      text-align: justify; 
      margin-bottom: 100px;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
    }
</style>