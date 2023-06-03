<template>
  <nav class="navigation">
    <router-link to="/" class="navigation__item" :active-class="'active'">Каталог</router-link>
    <router-link to="/favourites" class="navigation__item" :active-class="'active'">
     <span class="star">&#9734;</span> Избранное
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      imgSrc: 'src/assets/star-regular.svg'
    }
  }
}
</script>

<style lang="less" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5eff8;

  &__item {
    flex: 1 1 50%;
    text-align: center;
    border-radius: 10px 10px 0 0;
    padding: 20px;
    background-color: #f2f7fb;
    text-decoration: none;
    font-size: 18px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &:hover {
      color: inherit;
    }

    &.active {
      background-color: #fff;
    }

    .star  {
      font-size: 22px;
      line-height: 1;
    }
  }
}
</style>
