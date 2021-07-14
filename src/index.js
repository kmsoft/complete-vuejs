import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
  template:`
    <p>Hello!</p>
  `
}

const app = Vue.createApp({
  components: {
    Hello
  },

  template: `
    <button v-on:click="increment">Increment</button>
    <hello />
    <p>{{ count }}</p>
    <input
      v-model="value"
    />
    <div class="red">{{ error }}</div>
    <input type="checkbox" v-model="value" value="a"/>
    <input type="checkbox" v-model="value" value="b"/>
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
