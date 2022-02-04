<template>
  <h3>{{currentPrompt}}</h3>
  <button @click="changePrompt">🔄 </button>
  <textarea
    autofocus
    class="response"
    v-model="response">
  </textarea>
  <button @click="saveResponse">Save</button>
</template>

<script>
import prompts from '../fixtures/prompts.js';
import Response from '../models/response.js';

const randomPromptIndex = function() {
  return Math.floor(Math.random() * prompts.length);
}

export default {
  name: 'Gratitude',
  computed: {
    currentPrompt() {
      return this.prompts[this.currentPromptIndex];
    },
  },
  data() {
    return {
      prompts: prompts,
      currentPromptIndex: randomPromptIndex(),
      response: ""
    }
  },
  emits: ['save:response'],
  methods: {
    saveResponse() {
      const response = new Response({prompt: this.currentPrompt, text: this.response})
      response.save();
      this.response = "";
      this.$emit('save:response', response);
    },
    changePrompt() {
      this.currentPromptIndex = randomPromptIndex();
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
