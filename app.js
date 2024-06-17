Vue.createApp({
  data() {
    return {
      goals: ["Test"],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue.trim() !== "") {
        this.goals.push(this.enteredValue);
        this.enteredValue = "";
      }
    },
  },
}).mount("#app");
