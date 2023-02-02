const products = [
    {
        id: 1, description: "lzcfccfzfczfc", price:25.99 , img: "https://www.yonis-shop.com/169321-amp_product/montre-telephone-android-4g-1-54-1-8go-wifi-noire-bleue.jpg"
    },
    {
        id: 4, description: "lzcfccfzfczfc", price: 25.99, img: "https://boulanger.scene7.com/is/image/Boulanger/6941487257645_h_f_l_0"
    },
    {
        id: 6, description: "2lzcfccfzfczfc", price: 25.99, img: "https://www.cdiscount.com/pdt2/2/1/6/1/700x700/nai5014236277216/rw/naixues-montre-connectee-femme-appels-bluetooth-as.jpg"
    },
    {
        id: 8, description: "lzcfccfzfczfc", price: 25.99, img: "https://www.rueducommerce.fr/media/produits/chrono/img//chronus-montre-connectee-femmes-homme-enfant-ip68-etanche-bracelet-connecte-cran-colore-smartwatch-avec-cardio-podometre-sommeil-reveil-notifications-pour-iphone-huawei-samsung-xiaomi-sonyrouge-10477582-27118438_1140x1140.jpg"
    },
    {
        id: 9, description: "lzcfccfzfczfc", price: 25.99, img: "https://media.carrefour.fr/medias/7fb08c3fda99309e8e5b559f91bc559b/p_540x540/3700092618400-photosite-20211116-121918-0.jpg"
    },
    {
        id: 10, description: "dzczdczdc", price: 23.99, img: "https://media.carrefour.fr/medias/7fb08c3fda99309e8e5b559f91bc559b/p_540x540/3700092618400-photosite-20211116-121918-0.jpg"
    },
]


const Home = {
    template: "#home",
    name: "Home",
    data: () => {
        return {
            products,
            searchKey: "",
        }
        },
            computed: {
            filteredList(){
                    return this.products.filter((product) => {
                        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
                            })
            }
        },
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