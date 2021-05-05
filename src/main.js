import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//==================Import Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//==================================

//==================Import Normalize
import "normalize.css";
//==================================

//======================Global Edits
import "./scss/_global.scss";
//==================================
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
