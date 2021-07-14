import * as Vue from 'vue/dist/vue.esm-bundler.js'
const app = Vue.createApp({
    template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
    `,
  data() {
    return{
      count: 0
    }
  },

  methods: {
    increment() {
      this.count += 1
    }
  }
})
app.mount('#app')