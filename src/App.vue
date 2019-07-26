<template>
  <div id="app">
<!--     <img alt="Vue logo" src="./assets/main-logo.png">
    <router-link to="/">Accueil</router-link>
    <HelloWorld :msg="greeting"/> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./assets/main-logo.png"  height="70" class="d-inline-block align-top" alt="" style="opacity: 1">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#"><router-link to="/">Accueil</router-link><span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">A propos</a>
            <a class="nav-item nav-link" href="#">Chambres</a>
            <a class="nav-item nav-link" href="#">Galerie</a>
            <a class="nav-item nav-link" href="#">Nous contacter</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// componenets
import HelloWorld from './components/HelloWorld.vue'

// models
import msg from './models/Message.js'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      greeting: ''
    }
  },
  created () {
    this.getMsg()
  },
  methods: {
    getMsg () {
      return msg.getInitMsg()
        .then(msg => this.greeting = msg)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 20px 0 20px;
}
</style>
