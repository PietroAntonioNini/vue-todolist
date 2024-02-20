const {createApp} = Vue

createApp({
    data() {
        return {

            //salvo un nuovo todo
            newTodo: '',

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
        },

        //aggiungo il todo alla lista con l'input
        addTodo() {
            //aggiungo un nuovo oggetto todo all'array

            //controllo per impedire l'inserimento di un campo vuoto
            if (this.newTodo.trim() === '') {
                return;
            }

            this.todos.push({
              text: this.newTodo,
              done: false,
            });

            //svuoto il campo di input
            this.newTodo = '';
        },

        //function per alternare il "done" dei todo da true a false
        signTodo(todo) {
            todo.done = !todo.done;
        }
    },
}).mount('#app');