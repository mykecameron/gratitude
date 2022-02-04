<template>
  <div v-if="lastResponse">
    <h3>Last time you said:</h3>
      <p>
        {{lastResponse.prompt}}
      </p>
      <p>
        "{{lastResponse.text}}"
      </p>
      on {{lastResponse.prettyDate}}
  </div>
</template>

<script>
//TODO: change to history!
export default {
  name: 'LastResponse',
  props: {
    lastResponse: Object,
  }
}
</script>
