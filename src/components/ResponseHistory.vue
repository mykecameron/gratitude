<template>
  <button @click="back" v-bind:disabled="noPast">⬅</button>
  <div v-if="hasResponses">
    <p>
      {{currentResponse.prompt}}
    </p>
    <p>
      "{{currentResponse.text}}"
    </p>
    on {{currentResponse.prettyDate}}
  </div>
  <button @click="forward" v-bind:disabled="noFuture">➡️</button>
  {{responses.length}}
  {{currentResponseIndex}}
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
