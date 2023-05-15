import {defineStore} from 'pinia'

export const UseCounter1 = defineStore('counter1',
{

   state: () =>  ({
        count: 1
   }),
   
    
    getters: {
        squareCount: ( state ) => state.count * state.count,
    },

   actions: {
        increment: ( state ) => {
            state.count ++
        }
    }
})

export const UseCounter2 = defineStore("counter2", () => {
    const count = ref(1)

    const squareCount = computed(() => count.value * count.value)
    const increment = () => count.value++

    return {
        count,
        squareCount,
        increment
    }
})