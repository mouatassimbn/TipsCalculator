<template>
  <div>
    <div class="card w-100 pl-5 pr-5 pt-5">
      <h5 class="card-title">Receipt</h5>
      <div class="card-body text-left">
        <p class="mb-0">Dear customer(s), Hi</p>
        <small class="form-text  text-muted mt-0">
          We seperated your bill for you</small
        >
        <div class="text-center mt-2 pt-5">
          <h6>Costumers amount due :</h6>
          <div v-for="n in Number(customers)" :key="n">
            <costumerBill
              :idCustomer="n"
              :amount="getTotalPerPerson"
            ></costumerBill>
          </div>
          <div>
            <hr />
            <div class="row">
              <div class="col-6">
                <p>Sub-total per person :</p>
                <p>Tip per person :</p>
                <p>Total :</p>
              </div>
              <div class="col-6 text-right">
                <p>${{ getBillPerPersons.toFixed(2) }}</p>
                <p>${{ getTip.toFixed(2) }}</p>
                <b>${{ getTotal.toFixed(2) }}</b>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <a
            href="#userInput"
            class="mt-3 btn btn-light btn-block p-2"
            @click="hidResult"
          >
            Go back</a
          >
        </div>
      </div>
    </div>
    <div class="card w-100 pt-4">
      <div class="card-body">
        <p id="barcode">Made by MSBN.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import costumerBill from "./CutomerBill";
import { fade } from "../animate";
export default {
  name: "result",
  components: {
    costumerBill
  },
  data: () => {
    return {
      number: 4
    };
  },
  computed: {
    ...mapState(["bill", "tip", "customers"]),
    ...mapGetters([
      "getBillPerPersons",
      "getTotalPerPerson",
      "getTotal",
      "getTip"
    ])
  },
  methods: {
    hidResult: () => {
      document.getElementById("output").hidden = true;
      document.getElementById("userInput").hidden = false;
      document.getElementById("userInput").style = "opacity:0;";
      fade("#userInput");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Libre+Barcode+39+Extended&display=swap");
hr {
  background-color: #f1d302;
  border-color: #f1d302;
}
#barcode {
  font-size: 4vw;
  font-family: "Libre Barcode 39 Extended", cursive;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
