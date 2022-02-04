<template>
  <h3>{{currentPrompt.text}}</h3>
  <textarea
    autofocus
    class="response"
    v-model="response">
  </textarea>
  <button @click="saveResponse">Save</button>

  <p>{{response}}</p>
</template>

<script>
/* eslint-disable no-debugger, no-console */
export default {
  name: 'Gratitude',
  props: {
    prompts: Array,
  },
  emits: ['save:response'],
  computed: {
    currentPrompt() {
      return this.prompts[this.randomPromptIndex];
    },
    randomPromptIndex() {
      return Math.floor(Math.random() * this.prompts.length);
    },
  },
  methods: {
    saveResponse() {
      this.$emit('save:response', {prompt: this.currentPrompt.text, text: this.response});
    }
  }
}
</script>

<style scoped>
.response {
  display: block;
  width: 100%;
  height: 10rem;
}
</style>
