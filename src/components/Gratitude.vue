<template>
  <h3>{{currentPrompt.text}}</h3>
</template>

<script>
export default {
  name: 'Gratitude',
  props: {
    prompts: Array
  },
  computed: {
    currentPrompt() {
      return this.prompts[this.randomPromptIndex];
    },
    randomPromptIndex() {
      return Math.floor(Math.random() * this.prompts.length);
    },
  },
}
</script>

<style scoped>

</style>
