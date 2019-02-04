<template>
  <div class="ques1">
    <div class="questions">
      <p v-for="(question, index) in questions">
        {{ index + 1 }}-{{ question.title }}
      </p>
      <input type="text" v-model="answers"> 
      <p>Message is: {{ myAnswer }}</p>
    </div>
    <!-- <a href="#" class="btn btn-primary"> next </a> -->
    <button  v-on:click='add()'>Next</button>
 
     <!-- <router-link
      to="/step2"
      class="btn btn-primary" > 
        Next
      </router-link>  -->
  </div>
</template>

<script>
export default {
  name: "Ques1Component",
  props: ["questions"],
   data: function(){ 
      return {
        myAnswer: ''
      }
  },
  created: function() {
    // console.log("step is:", this.$route.query.step);
  },
  computed:{
     answers:{
      get(){return this.$store.getters.answers},
      set(value){ this.$store.commit('addAnswers',value);}//this.myAnswer
     }
  } ,
  methods: {
    add() {
        this.$router.push('/step2');
      
        // return  '/step2';
    }
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
