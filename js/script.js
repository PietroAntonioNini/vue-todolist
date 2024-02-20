const {createApp} = Vue

createApp({
    data() {
        return {
            todos: [
                {
                  text: 'Comprare il latte',
                  done: false,
                },
                {
                  text: 'Fare il bucato',
                  done: true,
                },
                {
                  text: 'Andare dal dottore',
                  done: false,
                },
                {
                    text: 'Finire il lavoro su VS',
                    done: true,
                },
            ],
        }
    },
    methods: {

    },
}).mount('#app');