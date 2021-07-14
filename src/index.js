import * as Vue from 'vue/dist/vue.esm-bundler.js'
const app = Vue.createApp({
    template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
    <div v-if="isEven(count)">
      Even
    </div>
    <div v-else">
    Odd
  </div>
    `,
  data() {
    return{
      count: 0
    }
  },

  methods: {
    increment() {
      this.count += 1
    },

    isEven(){
      return this.count%2 === 0
    }
  }
})
app.mount('#app')