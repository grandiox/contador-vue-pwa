const app = Vue.createApp({
  data() {
    return {
      title: "Contador app - Vue",
      count: 0,
    };
  },
  methods: {
    modcount(instruction = "add", limit = 1) {
      if (instruction === "dis") this.count -= limit;
      else this.count += limit;
      // console.log("des")
    },
  },
});
