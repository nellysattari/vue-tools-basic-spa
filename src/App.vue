<template>
  <div id="appTool">
    <img alt="Challenger logo" src="./assets/Challenger.jpg" />
    <router-view name="title" />
    <router-view name="steps" />
    <router-view name="main" />
    <!-- //v-bind:questions="questions"  -->
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#appTool {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
