<template>
  <navbar/>
  <router-view/>
  <popup-image v-if="$store.state.bigImageSrc !== ''"  :src="$store.state.bigImageSrc"/>
</template>

<script>
import Navbar from "@/components/Navbar";
import PopupImage from "@/components/PopupImage";

export default {
  components: {PopupImage, Navbar}
}
</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

html, body {
  height: 100%;
}

body {
  background-color: #e5eff8;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

#app {
  background-color: #fff;
  max-width: 991px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  #app {
    margin: 0;
  }
}
</style>
