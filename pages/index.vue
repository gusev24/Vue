<template>
  <div class="container">
    <div class="user-filters">
      <input-counter />
      <filter-gender @gender="onGender" />
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
      console.log(123)
      return this.$store.getters.getUsers
    }
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get('https://randomuser.me/api/?results=20')
    store.commit('setUsers', data)
  },
  methods: {
    async getUsers (query) {
      let queryParam = ''
      if (query) {
        queryParam = `&${query}`
      }
      const url = `https://randomuser.me/api/?results=20` + queryParam
      const { data } = await axios.get(url)
      this.$store.commit('setUsers', data)
    },
    getUsersByGender (gender) {
      if (gender && gender !== 'any') {
        const queryParam = `gender=${gender}`
        this.getUsers(queryParam)
      } else {
        this.getUsers()
      }
    },
    onGender (data) {
      if (data) {
        this.getUsersByGender(data.genderFilter)
      }
    }
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
