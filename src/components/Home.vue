<template>
  <div class="container">
    <md-card class="w-50 mt-5 ml-auto mr-auto">
      <md-card-header class="text-center">
        <div class="md-title">Welcome To The App</div>
        <div class="mt-3">
          <span>Please fill below field(s)</span>
        </div>
      </md-card-header>
      <md-card-content class="w-50 mr-auto ml-auto">
        <md-field>
          <label>Enter Your Name</label>
          <md-input v-model.lazy="inputName" required></md-input>
        </md-field>

        <md-button
          class="md-raised md-primary btn-block"
          @click="gotoResult"
          :disabled="!inputName"
          >Enter</md-button
        >
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => {
    return {
      inputName: "",
    };
  },
  created () {
    if (localStorage.getItem('name')){
      this.$router.push("result");
    }
  },
  methods: {
    gotoResult() {
      localStorage.setItem('name',this.inputName);
      this.$router.push("result");
    },
  },
};
</script>

<style scoped>
</style>
