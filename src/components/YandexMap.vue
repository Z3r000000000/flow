<template>
  <div ref="map" style="width: 100%; height: 400px"></div>
</template>

<script>
export default {
  name: 'YandexMap',
  props: {
    center: {
      type: Array,
      required: true,
    },
    zoom: {
      type: Number,
      default: 10,
    },
    markers: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new ymaps.Map(this.$refs.map, {
        center: this.center,
        zoom: this.zoom,
      });

      this.markers.forEach((marker) => {
        new ymaps.Placemark(marker.coordinates, {
          hintContent: marker.hintContent,
          balloonContent: marker.balloonContent,
        });
      });
    },
  },
  beforeMount() {
    this.loadYandexMapsScript();
  },
  methods: {
    loadYandexMapsScript() {
      if (!window.ymaps) {
        const script = document.createElement('script');
        script.src =
          'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A969ace31b8e0882058ee9ea5f0770b415b8cc15899bb570a8e5679e622121c30&amp;width=855&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
        script.async = true;
        script.onload = () => {
          ymaps.ready(this.initMap);
        };
        document.head.appendChild(script);
      } else {
        ymaps.ready(this.initMap);
      }
    },
  },
};
</script>