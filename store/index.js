import { defineStore } from 'pinia'

export const UseCounter1 = defineStore('counter1', {
  state: () => ({
    count1: 0,
  }),
  
  actions: {
    increment1() {
      this.count1++
      console.log(this.count1 + 1)
    },
    decrementar1: (state) => state.count1--,
    reiniciar1: (state) => (state.count1 = 0),
  },
  getters: {
    countInicial1: (state) => state.count1,
  },
})

export const UseCounter2 = defineStore("counter2", () => {
    const count2 = ref(0)

    const increment2 = () => {
    console.log({
      "count2.value":count2.value,
      "count2.value++":count2.value++
    })
    }
    const decrementar2 = () => count2.value--
    const reiniciar2 = () => count2.value = 0

    return {
        count2,
        increment2,
        decrementar2,
        reiniciar2,

    }
})
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(UseCounter1, import.meta.hot))
// }