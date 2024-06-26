<script setup>
  import Header from "../components/Header.vue"
</script>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      fetch('https://8962a1eb5edc700e.mokky.dev/items')
        .then(response => response.json())
        .then(data => {
          this.items = data;
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }
}
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
<div class="collage">
    <div v-for="(item, index) in items" :key="index" class="item-container">
      <div class="image-container">
        <img class="main-image" :src="item.images.length > 0 ? item.images[0].url : ''" :alt="item.title">
      </div>
      <div class="container-block">
        <h1>{{ item.title }}</h1>
        <div class="description-container">
          <p class="description">{{ item.description }}</p>
        </div>
        <p class="price">Цена: от {{ item.price }} р./час</p>
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
  
  .containre-block{
    display: flex;
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
  margin: 0 10px 0 0; 
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

  
  
  
  h1, h2, p {
    width: 100%;
    text-align: left;
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



h2.custom-font {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-weight: 600;
    margin-top: 15px;
    margin-left: 14px;
}

p.custom-font {
    font-family: 'Montserrat-Light', sans-serif;
    font-weight: 300;
    margin-top: 15px;
}


.container {
  text-align: right;
  width: 50%;
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
    margin-top: 0px;
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




    .collage {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 20px;
      margin-top: 50px;
      width: 100%;
      margin-bottom: 50px;
      
  }

  .main-image {
      width: 400px;
      height: 300px;
      transition: transform 0.3s;
      
  }

  .thumbnails {
      display: flex;
  }

  .thumbnail {
      width: 100px;
      height: auto;
      cursor: pointer;
      margin-right: 10px;
      transition: opacity 0.3s;
  }

  .product-info {
      margin-top: 20px;
  }

  .thumbnail:hover + .main-image {
      transform: scale(1.2);
  }

  .thumbnail:hover {
      opacity: 0.7;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
}

.price {
    color: orange;
}

.container-1 {
  text-align: right;
  width: 50%;
}

.container-2 {
  text-align: right;
  width: 50%;
}
.container-3 {
  text-align: right;
  width: 50%;
}

.thumbnail-nav-btn {
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.thumbnail {
  margin-right: 10px;
}

.collage {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item-container {
  display: flex;
  max-width: 1000px;
  justify-content: space-between;
  margin-bottom: 20px;
}

.image-container {
  margin-top: 5%;
  flex-basis: 40%;
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.container-block {
  flex-basis: 55%;
  width: 60%;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description-container {
  flex-grow: 1;
  overflow-y: auto;
}

.description {
  margin: 0;
  max-height: 200px; /* Устанавливаем максимальную высоту описания */
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
}
.price {
  font-weight: bold;
  color: #FF6302;
}

@media (max-width: 768px) {
  .item-container {
    flex-direction: column;
  }

  .image-container {
    flex-basis: auto;
    width: 100vh;
    height: 40vh;
  }

  .container-block {
    width: 100vh;
    height: 40vh;
  }
  .container-block>*{
    width: 100vh;
  }
}
</style>