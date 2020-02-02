<template>
  <div class="input-wrapper">
    <label for="cardsNumber">Number of user cards:</label>
    <input v-model="cardCounter" @input="checkValue(cardCounter)" name="cardsNumber" type="number">
  </div>
</template>
<script>

export default {
  data () {
    return {
      cardCounter: Number
    }
  },
  methods: {
    checkValue (value) {
      console.log(value)
    }
  }
}

</script>
