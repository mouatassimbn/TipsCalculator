<template>
  <div class="card">
    <div class="card-body d-flex justify-content-around align-items-center">
      <h6 class="text">{{ idCustomer }}</h6>
      <input id="nameInput" type="text" :placeholder="costumerName" />
      <h6 class="text-right" id="price">${{ amount.toFixed(2) }}</h6>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "customerBill",
  props: ["idCustomer", "amount"],
  computed: {
    ...mapState(["bill", "tip", "customers"]),
    ...mapGetters(["getBillPerPersons", "getTotalPerPerson", "getTotal"]),
    costumerName() {
      return "Costumer " + this.idCustomer;
    }
  }
};
</script>

<style>
.text {
  color: #8a8b87;
}
#price {
  color: #2b303a;
}
#nameInput {
  border-style: none;
  border-color: white;
}
</style>
