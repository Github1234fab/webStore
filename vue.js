const Home = {
    template: "<h1>Home</h1>",
    name: "Home"
}

const UserSetting = {
  template: "<h1>UserSetting</h1>",
  name: "Home",
};



const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/user-setting", component: UserSetting, name: "UserSetting" },
  ],
});
const app = Vue.createApp({});
app.use(router);
app.mount("#app");