<template>
  <div>
    <div class="form-group">
      <label for="selectTip">Comment était le service ?</label>
      <select
        class="custom-select"
        id="selectTip"
        v-model="tipAmount"
        @change="changeTips"
      >
        <option value="0">0% - Terrible service</option>
        <option value="10" selected>10% - Unsatisfying service </option>
        <option value="15">15% - Ok service</option>
        <option value="20">20% - Excellent service</option>
        <option value="25">25% - Outstanding service</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tips",
  data: () => {
    return {
      tipAmount: 10
    };
  },
  computed: {
    ...mapState(["tip"])
  },
  methods: {
    changeTips: () => {
      this.$store.dispatch("changeTip", this.tipAmount);
    }
  }
};
</script>

<style></style>
