<template>
  <div class="gender-wrapper">
    <input type="radio" value="female" id="female" v-model="genderFilter">
    <label for="female">female</label>
    <br>
    <input type="radio" value="male" id="male" v-model="genderFilter">
    <label for="male">male</label>
    <br>
    <input type="radio" value="any" id="any" v-model="genderFilter" checked>
    <label for="any">any</label>
  </div>
</template>
<script>

export default {
  data () {
    return {
      genderFilter: 'any'
    }
  }
}

</script>
