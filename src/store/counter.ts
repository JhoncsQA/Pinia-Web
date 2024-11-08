import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {

    state: () => {

        return {
            count: 0,
            total: 0,
            incre: 5,
            valincre: 1
        }
    },
    getters: {
        times2: (state) => state.count * state.incre
    },
    actions: {
        increment() {
            this.count += this.incre
            this.total = this.total+this.times2
        },
        reset() {
            this.count = 0
            this.total = 0
            this.incre = 5
            this.valincre = 1
        }
    }
})