import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bill: 0.0,
    tip: 10,
    customers: 1
  },
  mutations: {
    CHANGE_BILL(state, amount) {
      state.bill = amount;
    },
    CHANGE_TIP(state, amount) {
      state.tip = amount;
    },
    CHANGE_CUSTOMERS(state, number) {
      state.customers = number;
    }
  },
  actions: {
    changeBill({ commit }, amount) {
      if (amount >= 0) {
        commit("CHANGE_BILL", amount);
      }
    },
    changeTip({ commit }, amount) {
      if (amount >= 0) {
        commit("CHANGE_TIP", amount);
      }
    },
    changeCustomers({ commit }, number) {
      if (number > 0) {
        commit("CHANGE_CUSTOMERS", number);
      }
    }
  },
  getters: {
    getBillPerPersons: state => {
      return state.bill / state.customers;
    },
    getTotalPerPerson: state => {
      return (state.bill / state.customers) * (1 + state.tip / 100);
    },
    getTotal : state => {
      return ((state.bill / state.customers) * (1 + state.tip / 100)) * state.customers;
    },
    getTip : state => {
      return (state.bill) * (state.tip / 100);
    }
  }
});
