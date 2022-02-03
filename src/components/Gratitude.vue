<template>
  <ul>
    <li v-for="prompt in prompts" :key="prompt">
      {{ prompt.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Gratitude',
  props: {
    prompts: Array
  }
}
</script>

<style scoped>

</style>
