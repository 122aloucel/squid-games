const app = Vue.createApp({
  data() {
    return{
      showBooks: true,
      { title: 'name of the wind', author: 'patrick rothfuss', img:'img/goku.png' },
      { title: 'name of the wind', author: 'patrick rothfuss', img:'img/gam.png'  },
      { title: 'name of the wind', author: 'patrick rothfuss', img:'img/granny.png'  },
      // title: '2 Gay Brothers',
      // author: 'Buck Fuckem',
      // age: '4',
      // x: 0,
      // y: 0,
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
    // changeTitle(abc) {
    //   this.title = abc
    // }
  }
})

app.mount('#app')
