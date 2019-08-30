<template>
    <div id="proper-rooms">
        <div class="head-color-band"></div>
        <b-container>
            <b-row>
                <b-col md="4" class="head-title">
                    <h2>Nos chambres</h2>
                </b-col>
                <b-col md="12">
                    <div class="proper-room">
                        <b-img :src="require('../assets/room1.jpg')" fluid></b-img>
                        <div class="img-box">
                            <h4>150€ / nuit</h4>
                            <h3>L'Olivier</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt nobis magni alias eaque amet consequuntur porro excepturi ducimus iure. Distinctio eos ea atque optio. A culpa quos velit in.</p>
                            <b-button>Réserver</b-button>
                        </div>
                    </div>
                </b-col>
                <b-col md="12">
                    <div class="proper-room">
                        <b-img :src="require('../assets/room2.jpg')" fluid></b-img>
                        <div class="img-box">
                            <h4>150€ / nuit</h4>
                            <h3>L'Olivier</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt nobis magni alias eaque amet consequuntur porro excepturi ducimus iure. Distinctio eos ea atque optio. A culpa quos velit in.</p>
                            <b-button>Réserver</b-button>
                        </div>
                    </div>
                </b-col>
                <b-col md="12">
                    <div class="proper-room">
                        <b-img :src="require('../assets/room3.jpg')" fluid></b-img>
                        <div class="img-box">
                            <h4>150€ / nuit</h4>
                            <h3>L'Olivier</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt nobis magni alias eaque amet consequuntur porro excepturi ducimus iure. Distinctio eos ea atque optio. A culpa quos velit in.</p>
                            <b-button>Réserver</b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
.head-color-band {
    height: 100px;
    background-color: brown;
    width: 100%;
}

.head-title {
    background-color: #38393b;
    color: #fff;
    height: 100px;
    margin-top: -50px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.proper-room {
    margin-bottom: 50px;
    height: 100%;
}

.proper-room img {
    max-height: 500px;
    width: 100%;
    object-fit: cover;
}

.proper-room .img-box {
    position: absolute;
    background-color: #38393b;
    right: 10%;
    width: 40%;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
}

.proper-room .img-box::after {
    content: "";
    display: block;
    padding-bottom: 100%;
}
</style>