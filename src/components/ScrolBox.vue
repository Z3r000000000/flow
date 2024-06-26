<template>
      <div id="content">
      <div style="height: 10vh;"></div>
      <!-- Adding enough height to scroll -->
      <div id="scrolling-box"><p style="color: black;">{{ counterText }}</p></div>
    </div>
</template>

<script>
export default {
  name: 'ScrollingBox',
  data() {
    return {
      isVisible: false,
      counter: 0,
      counterText: ''
    }
  },
  mounted() {
    this.scrollingBoxPosition = this.$el.getBoundingClientRect().top + window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > this.scrollingBoxPosition - window.innerHeight) {
        this.isVisible = true;
        this.startCounter();
      } else {
        this.isVisible = false;
      }
    },
    startCounter() {
      this.counterInterval = setInterval(() => {
        this.counter++;
        this.counterText = `У нас более: ${this.counter} клиентов`;
        if (this.counter === 10000) {
          this.counter = 9999;
        }
      });
    }
  }
}
</script>

<style scoped>
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
      #scrolling-box>p{
        font-size: 2.1rem;
      }
</style>