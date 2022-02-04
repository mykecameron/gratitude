<template>
  <div class="prompt">
    {{currentPrompt}}:
    <button @click="changePrompt" class="refresh-button">&#8634;</button>
  </div>

  <textarea
    autofocus
    class="response"
    v-model="response">
  </textarea>
  <button @click="saveResponse" class="save-button">Record Gratitude!</button>
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
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
  font-family: Satisfy;
  font-size: 1.2rem;
}

.refresh-button {
  font-size: 1.5rem;
  margin-left: 0.5rem;
}

.save-button {
  border: 1px solid #2c3e50;
  padding: 0.5rem;
  border-radius: 5px;
}

.save-button:active {
  background-color: #bfc5ca;
}
</style>
