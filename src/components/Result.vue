<template>
  <div class="container-fluid">
    <h2 class="mr-auto ml-auto text-center mt-5">
      Hi {{ inputName }}! Distribution of top 50 contributors are :
    </h2>

    <md-button class="md-fab md-primary float-right" @click="gotoHome">
      <md-icon>logout</md-icon>
    </md-button>

    <!-- <pie-chart :data="chartData"></pie-chart> -->
    <div class="m-5 p-5">
        {{ data }}
    </div>

    <div class="m-5 p-5 text-center">
        <md-button class="md-primary md-raised" @click="show=true" v-if="!show">Show Details About Project</md-button>
        <md-button class="md-primary md-raised" @click="show=false" v-if="show">Hide Details About Project</md-button>
        <div v-if="show" class="m-3 p-4">
            <h5>Front-End Framework: VueJS</h5>
            <h5>Back-End Framework: ExpressJS (RunTimeEnvironment: NodeJS)</h5>
            <h5>Data Source: GraphQl</h5>
            <h5>Front-End GraphQl Datafetch: Apollo GraphQl</h5>
        </div>
    </div>

  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Result",
  data: function () {
    return {
      inputName: "",
      chartData: {
        x: 20,
        y: 30,
        z: 30,
      },
      data: [],
      show:false
    };
  },
  apollo: {
    data: {
      query: gql`
        query data {
          data {
            name
            projects
          }
        }
      `,
    },
  },
  created() {
    if (!localStorage.getItem("name")) {
      this.$router.push("/");
    } else {
      this.inputName = localStorage.getItem("name");
    }
  },
  mounted() {
    console.log(this.data);
    for (let i in this.data) {
      console.log(this.data[i]);
    }
  },
  methods: {
    gotoHome() {
      localStorage.removeItem("name");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
