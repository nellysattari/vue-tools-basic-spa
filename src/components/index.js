import Vue from 'vue';
import TitleComponent from './TitleComponent.vue';
import Ques1Component from './Ques1Component.vue';
import Ques2Component from './Ques2Component.vue';
import StepComponent from './StepComponent.vue';

Vue.component('TitleComponent',TitleComponent);
Vue.component('Ques1Component',Ques1Component);
Vue.component('Ques2Component',Ques2Component);
Vue.component('StepComponent',StepComponent);

export default{TitleComponent,Ques1Component,Ques2Component,StepComponent}