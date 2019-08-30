<template>
    <div id="rooms">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>Chambres ―</h3>
                </b-col>
                <b-col cols="4">
                    <b-img :src="require('../assets/room2.jpg')" fluid></b-img>
                    <h4>La Glycine</h4>
                    <p>150€ / nuit</p>
                    <ul>
                        <li>2 lits | </li>
                        <li>2 salles de bain | </li>
                        <li>45m²</li>
                    </ul>
                </b-col>
                <b-col cols="4">
                    <b-img :src="require('../assets/room3.jpg')" fluid></b-img>
                    <h4>L'Hortensia</h4>
                    <p>150€ / nuit</p>
                    <ul>
                        <li>2 lits | </li>
                        <li>2 salles de bain | </li>
                        <li>45m²</li>
                    </ul>
                </b-col>
                <b-col cols="4">
                    <b-img :src="require('../assets/room4.jpg')" fluid></b-img>
                    <h4>L'Olivier</h4>
                    <p>150€ / nuit</p>
                    <ul>
                        <li>2 lits | </li>
                        <li>2 salles de bain | </li>
                        <li>45m²</li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
#rooms {
    position: relative;
}
</style>