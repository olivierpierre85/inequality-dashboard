<template>
  <div> Header
          <!-- <div position="fixed">
          {mobileView ? displayMobile() : displayDesktop()}
          </div>
          <div />
          <Paper square elevation={0} className={classes.headerText}>
            <Typography  variant="h1" className={classes.title}>
              <span>We show you Inequality with Numbers</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              <span>A graphical representation of Inequality in the world, using the latest numbers of the World Inequality Database</span>
            </Typography>
          </Paper> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    toggleFav(book) {
      console.log(book);
      book.isFav = ! book.isFav
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
