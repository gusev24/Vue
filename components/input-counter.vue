<template>
  <div class="input-wrapper">
    <label for="cards-number">Number of user cards:</label>
    <input
      id="cards-number"
      v-model="cardCounter"
      @input="checkInput(cardCounter)"
      :class="{ error: !cardCounter || errors.length }"
      type="number"
      min="1"
      max="20"
    >
    <div v-if="errors.length > 0" class="input-wrapper__error-message" >
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      cardCounter: 20,
      required: true,
      errors: []
    }
  },
  methods: {
    checkInput (e) {
      this.clearErrors()
      if (!e) {
        this.errors.push('Empty value'); this.required = false
        return
      } else {
        this.clearErrors()
        this.required = true
      }
      if ((e < 1 || e > 20) && !Number.isInteger(e)) {
        this.errors.push('Incorrect value, an integer from 0 to 20 is required'); this.required = false
      } else {
        this.clearErrors()
        this.required = true
      }
    },
    clearErrors () { this.errors = [] }
  }
}

</script>

<style lang="scss">
  $errorColor: #cb2431;
  .input-wrapper {
    input {
      width: 100px;
      &.error {
        background: $errorColor;
      }
    }
    .input-wrapper__error-message {
      p {
        color: $errorColor;
      }
    }
  }
</style>
