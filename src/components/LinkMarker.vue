<template>
  <span class="marker" :class="classList"></span>
</template>

<script>
export default {
  name: "LinkMarker",
  props: ['classList']
}
</script>

<style lang="less" scoped>
.marker {
  width: 21px;
  height: 21px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #107dc0;
  margin-right: 10px;
  position: relative;
  display: inline-block;

  &::after {
    content: '+';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    line-height: 1;
    bottom: 0;
    text-align: center;
  }

  &.open {
    background-color: #ffae38;

    &::after {
      content: '\2013';
      margin-top: -2px;
    }
  }
}
</style>
