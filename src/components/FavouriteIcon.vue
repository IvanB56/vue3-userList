<template>
<span class="star" @click.stop="addToFavourites">
        <img :src="favouriteImg" alt="Star" width="20" height="20">
      </span>
</template>

<script>
import star from "@/assets/star-svgrepo-com.svg";
import star_orange from "@/assets/star-svgrepo-com_orange.svg";
import {addFavourite, getFavourites, removeFavourite} from "@/utils/withStorage";

export default {
  name: "FavouriteIcon",
  props: ['imgData'],
  data() {
    return {
      favouriteImg: false,
      isFavourite: false,
    }
  },
  watch: {
    isFavourite(value) {
      this.favouriteImg = value ? star_orange : star;
    }
  },
  methods: {
    addToFavourites() {
      if (!this.isFavourite) {
        addFavourite(this.imgData);
      } else {
        removeFavourite(this.imgData);
      }
      this.$store.commit('updateFavorites', getFavourites())
      this.favouriteImg = this.isFavourite ? star_orange : star;
      this.isFavourite = !this.isFavourite;
    }
  },
  mounted() {
    const favouritesFromStorage = getFavourites();
    this.isFavourite = favouritesFromStorage && favouritesFromStorage.find(item => item.url === this.imgData.url)
  }
}
</script>

<style lang="less" scoped>
.star {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  right: 10px;
  top: 10px;
  display: grid;
  cursor: pointer;

  img {
    margin: auto;
  }
}
</style>
