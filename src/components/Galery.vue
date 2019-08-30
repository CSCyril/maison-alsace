<template>
    <div id="galery">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>Galerie ―</h3>
                </b-col>
                <b-col md="4">
                    <b-img :src="require('../assets/room1.jpg')" fluid />
                    <b-img :src="require('../assets/room5.jpg')" fluid />
                </b-col>
                <b-col md="4">
                    <b-img :src="require('../assets/room6.jpg')" fluid />
                    <b-img :src="require('../assets/room3.jpg')" fluid />
                </b-col>
                <b-col md="4">
                    <b-img :src="require('../assets/room2.jpg')" fluid />
                    <b-img :src="require('../assets/room5.jpg')" fluid />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
#galery img {
    margin-bottom: 30px;
} 
</style>