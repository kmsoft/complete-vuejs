import * as Vue from 'vue/dist/vue.esm-bundler.js'
const app = Vue.createApp({
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
    <div 
      v-for="number in numbers"
      v-bind:class="getClass(number)"
    >
      <div>
        {{ number }}
      </div>
    </div>


    `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    }
  },
  methods: {
    increment() {
      this.count += 1
    },

    isEven(number) {
      return number % 2 === 0
    },

    getClass(number){
      return this.isEven(number)? 'blue': 'red'
    }
  }
})
app.mount('#app')
