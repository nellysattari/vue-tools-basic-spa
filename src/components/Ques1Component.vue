<template>
  <div class="ques1">
    <div class="questions">
      <p v-for="(question, index) in questions">
        {{ index + 1 }}-{{ question.title }}
      </p>
    </div>
    <!-- <a href="#" class="btn btn-primary"> next </a> -->
    <router-link
      to="/step2"
      v-bind:questions="questions"
      class="btn btn-primary"
      >next</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Ques1Component",
  props: ["questions"],
  created: function() {
    // console.log("step is:", this.$route.query.step);
  }
};
</script>

<style lang="scss" scoped>
.ques1 {
  border: 1px green solid;
  .questions {
    text-align: left;
  }
}
</style>
