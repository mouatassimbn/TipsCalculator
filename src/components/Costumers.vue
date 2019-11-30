<template>
  <div class="w-100">
    <div class="form-group">
      <label for="numberOfBills"
        >Combien de personnes partagent la facture ?</label
      >
      <input
        v-model="costumerNumber"
        type="range"
        class="custom-range text-sucess"
        @change="changeCustomers"
        min="1"
        max="10"
        id="numberOfBills"
      />
      <p>
        <span>{{ costumerNumber }}</span> personnes
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "costumers",
  data: () => {
    return {
      costumerNumber: 1
    };
  },
  computed: {
    ...mapState(["customers"])
  },
  methods: {
    changeCustomers() {
      this.$store.dispatch("changeCustomers", this.costumerNumber);
    }
  }
};
</script>

<style></style>
