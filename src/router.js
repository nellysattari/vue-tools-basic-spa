import Vue from "vue";
import VueRouter from "vue-router";
import TitleComponent from "./components/TitleComponent.vue";
import StepComponent from "./components/StepComponent.vue";
import Ques1Component from "./components/Ques1Component.vue";
import Ques2Component from "./components/Ques2Component.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
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
        }),
        main: () => ({
          questions: [
            {
              title:
                "How important is/will be the government Age Pension to your standard of living in retiremen?"
            },
            {
              title:
                "Do you have a partner, or any children or family that you feel responsible to provide for or would like to leave an inheritance to"
            }
          ]
        })
      }
    },
    {
      path: "/step2",
      components: {
        title: TitleComponent,
        steps: StepComponent,
        main: Ques2Component
      },
      props: {
        title: () => ({ msg: "life time tool" }),
        steps: () => ({
          stepNumber: "Step 2",
          stepTitle: "Payment illustrator"
        }),
        main: () => ({
          questions: [
            {
              title: "Gender"
            },
            {
              title: "Age (Not DOB)"
            }
          ]
        })
      }
    }
  ]
});

export default router;
