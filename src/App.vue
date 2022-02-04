<template>
  <h1>Gratitude</h1>
  <div class="prompt-container">
    <Gratitude
      @save:response="saveResponse"/>

    <LastResponse
      :lastResponse="lastResponse"/>
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
import LastResponse from './components/LastResponse.vue';
import Response from './models/response.js';

export default {
  name: 'App',
  components: {
    Gratitude,
    LastResponse
  },
  methods: {
    saveResponse(response) {
      new Response(response).save();
    },
  },
  data() {
    return {
      lastResponse: Response.last(),
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.prompt-container {
  width: 50%;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
}

.footer {
  margin-top: 3rem;
}
</style>
