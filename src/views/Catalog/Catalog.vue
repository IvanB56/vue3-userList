<template>
  <div class="Catalog">
    <ul class="users-list">
      <user-item v-for="user of users" :user="user" :key="user.id"/>
    </ul>
  </div>
</template>

<script>
import {getUsers} from "@/api/api";
import UserItem from "@/components/UserItem";

export default {
  name: "Home",
  components: {UserItem},
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    getUsers().then(response => {
      this.users = response.data;
    }).catch(err => console.log(err));
  },
}
</script>

<style lang="less" scoped>
.users-list {
  font-size: 22px;
  font-weight: 500;
}
</style>
