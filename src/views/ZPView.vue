<script setup>
import Header from "../components/Header.vue"
import ScrollingBox from '../components/ScrolBox.vue'
</script>

<template>
  <body>

<header>
  <div class="overlay">

    <router-link to="/">
      <div class="logo"><img src="../imege/logo.png" accesskey="Логотп"></div>
    </router-link>

    <p class="telephone">+7 (391) 250-1662
      <br>+7 (391) 271-1662</p>
  </div>

</header>

<Header/>

<div class="content">
  <div class="block">
    <h2 class="custom-font">Уважаемые заказчики!</h2>
    <p class="custom-font">Если у вас есть техника Bobcat, то вы всегда можете обратиться к нам с вопросом связанным с эксплуатацией, сервисным обслуживанием или ремонтом техники. Мы можем оказать содействие в приобретении запасных частей или техники на более выгодных условиях.</p>
  </div>

  <div class="block">
    <h2 class="custom-font">Мы предлагаем широкий выбор запчастей Bobcat.</h2>

    <p class="custom-font">

      - Фильтр
      <br> - Гидравлика
      <br> - Шины, диски
      <br> - Двигатель
      <br> - Навесное оборудование
      <br> - Электрика, датчики, фары и др.
      <br>

    </p>
  </div>

  <scrolling-box />

    <div class="container1">
      <div class="image">
        <img src="../imege/service.png" alt="Your Image">
      </div>
      <div class="text">
        <p>Мы продаем только оригинальные запасные части на минипогрузчики и миниэксаваторы Бобкет, происхождение которых подтверждено прямыми контрактами с производителем, российскими сертификатами соответствия, а также таможенными декларациями и бухгалтерскими документами.</p>
      </div>
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
            <li><a href="kompania.html">О компании</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Запчасти и ремонт</a></li>
            <li><a href="#">Техника</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>

        <div class="row rbt">
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
    background-color: rgba(255, 255, 255, 0.038);
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

  
  
  .custom-font {
    width: 100%;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.2rem;
    text-align: right; /* Здесь можно указать нужный вам стиль */
    text-align: justify; 
    max-width: 1000px; 
    margin: 0 auto; 
    margin-bottom: 20px;
    font-family: 'Montserrat-Light', sans-serif;
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



  

.footer {
    margin: 0;
    margin-top: 100px;
    background: #000;
    padding: 30px 0;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
  
  .footer .row {
    width: 100%;
    padding: 0.6% 0;
    color: gray;
    font-size: 0.8em;
    margin: 0;
    text-decoration: none;
    transition: 0.5s;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .footer .row a:hover {
    color: #fff;
  }
  
  .footer .row ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer .row ul li {
    display: inline-block;
    margin: 10px;
  }
  
  .footer .row a i {
    font-size: 2em;
    margin: 0 5px;
  }
  
  @media (max-width: 720px) {
    .footer {
      text-align: left;
      padding: 5%;
    }
  
    .footer .row {
      justify-content: flex-start;
    }
  
    .footer .row ul li {
      display: block;
      margin: 10px 0;
      text-align: left;
    }
  
    .footer .row a i {
      margin: 0 3px;
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


    @font-face {
        font-family: 'Montserrat-SemiBold';
         src: url('../hrift/Montserrat-Bold.ttf') format('truetype');
        font-weight: 300;
    }
   
    #content {
        display: flex;
        justify-content: center;
        height: 30vh; /* Обязательно задайте высоту или использование flexbox может не сработать */
      }
      
      #scrolling-box {
        background-color: rgba(226, 226, 32, 0.937);
        color: black;
        text-align: center;
        padding: 30px;
        width: 1300px;
        height: 120px;
        display: flex; /* Добавляем flex для центрирования по вертикали и горизонтали */
        justify-content: center; /* Центрируем по горизонтали */
        align-items: center; /* Центрируем по вертикали */
        font-size: 2.1rem;
        font-family: 'Montserrat-SemiBold';
        
      }
      
      

      .container1 {
        width: 800px;
        margin: 0 auto;
        overflow: hidden; /* Чтобы предотвратить перекрытие текста картинкой */
      }
    
      .image {
        float: left; /* Выравнивание картинки слева */
        
        
      }
    
      .text {
        float: right; /* Выравнивание текста справа */
        width: calc(100% - 200px); /* Ширина текста (600px - ширина картинки) */
        padding-left: 20px; /* Отступ слева для текста */
        font-family: 'Montserrat-Light', sans-serif;
    font-weight: 500px;
    margin-top: 15px;
      }
    
      .image img {
        max-width: 100%; /* Чтобы изображение подстраивалось под ширину блока */
        height: auto; /* Автоматическая высота */
      }
</style>