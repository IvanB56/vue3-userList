<template>
  <div class="images">
    <div class="img" v-for="image of images" :key="image.id">
      <favourite-icon :imgData="image"/>
      <img
          :src="image['thumbnailUrl']"
          alt="thumbnailUrl"
          width="150"
          height="150"
          :title="image.title"
          loading="lazy"
          @click.stop.prevent="$store.commit('setBigImageSrc', image.url)"
      >
      <p class="img-title" v-if="isTitleShow">{{ image.title }}</p>
    </div>
  </div>
</template>

<script>
import FavouriteIcon from "@/components/FavouriteIcon";

export default {
  name: "ImagesList",
  components: {FavouriteIcon},
  props: {
    images: {
      type: Array,
      required: true
    },
    isTitleShow: {
      type: Boolean
    }
  }
}
</script>

<style lang="less" scoped>
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 80px;
  margin-left: 40px;

  .img {
    position: relative;
    line-height: 1;
    max-width: 150px;
  }

  .img-title {
    margin-top: 10px;
    color: #858585;
  }
}
</style>
