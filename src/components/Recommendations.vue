<template>
    <div id="recommendations">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>Recommandations ―</h3>
                </b-col>
                <b-col cols="4">
                    <b-img :src="require('../assets/restaurant.jpg')" fluid></b-img>
                    <h4>Restaurants</h4>
                </b-col>
                <b-col cols="4">
                    <b-img :src="require('../assets/visite.jpg')" fluid></b-img>
                    <h4>Visites</h4>
                </b-col>
                <b-col cols="4">
                    <b-img :src="require('../assets/piscine.jpg')" fluid></b-img>
                    <h4>Piscines & SPA</h4>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
#recommendations img {
    max-height: 460px;
    width: 100%;
    /* object-fit: fill; */
}
</style>