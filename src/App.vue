<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand">
            <img src="./assets/main-logo.png"  height="40" class="d-inline-block align-top" alt="" style="opacity: 1">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-item nav-link active"><router-link to="/">Accueil</router-link><span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link">A propos</a>
              <a class="nav-item nav-link"><router-link to="/rooms">Chambres</router-link></a>
              <a class="nav-item nav-link">Galerie</a>
              <a class="nav-item nav-link">Nous contacter</a>
            </div>
          </div>
        </div>
      </nav>
      <router-view/>
    </div>
<!--     <img alt="Vue logo" src="./assets/main-logo.png">
    <router-link to="/">Accueil</router-link>
    <HelloWorld :msg="greeting"/> -->
    <footer>
      <b-container fluid class="top-footer">
        <b-container>
          <b-row>
            <b-col md="3">
              LOGO
            </b-col>
            <b-col md="3">
              <ul>
                <li>A propos</li>
                <li>Chambres</li>
                <li>Galerie</li>
                <li>A côté</li>
              </ul>
            </b-col>
            <b-col md="3">
              <ul>
                <li>Accueil</li>
                <li>Termes & Conditions</li>
                <li>FAQ</li>
                <li>Nous contacter</li>
              </ul>
            </b-col>
            <b-col md="3">
              <ul>
                <li>23 Rue Quelquechose, 67000 STRASBOURG</li>
                <li>03.03.03.03.03</li>
                <li>contact@mail.fr</li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container fluid class="bottom-footer">
        <b-row>
          <b-col md="12">
            <p>© 2019 Copyright: BLABLABLA</p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Playfair+Display&display=swap');

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

footer {
  height: 200px;
  background-color: #38393b;
  color: #fff;
}

.top-footer {
  height: 70%;
}

.bottom-footer {
  background-color: #262627;
  height: 30%;
}
</style>
