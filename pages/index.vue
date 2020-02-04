<template>
  <div class="container">
    <div class="user-filters">
      <input-counter @counter="onCounter" />
      <filter-gender @gender="onGender" />
    </div>
    <div class="user-cards">
      <user-card v-for="user in usersData" :key="user.login.uuid" :item="user" />
    </div>
    <button @click="downloadMore(10)" class="download-more">
      Download more +10
    </button>
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
  data () {
    return {
      countValue: 20,
      gender: 'any'
    }
  },
  computed: {
    usersData () {
      return this.$store.getters.getUsers
    }
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get(`https://randomuser.me/api/?results=20`)
    store.commit('setUsers', data)
  },
  methods: {
    async getUsers () {
      const queryParam = this.getQueryByGender(this.gender)
      const url = `https://randomuser.me/api/?results=${this.countValue}` + queryParam
      const { data } = await axios.get(url)
      this.$store.commit('setUsers', data)
    },
    getQueryByGender () {
      if (this.gender && this.gender !== 'any') {
        return `&gender=${this.gender}`
      } else {
        return ''
      }
    },
    onGender (data) {
      if (data) {
        this.gender = data.genderFilter
        this.getUsers()
      }
    },
    onCounter (data) {
      if (data) {
        this.countValue = +data.cardsCounter
        this.getUsers()
      }
    },
    downloadMore (count) {
      this.countValue += count
      this.getUsers()
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
  .download-more {
    padding: 20px;
    background: #f9f9f9;
    color: #83ba43;
    font-weight: 600;
    font-size: 16px;
  }
}

</style>
