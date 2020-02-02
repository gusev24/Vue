<template>
  <div class="gender-wrapper">
    <input type="radio" value="female" name="female" v-model="genderFilter">
    <label for="female">female</label>
    <br>
    <input type="radio" value="male" name="male" v-model="genderFilter">
    <label for="male">male</label>
    <br>
    <input type="radio" value="any" name="any" v-model="genderFilter" checked>
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
