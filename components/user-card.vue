<template>
  <div @click="alertUserData(`My email is ${userData.email}. Gender is ${userData.gender}. Age is ${userData.age}`)" class="user-card">
    <div class="user-card__details">
      <div class="user-photo">
        <img :src="userData.img" alt="">
      </div>
      <div class="user-title">
        {{ userDataTitles[userDataType] }}
      </div>
      <div class="user-value">
        {{ userData[userDataType] }}
      </div>
    </div>
    <ul class="user-card__values">
      <li @mouseover="changeUserTitle('name')" v-bind:class="{ active: userDataType == 'name' }" class="user-card__values--name" />
      <li @mouseover="changeUserTitle('email')" v-bind:class="{ active: userDataType == 'email' }" class="user-card__values--email" />
      <li @mouseover="changeUserTitle('date')" v-bind:class="{ active: userDataType == 'date' }" class="user-card__values--date" />
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      userData: {
        name: this.item.name.first + ' ' + this.item.name.last,
        email: this.item.email,
        date: this.dateFormat(this.item.dob.date),
        img: this.item.picture.large,
        age: this.item.dob.age,
        gender: this.item.gender
      },
      userDataTitles: {
        name: 'Hi, My name is',
        email: 'My email address is',
        date: 'My birthday is'
      },
      userDataType: 'name'
    }
  },
  methods: {
    changeUserTitle (type) { this.userDataType = type },
    dateFormat (date) { return moment(date).format('DD/MM/YYYY') },
    alertUserData (message) { alert(message) }
  }
}

</script>

<style lang="scss">
.user-card {
  width: 720px;
  position: relative;
  padding: 20px 0;
  margin: 20px 0;
  background: #fff;
  border-radius: 3px;
  border: 2px solid #f9f9f9;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  overflow: hidden;
  text-align: center;
  z-index: 5;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 130px;
    top: 0;
    background: #f9f9f9;
    border-bottom: 1px solid rgba(0,0,0,.15);
    z-index: -1;
  }
  .user-card__details {
    display: flex;
    align-items: center;
    flex-direction: column;
    .user-photo {
      padding: 5px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 30px;
      background: #fff;
      border: 1px solid rgba(0,0,0,.25);
      overflow: hidden;
      box-sizing: content-box;
      img {
        width: 150px;
        border-radius: 50%;
      }
    }
    .user-title {
      color: #999;
      font-size: 18px;
    }
    .user-value {
      color: #2c2e31;
      font-size: 38px;
      margin: 5px;
    }
  }
  .user-card__values {
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 240px;
    justify-content: space-between;
    li {
      cursor: pointer;
      display: block;
      width: 40px;
      height: 48px;
      margin: 20px;
      background-image: url(../assets/img/card_icons.png);
      background-size: 378px;
      background-position-y: -48px;
      transition: all .25s ease-out;
      &.user-card__values--name {
        background-size: 378px;
        background-position-y: -48px;
        &.active {
          background-position: 0 -96px;
        }
      }
      &.user-card__values--email {
        background-position-x: -68px;
        &.active {
          background-position: -68px -96px;
        }
      }
      &.user-card__values--date {
        background-position-x: -135px;
        &.active {
          background-position: -135px -96px;
        }
      }
    }
  }
}
</style>
