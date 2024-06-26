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
    <h2 class="custom-font">Компания «НК Сервис» предоставляет спецтехнику в аренду по Красноярску,строительным организациям и частным лицам.</h2>
    <p class="custom-font">Не всегда есть возможность и необходимость иметь свою технику. Иногда гораздо предпочтительнее воспользоваться услугами сторонней спецтехники. Особенно это выгодно при производстве разовых работ, тем более, если они являются непрофильными. Вся техника, представленная на нашем сайте действительно есть в наличии и именно эта техника выполняет все работы! В нашем парке более 10 единиц миниспецтехники, таких как:  погрузчики Bobcat, миниэкскаваторы, виброкатки, эвакуаторы и пр. Каждая единица спецтехники оснащается необходимым навесным оборудованием, а в общем объеме мы выполняем более 100 вариантов различных видов механизированных строительных работ. Воспользовавшись услугами нашей строительной техники, вы существенно можете сократить свои расходы на проведение работ, так как мы действительно являемся профессионалами в этой сфере!</p>
  </div>

  <div class="block">
    <h2 class="custom-font">Мини-экскаваторы и мини-погрузчики могут работать в любых труднодоступных местах, 
          где использование других видов спецтехники невозможно.</h2>
    <p class="custom-font">Перечень работ в которых наша техника окажется незаменимым помощником очень большой.
      <br> - строительство и ремонт дорог, в том числе ямочный ремонт;
      <br> - демонтаж строений, зданий, перегородок;
      <br> - выравнивание и планировка участков любой сложности;
      <br> - озеленение и благоустройство территорий;
      <br> - копка траншей под воду, кабель и пр.;
      <br> - бурение отверстий под столбы, сваи, заборы и пр. Ямобур доступен как на базе минипогрузчика, так и на базе миниэкскаватора.
      <br>
      </p>
      <p class="red-text">В зависимости от поставленной задачи, исходя из нашего многолетнего опыта, мы можем предложить вам более походящий вариант выполнения работ.</p>
  </div>
</div>

<div class="photo-container">
  <img src="../imege/most.jpg" alt="Левая фотография">
  <img src="../imege/most2.jpg" alt="Правая фотография">
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
  
.nav{
  padding: 10px 0;
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

   p {
    width: 100%;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.2rem;
    text-align: right; 
    text-align: justify; 
    max-width: 1000px; 
    margin: 0 auto; 
    margin-bottom: 50px;
    
    
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

  .red-text {
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
  
  
  .block {
    width: 100%;
    
    background-color: #f9f9f9;
    padding: 10px;
    
  }

 


h1.company-heading {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
   
}



h2.custom-font {
    font-family: 'Montserrat-SemiBold', sans-serif;
    
    margin-top: 15px;
}



p.custom-font {
    font-family: 'Montserrat-Light', sans-serif;
   
    margin-top: 15px;
}


.container {
    display: flex;
    justify-content: center; 
  }
  
  .photo-container {
    display: flex;
    justify-content: center; 
    margin-bottom: 100px;
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

</style>
