import Vue from "vue";
import VueRouter from "vue-router";
import TitleComponent from "./components/TitleComponent.vue";
import StepComponent from "./components/StepComponent.vue";
import Ques1Component from "./components/Ques1Component.vue";
import Ques2Component from "./components/Ques2Component.vue";
import ResultComponent from "./components/ResultComponent.vue";

import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      components: {
        title: TitleComponent
      },
      props: {
        title: () => ({ msg: "life time  tool" })
      }
    },
    {
      path: "/step1",
      components: {
        title: TitleComponent,
        steps: StepComponent,
        main: Ques1Component
      },
      props: {
        title: () => ({ msg: "life time  tool" }),
        steps: () => ({
          stepNumber: "Step 1",
          stepTitle: "Tell us a little about yourself"
        })
        // main: () => ({
        //   questions: store.getters.questions
        // })
      }
    },
    {
      path: "/step2",
      components: {
        title: TitleComponent,
        steps: StepComponent,
        main: Ques2Component
        // result: ResultComponent
      },
      children: [
        { path: '', component: ResultComponent }
      ],
      props: {
        title: () => ({ msg: "life time tool" }),
        steps: () => ({
          stepNumber: "Step 2",
          stepTitle: "Payment illustrator"
        }),
        main: () => ({
          questions: store.getters.questions
        })
      }
    }
  ]
});

export default router;
