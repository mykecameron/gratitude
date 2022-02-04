<template>
  <h1 class="main-header">Gratitude!</h1>
  <h2 class="secondary-header">a daily gratitude log</h2>
  <div class="prompt-container">
    <Gratitude
      @save:response="refresh"/>

    <ResponseHistory :responses="responses"/>
  </div>

  <footer class="footer">
    <a href="https://github.com/mykecameron/gratitude">
      <img
        src="@/assets/img/GitHub-Mark-32px.png"
        title="Check it out on Github!"
        alt="Github logo"/>
    </a>
  </footer>
</template>

<script>
import Gratitude from './components/Gratitude.vue';
import ResponseHistory from './components/ResponseHistory.vue';
import Response from './models/response.js';

export default {
  name: 'App',
  components: {
    Gratitude,
    ResponseHistory
  },
  methods: {
    refresh() {
      this.responses = Response.all();
    },
  },
  data() {
    return {
      responses: Response.all(),
    };
  }
}
</script>

<style>
@font-face {
  font-family: Satisfy;
  src: local("Satisfy"),
    url(./assets/fonts/Satisfy/Satisfy-Regular.ttf) format("truetype");
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}

.main-header {
  font-family: Satisfy;
  font-size: 5rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #2c3e50;
  -webkit-text-fill-color: #516880;;
}

.secondary-header {
  font-size: 1rem;
  font-style: italic;
  margin-top: -1.75rem;
}

.prompt-container {
  width: 50%;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}

.footer {
  margin-top: 3rem;
}

button {
  cursor: pointer;
}

</style>
