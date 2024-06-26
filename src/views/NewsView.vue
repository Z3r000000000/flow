<script setup>
import Header from "../components/Header.vue"
  import ImageCollage from '../components/ImageCollage.vue';
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
    <h3 class="custom-font">В данном разделе представлена информация о объектах и видах работ которые мы уже выполняли. Возможно, здесь вы найдете виды работ похожие на те, что необходимо выполнить у вас на объекте</h3>

  </div>

  <div class="collage">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <img class="main-image" src="../imege/1п.jpg" alt="Основная фотография">
        <div class="thumbnails">
          <img class="thumbnail" src="../imege/1п.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/2п.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/3п.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/4п.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        </div>
      </div>
      <div class="container-1">
        <h1>Копаем траншею под укладку кабеля</h1>
        <p>Копаем траншею под укладку кабеля в узком проезде.
          <br> С обратной засыпкой и планировкой.
          <br>
        </p>

      </div>

    </div>
  </div>

  <div class="collage">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <img class="main-image" src="../imege/1р.jpg" alt="Основная фотография">
        <div class="thumbnails">
          <img class="thumbnail" src="../imege/1р.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/2р.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/3р.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/4р.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        </div>
      </div>
      <div class="container-1">
        <h1>Реконструкция пешеходного перехода
                  </h1>
        <p>Реконструкция пешеходного перехода на ост. Институт искусств. Произведен комплекс работ по демонтажу армированной бетонной подпорной стены и лестничного марша находящихся в аварийном состоянии с вывозом бетонного лома в отвал.
        </p>

      </div>

    </div>
  </div>

  <div class="collage">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <img class="main-image" src="../imege/2с.jpg" alt="Основная фотография">
        <div class="thumbnails">
          <img class="thumbnail" src="../imege/1с.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/2с.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/3с.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
          <img class="thumbnail" src="../imege/4с.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        </div>
      </div>
      <div class="container-2">
        <h1>Демонтаж надстройки Мелькомбината
                  </h1>
        <p>Демонтаж надстройки Мелькомбината. Работа на высоте 30 м. Выполнен комплекс работ по разрушению одноэтажной конструкции из бетона и кирпича с перекрытиями на основе бетонных ферм и демонтаж бетонной стяжки на высоте 30 м над силосами корпуса Мелькомбината.
        </p>

      </div>

    </div>
  </div>
</div>

<div class="collage">
  <div style="display: flex; justify-content: space-between;">
    <div>
      <img class="main-image" src="../imege/1у.jpg" alt="Основная фотография">
      <div class="thumbnails">
        <img class="thumbnail" src="../imege/1у.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/2у.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/3у.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/4у.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
      </div>
    </div>
    <div class="container-2">
      <h1>Снятие растительного грунта и планировка участка.
              </h1>
      <p>Снятие растительного грунта и планировка участка в п. Нанжуль-Солнечный. Были выполнены следующие работы:
        <br> 1. Снятие растительного грунта с транспортировкой в бурт.
        <br> 2. Вырезка существующего грунта с распределением под отметку и выполнением ступени.
        <br> 3. Планировка полученного основания с необходимыми уклонами.
        <br> 4. Уплотнение основания виброкатком.
        <br>
      </p>

    </div>

  </div>
</div>

<div class="collage">
  <div style="display: flex; justify-content: space-between;">
    <div>
      <img class="main-image" src="../imege/1о.jpg" alt="Основная фотография">
      <div class="thumbnails">
        <img class="thumbnail" src="../imege/1о.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/2о.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/3о.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/4о.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
      </div>
    </div>
    <div class="container-2">
      <h1>Монтаж винтовых свай в п. Подгорный
              </h1>
      <p>Монтаж винтовых свай в п. Подгорный миниэкскаватором Bobcat E45 с установленным вместо ковша гидровращателем. Технология: На подготовленную, спланированную под отметку или просто очищенную от снега площадку выносится привязка каждой сваи. Далее, если грунт промерзший (как в нашем случае), то бурится отверстие до талого грунта, летом в этом нет необходимости. И тем же механизмом в подготовленное отверстие закручивается свая до нужной отметки. Все. Сама свая закручивается за минуту, остальное - это подготовительные работы. В любом случае, такой фундамент можно организовать за один день. Основные моменты - это грунтовые условия, которые влияют на глубину установки сваи, но это уже забота проектировщиков.
      </p>

    </div>

  </div>
</div>

<div class="collage">
  <div style="display: flex; justify-content: space-between;">
    <div>
      <img class="main-image" src="../imege/1м.jpg" alt="Основная фотография">
      <div class="thumbnails">
        <img class="thumbnail" src="../imege/1м.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/2м.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/3м.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/4м.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
      </div>
    </div>
    <div class="container-2">
      <h1>Благоустройство по ул. Аэровокзальная
              </h1>
      <p>Благоустройство на объекте строительства по ул. Аэровокзальная. Проведен комплекс работ по расчистке территории, вертикальной планировке под отметку с требуемым уплотнением основания, отсыпкой, планировкой и укаткой щебеночного основания требуемой толщины с разуклонкой под водоотвод, установкой бордюрного камня и укладкой двух слоев асфальтобетонной смеси. В последствии было произведено устройство газонов
      </p>

    </div>

  </div>
</div>

<div class="collage">
  <div style="display: flex; justify-content: space-between;">
    <div>
      <img class="main-image" src="../imege/1д.jpg" alt="Основная фотография">
      <div class="thumbnails">
        <img class="thumbnail" src="../imege/1д.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/2д.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/3д.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/4д.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
      </div>
    </div>
    <div class="container-2">
      <h1>Реконструкция подъезда к разгрузочной площадке
              </h1>
      <p>Реконструкция подъезда к разгрузочной площадке г. Лесосибирск. Здесь были произведены следующие работы:
        <br> 1. Демонтаж существующих бордюрных камней и водоотводных лотков.
        <br> 2. Выравнивание поверхности под установку новых бордюров и копка траншеи под лотки.
        <br> 3. Установка бордюрных камней и водоотводных лотков с гидроизоляцией и бетонированием.
        <br> 4. Отсыпка и планировка подъезда щебнем под проектную отметку.
        <br> 5. Уплотнение щебеночного основания виброкатком.
        <br>
      </p>

    </div>

  </div>
</div>

<div class="collage">
  <div style="display: flex; justify-content: space-between;">
    <div>
      <img class="main-image" src="../imege/1л.jpg" alt="Основная фотография">
      <div class="thumbnails">
        <img class="thumbnail" src="../imege/1л.jpg" alt="Маленькая фотография 1" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/2л.jpg" alt="Маленькая фотография 2" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/3л.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
        <img class="thumbnail" src="../imege/4л.jpg" alt="Маленькая фотография 3" onclick="displayImage(this)">
      </div>
    </div>
    <div class="container-2">
      <h1>Работа на сносе кирпичного пятиэтажного здания
              </h1>
      <p>Работа на сносе кирпичного пятиэтажного здания на правом берегу г. Красноярска. Здесь производили поэтажную зачистку плит перекрытий погрузчиком Bobcat. Разрушали внутренние перегородки, половое покрытие, стяжку и несущие кирпичные стены по периметру.
      </p>

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
    font-family: 'Montserrat-Light', sans-serif;
    
  }
  
  @font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  h3.custom-font {
    font-family: 'Montserrat-SemiBold', sans-serif;
    font-weight: 600;
    margin-top: 15px;
}
.custom-font {
    width: 100%;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.2rem;
    text-align: right;
    text-align: justify;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 20px;
    font-family: 'Montserrat-Light', sans-serif;
}










@font-face {
    font-family: 'Montserrat';
     src: url('../hrift/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
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
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 50px auto; /* автоматическое выравнивание по горизонтали */
        width: 60%; /* ширина может быть любой, подберите под ваш макет */
        max-width: 1200px; /* максимальная ширина для центрирования */
    }
    
    
    

  .main-image {
      width: 415px;
      height: 300px;
      transition: transform 0.3s;
      
  }

  .thumbnails {
      display: flex;
  }

  .thumbnail {
      width: 100px;
      height: 80px;
      cursor: pointer;
      margin-right: 5px;
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

 

</style>