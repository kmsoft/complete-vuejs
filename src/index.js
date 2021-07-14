import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
  props: ['greeting'],
  template:`
    <p>{{ greeting }}!</p>
  `
}
const Num = {
  props: ['number'],
  template:`
    <div v-bind:class="getClass(number)">
      {{ number }}
    </div
  `,
  methods: {
    getClass(number){
      return this.isEven(number)? 'blue': 'red'
    },
    isEven(number) {
      return number % 2 === 0
    }
  }
}

const app = Vue.createApp({
  components: {
    Hello,
    Num
  },

  template: `
    <button v-on:click="increment">Increment</button>
    <hello greeting="Hello" />
    <hello greeting="Yo" />
    <p>{{ count }}</p>
    <input
      v-model="value"
    />
    <div class="red">{{ error }}</div>
    <input type="checkbox" v-model="value" value="a"/>
    <input type="checkbox" v-model="value" value="b"/>
    <num v-for="number in numbers" v-bind:number="number"/>

    `,
  data() {
    return {
      count: 0,
      value: ['a'],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    },

    error(){
      if (this.value.length < 5){
        return 'must be > 5'
      }
    }
  },
  methods: {
    increment() {
      this.count += 1
    }
  }
})
app.mount('#app')
