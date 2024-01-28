import VueTheMask from 'vue-the-mask'
import Multiselect from 'vue-multiselect'
import money from 'v-money'

export default function configurePlugins(app) {
    app.use(VueTheMask)
    app.component('multiselect', Multiselect)
    app.use(money, {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        // suffix: ' #',
        precision: 2,
        // masked: false
    })
};
