import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import("./views/Home.vue");
const Users = () => import("./views/Home.vue");
const UsersPosts = () => import("./views/Home.vue");
const UsersProfile = () => import("./views/Home.vue");
const HeaderHome = () => import("./views/Home.vue");
const HeaderUsers = () => import("./views/Home.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome
      }
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: true,
      children: [
        { path: "posts", component: UsersPosts},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 }
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash
          };
        }
        resolve(position);
      });
    });
  }
});
