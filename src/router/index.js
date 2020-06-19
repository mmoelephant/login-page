import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue")
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.name != "Login") {
    const userid = localStorage.getItem("userid");
    if (userid) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
})
export default router;
