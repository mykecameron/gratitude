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
  <button @click="saveResponse" class="save-button">Save Gratitude!</button>
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
  width: 80%;
  height: 10rem;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
  font-family: Satisfy;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: auto;
}

.refresh-button {
  font-size: 1.5rem;
  margin-left: 0.5rem;
  padding: 0.2rem 0.8rem;
  border-radius: 4rem;
}

button {
  background-color: white;
  border: 1px solid #2c3e50;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  font-family: Satisfy;
  font-size: 1.2rem;
  filter: drop-shadow(5px 3px 2px #607992);
}

button:active {
  background-color: #bfc5ca;
  transform: translate(5px, 3px);
  filter: none;
}

.prompt {
  font-size: 0.9rem;
  font-style: italic;
}
</style>
