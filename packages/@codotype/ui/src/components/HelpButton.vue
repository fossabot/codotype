<template>
  <span
    class="text-muted"
    @mouseover="$store.commit('editor/help/showing', true)"
    @mouseout="$store.commit('editor/help/showing', false)"
  >
    <i class="fa fa-lg fa-question-circle"></i>
    Help
  </span>
</template>

<script>
import Driver from 'driver.js'

export default {
  name: 'TourButton',
  created () {
    this.driver = new Driver()
  },
  methods: {
    startTour () {
      this.driver.defineSteps(this.$store.getters[`tour/${this.tour}`])
      return this.driver.start()
    }
  }
}
</script>
