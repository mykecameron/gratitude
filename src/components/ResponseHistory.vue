<template>
    <h2>
      Past gratitude
    </h2>
    <div class="container">
      <div>
        <button @click="back" v-bind:disabled="noPast">&#9756;</button>
      </div>
      <div v-if="hasResponses" class="response-content">
        <div class="prompt">
          {{currentResponse.prettyDate}} -
          {{currentResponse.prompt}}:
        </div>
        <div class="response">
          {{currentResponse.text}}
        </div>
      </div>
      <div v-else>Record some gratitude!</div>
      <div>
        <button @click="forward" v-bind:disabled="noFuture">&#9758;</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ResponseHistory',
  props: {
    responses: Array,
  },
  computed: {
    currentResponse() {
      return this.responses[this.currentResponseIndex];
    },
    hasResponses() {
      return this.responses.length > 0;
    },
    noPast() {
      return this.currentResponseIndex >= (this.responses.length - 1);
    },
    noFuture() {
      return this.currentResponseIndex <= 0;
    }
  },
  data() {
    return {
      currentResponseIndex: 0
    };
  },
  methods: {
    back() {
      this.currentResponseIndex += 1;
    },
    forward() {
      this.currentResponseIndex -= 1;
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container div {
  margin-left: 1rem;
  margin-right: 1rem;
}

button {
  font-size: 3rem;
  font-weight: bold;
}

button:disabled,
button[disabled]{
  color: #748494;
  cursor: default;
}

h2 {
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-family: Satisfy;
}

.response-content div {
  margin: 0.3rem;
}

.response {
  white-space: pre;
}

.prompt {
  font-style: italic;
}

.response {
  font-family: Satisfy;
  font-size: 1.2rem;
}
</style>
