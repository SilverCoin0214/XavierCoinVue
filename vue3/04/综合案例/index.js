const App = {
    template: '#my-app',
    data() {
        return {
            books: [
                {
                    name: '<算法导论>',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    name: '<UNIX编程艺术>',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    name: '<编程珠玑>',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    name: '<代码大全>',
                    date: '2006-3',
                    price: 128.00,
                    count: 1
                }
            ]
        }
    },

    methods: {
        decrement(index) {
            this.books[index].count--
        },
        increment(index) {
            this.books[index].count++
        },
        removeBook(index) {
            this.books.splice(index, 1)
        },
        formatPrice(price) {
            return '¥' + price
        }
    },
    computed: {
        totalPrice() {
            let total = 0
            for (let book of this.books) {
                total += book.price * book.count
            }

            return total
        },

        filterBooks() {
            return this.books.map((item, index) => {
                const newItem = Object.assign({}, item)
                newItem.price = '¥' + item.price
                return newItem
            })
        }


    }
}



Vue.createApp(App).mount('#app')
