<template>
    <div id="map">
        <b-container fluid>
        </b-container>
    </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";


export default {
    name: 'test-map',
    mounted () {
        var map = L.map(this.$el, {gestureHandling: true}).setView([48.573406, 7.752111], 15);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a','b','c']
        }).addTo(map);
        var loc = [48.573406, 7.752111];
        var marker = L.marker(loc).addTo(map);
        marker.bindTooltip("Here is the marker");
    }
}
</script>

<style>
#map {
    height: 450px;
    margin-top: 80px;
}
</style>