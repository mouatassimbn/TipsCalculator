<!--
          Programmed By :         Mouatassim Boulahsen
          Date :                  29/11/2019
          Goal :                  A tip calculator
-->
<template>
  <div id="app" class="container">
    <div class="w-75 m-auto">
      <div id="userInput">
        <div class="card p-5">
          <div class="card-title"><h1>Tips</h1></div>
          <div class="card-body">
            <bill></bill>
            <tips></tips>
            <customers></customers>
            <div class="form-group">
              <a
                href="#output"
                class="mt-3 btn btn-success text-light btn-block p-2"
                @click="showResult"
              >
                Calculate
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="output" hidden="true">
        <result></result>
      </div>
    </div>
  </div>
</template>

<script>
import bill from "./components/Bill.vue";
import tips from "./components/Tips.vue";
import customers from "./components/Costumers.vue";
import result from "./components/Result.vue";
import { fade } from "./animate";
export default {
  name: "app",
  components: {
    bill,
    tips,
    customers,
    result
  },
  data: () => {
    return {};
  },
  methods: {
    showResult: () => {
      document.getElementById("userInput").hidden = true;
      document.getElementById("output").hidden = false;
      document.getElementById("output").style = "opacity:0;";
      fade("#output");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#output {
  height: 50%;
}
body {
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
</style>
