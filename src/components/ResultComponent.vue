<template>
  <div class="results">
    <h2>Your answers are:</h2>
    <ul>
      <li v-for="result in results">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ResultComponent",
  computed: {
    results: function() {
      return this.$store.getters.answers;
    }
  }
};
</script>

<style scoped></style>
