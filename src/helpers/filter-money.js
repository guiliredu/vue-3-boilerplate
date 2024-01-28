import Vue from 'vue'

Vue.filter('toMoney', (value) => {
  return value
    .toLocaleString('pt-br', {
      minimumFractionDigits: 2
    });
})
