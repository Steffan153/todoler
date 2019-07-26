import Vue from "vue";
import firebase from "firebase/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencilAlt, faTrash, faCheckSquare as fasCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare as farCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

library.add(faPencilAlt, faTrash, fasCheckSquare, farCheckSquare);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDjCV2Eh0pbbV6CeoA0xIa_3ku_y0wH-mo",
  authDomain: "todoler-mvc-44add.firebaseapp.com",
  databaseURL: "https://todoler-mvc-44add.firebaseio.com",
  projectId: "todoler-mvc",
  storageBucket: "",
  messagingSenderId: "769487962734",
  appId: "1:769487962734:web:7f23922b4f02d3c1"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
