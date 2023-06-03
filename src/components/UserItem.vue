<template>
  <li class="list-item" :class="isActive ? 'active' : ''" @click="LinkClick">
    <p>
      <link-marker :classList="isActive ? 'open' : ''"/>
      {{ user.name }}
    </p>
    <ul class="list-album" v-if="userAlbums">
      <album-item v-for="album of userAlbums" :album="album" :key="album.id"/>
    </ul>
  </li>
</template>

<script>
import LinkMarker from "@/components/LinkMarker";
import {getUserAlbums} from "@/api/api";
import AlbumItem from "@/components/AlbumItem";

export default {
  name: "UserItem",
  components: {AlbumItem, LinkMarker},
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActive: false,
      userAlbums: null,
    }
  },
  methods: {
    LinkClick() {
      this.isActive = !this.isActive
      if (this.isActive) {
        getUserAlbums(this.user.id).then(response => {
          this.userAlbums = response.data;
        }).catch(err => console.log(err));
      } else {
        this.userAlbums = null;
      }
    }
  }
}
</script>

<style lang="less">
.list-item {
  list-style: none;

  p {
    padding: 30px 60px;
      display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;

    &:hover {
      background-color: #eef9ff;
    }
  }

  .list-album {
    flex: 1 0 100%
  }
}

.list-album {
  margin-left: 50px;
}
</style>
