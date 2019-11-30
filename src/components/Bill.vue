<template>
  <div class="from-group w-100" novalidate>
    <label for="numberOfBills">Quelle est le montant de fotre facture ?</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$ </span>
      </div>
      <input
        id="numberOfBills"
        type="number"
        class="form-control"
        placeholder="0.00"
        min="0"
        required
        v-model="billAmount"
        @change="amountChanged"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "bill",
  data: () => {
    return {
      billAmount: 0
    };
  },
  computed: {
    ...mapState(["bill"])
  },
  methods: {
    amountChanged() {
      this.$store.dispatch("changeBill", this.billAmount);
    }
  }
};
</script>

<style></style>
