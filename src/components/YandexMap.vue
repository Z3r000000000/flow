<template>
  <div id="map" style="width: 100%; height: 400px;">
    <yandex-map
      :mapId="mapId"
      :coords="coords"
      :zoom="zoom"
    />
  </div>
</template>

<script>
import { YandexMap } from 'vue-yandex-maps'

export default {
  name: 'YandexMap',
  components: {
    YandexMap
  },
  props: {
    mapId: {
      type: String,
      required: true
    },
    coords: {
      type: Array,
      required: true,
      default: () => [55.751574, 37.573856]
    },
    zoom: {
      type: Number,
      default: 10
    }
  },
}
</script>