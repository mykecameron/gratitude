<template>
  <h3>{{currentPrompt}}</h3>
  <textarea
    autofocus
    class="response"
    v-model="response">
  </textarea>
  <button @click="saveResponse">Save</button>

  <p>{{response}}</p>
</template>

<script>
// TODO: implement getting a new random prompt
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
      this.$emit('save:response', {prompt: this.currentPrompt, text: this.response});
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
