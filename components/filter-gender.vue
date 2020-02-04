<template>
  <div class="gender-wrapper">
    <input id="female" v-model="genderFilter" type="radio" value="female">
    <label for="female">female</label>
    <input id="male" v-model="genderFilter" type="radio" value="male">
    <label for="male">male</label>
    <input
      id="any"
      v-model="genderFilter"
      type="radio"
      value="any"
      checked
    >
    <label for="any">any</label>
  </div>
</template>
<script>

export default {
  data () {
    return {
      genderFilter: 'any'
    }
  },
  watch: {
    genderFilter () {
      this.gender()
    }
  },
  methods: {
    gender () {
      this.$emit('gender', {
        'genderFilter': this.genderFilter
      })
    }
  }
}

</script>
