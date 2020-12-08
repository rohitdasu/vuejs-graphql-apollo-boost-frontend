<template>
  <div class="hello">
    <md-toolbar class="md-primary" md-elevation="1">
      <h3 class="md-title my-text" style="flex: 1">Apollo GraphQL VueJS</h3>
      <md-button class="md-raised padding-button round" @click="gotoRepo"
        >View Source Code</md-button
      >
      <md-button class="md-raised padding-button round" @click="gotoProfile"
        >About Developer</md-button
      >
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    gotoRepo() {
      window.location.href = "https://github.com/rohitdasu/vuejs-graphql-apollo-boost-frontend";
    },
    gotoProfile() {
      window.location.href = "https://rohit-dasu.web.app";
    },
  },
};
</script>

<style scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
.padding-button {
  padding: 5px 10px;
}
.my-text {
  font-size: x-large;
}
</style>
