<template>
  <div class="popup-img" @click.stop.prevent="$store.commit('setBigImageSrc', '')">
    <img :src="src" alt="" width="600" height="600">
  </div>
</template>

<script>
export default {
  name: "PopupImage",
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.popup-img {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;

  img {
    margin: auto;
  }
}
</style>
