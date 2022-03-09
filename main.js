const app = Vue.createApp({
  data() {
    return{
      showBooks: true,
      title: '2 Gay Brothers',
      author: 'Buck Fuckem',
      age: '4'
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
    // changeTitle(abc) {
    //   this.title = abc
    // }
  }
})

app.mount('#app')
