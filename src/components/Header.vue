<template>
    <div id="header">
        <b-container fluid>
            <b-row>
                <div class="header-title">
                    <h1>Maison d'alsace.</h1>
                    <h2>Le charme sans prétention</h2>
                    <b-button>Réserver</b-button>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    
</script>

<style>
#header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/header.jpg');
    height: calc(100vh - 90px);
    min-height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#header .header-title {
    position: absolute;
    z-index: 10;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#header .header-title button {
    background-color: #fff;
    border: none;
    border-radius: 0;
    color: #000;
    font: normal normal 700 19px/1.4em 'Open Sans Condensed', sans-serif;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

#header h1 {
    font: normal normal bold 119px/1.4em 'playfair display',serif;
    color: rgb(255, 255, 254);
    letter-spacing: 0.06em;
    line-height: 1em;
}

#header h2 {
    font: normal normal normal 19px/1.4em 'Open Sans Condensed', sans-serif;
    color: rgb(255, 255, 254);
    letter-spacing: 0.45em;
    line-height: 1.4em;
}
</style>