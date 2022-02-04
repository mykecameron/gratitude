<template>
  <h1>Gratitude</h1>
  <div class="prompt-container">
    <Gratitude
      :prompts="prompts"
      @save:response="saveResponse"/>

    <h3>Last time you said:</h3>
    <p>
      {{lastResponse.prompt}}
    </p>
    <p>
      "{{lastResponse.text}}"
    </p>
      on {{lastResponse.prettyDate}}
    <p>
    </p>
  </div>
</template>

<script>
import Gratitude from './components/Gratitude.vue';
import Response from './models/response.js';

export default {
  name: 'App',
  components: {
    Gratitude
  },
  methods: {
    saveResponse(response) {
      new Response(response).save();
    },
  },
  data() {
    return {
      lastResponse: Response.last() || {},
      prompts: [
        {
          text: 'What I focused on today',
        },
        {
          text: 'Cute things I saw today',
        },
        {
          text: 'New things I tried today',
        },
        {
          text: 'Ways I supported others today',
        },
        {
          text: 'Ways I loved myself today',
        },
        {
          text: 'Fun things I did today',
        },
        {
          text: 'Ways I supported others today',
        },
        {
          text: 'Ways I challenged myself today',
        },
        {
          text: 'What inspired me today',
        },
        {
          text: 'What I let go of today',
        },
      ]
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
</style>
