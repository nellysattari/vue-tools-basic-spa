<template>
  <div class="step">
    <h1>{{ stepNumber }}</h1>
    <h3>{{ stepTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: "StepComponent",
  props: {
    stepNumber: String,
    stepTitle: String
  }
};
</script>

<style lang="scss">
.step {
  border: 1px green solid;
  background-color: green;
}
</style>
