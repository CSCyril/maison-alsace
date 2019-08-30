<template>
    <div id="home">
        <Header />
        <About />
        <Rooms />
        <Booking />
        <Recommendations />
        <Reviews />
        <Galery />
        <Contact />
        <Map />
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import About from '../components/About.vue'
    import Rooms from '../components/Rooms.vue'
    import Booking from '../components/Booking.vue'
    import Recommendations from '../components/Recommendations.vue'
    import Reviews from '../components/Reviews.vue'
    import Galery from '../components/Galery.vue'
    import Contact from '../components/Contact.vue'
    import Map from '../components/Map.vue'

    export default {
        components: {
            Header,
            About,
            Rooms,
            Booking,
            Recommendations,
            Reviews,
            Galery,
            Contact,
            Map
        }
    }
</script>

<style>
h3 {
    margin-top: 80px;
    margin-bottom: 20px;
    text-align: left;
}
</style>