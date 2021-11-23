const app = Vue.createApp({
  data() {
    return {
      url: 'http://google.com',
      showBooks: true,
      title: 'One 4all',
      author: 'Gabriel',
      reviews: 23,
      popular: false,
      x: 0,
      y: 0,
      books: [{
        title: 'name of the wind',
        author: 'patrick rothfuss',
        img: 'assets/1.jpg',
        isFav: true,
      }, 
      {
        title: 'google',
        author: 'eric',
        img: 'assets/2.jpg',
        isFav: true
      },
      {
        title: 'captains',
        author: 'machado',
        img: 'assets/3.jpg',
        isFav: false
      }]
    }
  },
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    increase() {
      this.reviews += 1;
    },
    decrease() {
      this.reviews -= 1;
    },
    randomReview() {
      const count = parseInt(Math.random() * 100, 10);
      if (count > 75) this.popular = true;
      else this.popular = false;
      this.reviews = count;
    },
    handleEvents(e, data) {
      console.log(e, e.type)
      if (data) console.log(data)
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY
    }
  },
  computed: {
    filteredFav() {
      return this.books.filter((book) => book.isFav)
    }
  }
});

app.mount('#app');