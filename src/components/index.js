import Vue from "vue";
import app from "../App.vue";
import TitleComponent from "./TitleComponent.vue";
import StepComponent from "./StepComponent.vue";
import Ques1Component from "./Ques1Component.vue";
import Ques2Component from "./Ques2Component.vue";
import ResultComponent from "./ResultComponent.vue";

Vue.component("app-component", app);
Vue.component("TitleComponent", TitleComponent);
Vue.component("Ques1Component", Ques1Component);
Vue.component("Ques2Component", Ques2Component);
Vue.component("StepComponent", StepComponent);
Vue.component("ResultComponent", ResultComponent);

export default {
  app,
  TitleComponent,
  Ques1Component,
  Ques2Component,
  StepComponent,
  ResultComponent
};
