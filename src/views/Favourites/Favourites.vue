<template>
  <div class="Favourites" v-if="!favourites.length">
    <div class="empty">
      <img :src="emptyImg" alt="No image" width="500" height="365">
      <h1>Список избранного пуст</h1>
      <p>Добавляйте изображения, нажимая на звёздочку</p>
    </div>
  </div>
  <div class="Favourites" v-else>
    <ul>
      <images-list :images="favourites" :is-title-show="true"/>
    </ul>
  </div>
</template>

<script>
import ImagesList from "@/components/ImagesList";
import EmptyImg from "@/assets/favourites_empty.png";

export default {
  name: "Favourites",
  components: {ImagesList},
  data() {
    return {
      favourites: this.$store.state.favourites,
      emptyImg: EmptyImg
    }
  },
  watch: {
    '$store.state.favourites'() {
      this.favourites = this.$store.state.favourites;
    }
  },
}
</script>

<style lang="less" scoped>
.Favourites {
  flex-grow: 1;
  display: grid;

  .empty {
    margin: auto;
    text-align: center;

    p {
      font-size: 28px;
    }
  }
}
</style>
