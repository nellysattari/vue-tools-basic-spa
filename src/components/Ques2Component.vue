<template>
  <div class="ques2">
    <div class="questions">
      <div v-for="(question, index) in questions">
        <input type="radio" id="index" v-bind:value="question.id" v-model="picked">
        <label for="question">{{question.id}}</label>
      </div>
      <span>Picked: {{ picked }}</span>
    </div>

    <router-link to="/step1" class="btn btn-primary">previous</router-link>

    <button v-on:click="show = !show ;showResult()" class="btn btn-primary">Submit</button>
    <transition name="fade">
      <router-view v-if="show"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Ques2Component",
  props: ["questions"],
  data: function() {
    return {
      show: false,
      picked: ""
    };
  },
  methods: {
    showResult: function() {
      console.log("Final Answers", this.$store.getters.answers);
    }
  } 
};
</script>

<style lang="scss" scoped>
.ques2 {
  border: 1px green solid;
  .questions {
    text-align: left;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
