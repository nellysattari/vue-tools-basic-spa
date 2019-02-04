<template>
  <div class="ques2">
    <div class="questions">
      <p v-for="(question, index) in questions">
        {{ index + 1 }}-{{ question.title }}
      </p>
    </div>
     <router-link
      to="/step1"
      class="btn btn-primary">previous</router-link>
    <a href="#" class="btn btn-primary"> Submit </a>
  </div>
</template>

<script>
export default {
  name: "Ques2Component",
  props: ["questions"]
};
</script>

<style lang="scss" scoped>
.ques2 {
  border: 1px green solid;
  .questions {
    text-align: left;
  }
}
</style>
