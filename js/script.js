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
        //rimuovo il todo dalla lista
        removeTodo(todo) {
            //rimuovo con splice, a cui serve l'indice dell'oggetto e il numero di elementi da rimuovere
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    },
}).mount('#app');