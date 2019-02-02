<template>
  <div id="appTool">
    <img alt="Challenger logo" src="./assets/Challenger.jpg" />
    <TitleComponent msg="Challenger life time annuity tool" /> -->
    <StepComponent
      stepNumber="Step 1"
      stepTitle="Tell us a little about yourself"
    />
    <Ques1Component
      v-bind:questions="[
        {
          title:
            '1- How important is/will be the government Age Pension to your standard of living in retiremen?'
        },
        {
          title:
            '2- Do you have a partner, or any children or family that you feel responsible to provide for or would like to leave an inheritance to'
        }
      ]"
    />
  </div>
</template>

<script>
import TitleComponent from "./components/TitleComponent.vue";
import StepComponent from "./components/StepComponent.vue";
import Ques1Component from "./components/Ques1Component.vue";

export default {
  name: "app",
  components: {
    TitleComponent,
    StepComponent,
    Ques1Component
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
