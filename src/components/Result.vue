<template>
  <div class="container-fluid">
    <h2 class="mr-auto ml-auto text-center mt-5">
      Hi {{ inputName }}! Distribution of top 50 contributors are :
    </h2>

    <md-button class="md-fab md-primary float-right" @click="gotoHome">
      <md-icon>logout</md-icon>
    </md-button>

    <pie-chart :data="graphDataCalculate"></pie-chart>

    <div v-if="progress" class="d-flex justify-content-center">
      <md-progress-spinner :md-diameter="100" :md-stroke="4" md-mode="indeterminate"></md-progress-spinner>
    </div>

    <div class="m-5 p-5 text-center">
      <md-button class="md-primary round pr-2 pl-2 pt-1 pb-1 md-raised" @click="show = true" v-if="!show"
        >Show Details About Project</md-button
      >
      <md-button class="md-primary round md-raised pr-2 pl-2 pt-1 pb-1" @click="show = false" v-if="show"
        >Hide Details About Project</md-button
      >
      <div v-if="show" class="m-3 p-4">
        <div class="h5">Front-End Framework: VueJS</div>
        <div class="h5">Back-End Framework: ExpressJS (RunTimeEnvironment: NodeJS)</div>
        <div class="h5">Data Source: GraphQl</div>
        <div class="h5">Front-End GraphQl Datafetch: Apollo GraphQl</div>
        <div class="h5">Charts: ChartJS and ChartKick</div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import Vue from 'vue';

Vue.use(Chartkick.use(Chart));

export default {
  name: "Result",
  data: function () {
    return {
      inputName: "",
      keys: [],
      values: [],
      data: [],
      progress:true,
      graphData: {},
      show: false,
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
      console.log('created')
    }
  },
  watch: {
    data() {
      for (let i in this.data) {
        this.keys.push(this.data[i]["name"]);
        this.values.push(this.data[i]["projects"]);
      }
      this.keys.forEach((key, i) => this.graphData[key] = this.values[i]);
      this.progress = false;
    },
  },
  methods: {
    gotoHome() {
      localStorage.removeItem("name");
      this.$router.push("/");
    },
  },
  computed: {
    graphDataCalculate() {
      this.keys.forEach((key, i) => this.graphData[key] = this.values[i]);
      return JSON.parse(JSON.stringify(this.graphData));
    }
  },
};
</script>

<style>
.round{
  border-radius: 15px;
}
</style>
