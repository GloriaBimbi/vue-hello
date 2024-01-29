const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      title: "",
      imgSrc: "",
    };
  },
});

app.mount("#app");
