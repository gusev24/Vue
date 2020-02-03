<template>
  <div class="container">
    <button @click="getUsers({'a':'lol'})">OK</button>
    <div class="user-filters">
      <input-counter />
      <filter-gender />
    </div>
    <div class="user-cards">
      <user-card v-for="user in usersData" :key="user.id.value" :item="user" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import UserCard from '~/components/user-card.vue'
import InputCounter from '~/components/input-counter.vue'
import FilterGender from '~/components/filter-gender.vue'

export default {
  components: {
    UserCard,
    InputCounter,
    FilterGender
  },
  computed: {
    usersData () {
      return this.$store.getters.getUsers
    }
  },
  methods: {
    getUsers (data) {
      this.$store.commit('setUsers', data)
    }
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get('https://randomuser.me/api/?results=20')
    store.commit('setUsers', data)
  }
}
</script>

<style lang="scss">
.container {
  background: #f9f9f9;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .user-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .user-filters {
    width: 720px;
    border: 2px solid cadetblue;
    padding: 20px 0;
  }
}

</style>
