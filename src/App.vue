<template>
  <div id="appTool">
    <!-- <img alt="  logo" src="./assets/.jpg" /> -->
    <!-- <router-view name="title" /> -->
    <TitleComponent msg="life time tool" />
    <router-view name="steps" />
    <router-view name="main" />
    <!-- <router-view name="result"/> -->
    <!-- //v-bind:questions="questions"  -->
  </div>
</template>

<script>
import TitleComponent from "./components/TitleComponent.vue";

export default {
  name: "app",
  components: {
    TitleComponent
  },
  created: function() {
    this.$store.dispatch("loadQuestions");
  }
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
