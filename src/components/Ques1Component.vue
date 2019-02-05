<template>
  <div class="ques1">
    <div class="questions">
      <p v-for="(question, index) in questions">
        {{ index + 1 }}-{{ question.first_name }} {{ question.last_name }}
      </p>
      <input type="text" v-model="answers" />
    </div>
    <!-- <a href="#" class="btn btn-primary"> next </a> -->
    <!-- <button class="btn btn-primary" v-on:click="add()">Next</button> -->

    <router-link to="/step2" class="btn btn-primary">
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Ques1Component",
  // props: ["questions"],
  // data: function() {
  //   return {
  //     myAnswer: ""
  //   };
  // },
  computed: {
    answers: {
      get() {
        return this.$store.getters.answers[0];
      },
      set(value) {
        this.$store.commit("saveAnswers", value);
      }
    },
    questions: function() {
      return this.$store.getters.questions;
    }
  }
  // methods: {
  //   add() {
  //     this.$router.push("/step2");
  //     // return  '/step2';
  //   }
  // }
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
