<template>
  <li class="list-item" :class="isActive ? 'active' : ''">
    <p @click.stop.prevent="LinkClick">
      <link-marker :classList="isActive ? 'open' : ''"/>
      {{ album.title }}
    </p>
    <images-list v-if="images" :images="images"/>
  </li>
</template>

<script>
import LinkMarker from "@/components/LinkMarker";
import {getAlbumImg} from "@/api/api";
import ImagesList from "@/components/ImagesList";

export default {
  name: "AlbumItem",
  components: {ImagesList, LinkMarker},
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActive: false,
      images: null,
    }
  },
  methods: {
    LinkClick() {
      this.isActive = !this.isActive
      if (this.isActive) {
        getAlbumImg(this.album.id).then(response => {
          this.images = response.data;
        }).catch(err => console.log(err));
      } else {
        this.images = null;
      }
    }
  }
}
</script>
