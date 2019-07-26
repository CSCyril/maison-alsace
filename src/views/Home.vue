<template>
    <div id="accueil">
        <header>
            <h1>Le luxe sans prétention.</h1>
            <carousel :perPage="1" :paginationPosition="bottom-overlay">
                <slide>
                    <img src="../assets/room1.jpg" />
                </slide>
                <slide>
                    <img src="../assets/room2.jpg" />
                </slide>
                <slide>
                    <img src="../assets/room3.jpg" />
                </slide>
            </carousel>
        </header>

        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h3>A propos ―</h3>
                    </div>
                    <div class="col-md-4 top_text text-left">
                        <div class="top_text_block">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque unde, sequi, incidunt, quia hic ea cum voluptate maiores distinctio molestiae quos enim facere blanditiis. Sed vitae maiores minus perspiciatis ducimus.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis magnam, totam nobis numquam amet obcaecati ratione cupiditate assumenda molestiae possimus a! Magni ad corrupti qui nostrum voluptate doloremque. Tempora, esse.
                            </p>
                            <button type="submit" class="btn btn-primary btn_brown">En savoir plus</button>
                        </div>
                    </div>
                    <div class="offset-md-3 col-md-9 bottom_img">
                        <img src="../assets/room2.jpg" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

        <div id="rooms">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h3>Chambres ―</h3>
                    </div>
                    <div class="col-md-4 text-left">
                        <div class="room">
                            <h4>La Glycine</h4>
                            <img src="../assets/room2.jpg" class="img-fluid" />
                        </div>
                        <p><span>€ 150 /</span> nuit </p>
                        <ul>
                            <li>2 lits | </li>
                            <li>2 salles de bain | </li>
                            <li>45m²</li>
                        </ul>
                    </div>
                    <div class="col-md-4 text-left">
                        <div class="room">
                            <h4>L'Hortensia</h4>
                            <img src="../assets/room3.jpg" class="img-fluid" />
                        </div>
                        <p><span>€ 150 /</span> nuit </p>
                        <ul>
                            <li>2 lits | </li>
                            <li>2 salles de bain | </li>
                            <li>45m²</li>
                        </ul>
                    </div>
                    <div class="col-md-4 text-left">
                        <div class="room">
                            <h4>L'Olivier</h4>
                            <img src="../assets/room4.jpg" class="img-fluid" />
                        </div>
                        <p><span>€ 150 /</span> nuit </p>
                        <ul>
                            <li>2 lits | </li>
                            <li>2 salles de bain | </li>
                            <li>45m²</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="booking">
            <div class="container-fluid h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-md-5 text-left reservation">
                            <h3>Réservation ―</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta facilis minima, vero quos quam amet quaerat numquam repudiandae.</p>
                        </div>
                        <div class="col-md-7" style="padding-top: 5px;">
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <HotelDatePicker :i18n="frBook" format="DD/MM/YYYY" />
                                    </div>
                                    <div class="col-md-3">Voyageurs</div>
                                    <div class="col-md-3"><button type="submit" class="btn btn-primary btn_brown">Rechercher</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="recommendations">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h3>Recommendations ―</h3>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/restaurant.jpg" class="img-fluid" />
                        <h4>Restaurants</h4>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/visite.jpg" class="img-fluid" />
                        <h4>Visites</h4>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/piscine.jpg" class="img-fluid" />
                        <h4>Piscines et SPA</h4>
                    </div>
                </div>
            </div>
        </div>

        <div id="gallery">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h3>Galerie ―</h3>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/room1.jpg" class="img-fluid" />
                        <img src="../assets/room5.jpg" class="img-fluid" />
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/room6.jpg" class="img-fluid" />
                        <img src="../assets/room3.jpg" class="img-fluid" />
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/room4.jpg" class="img-fluid" />
                        <img src="../assets/room5.jpg" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

        <div id="reviews">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h3>Avis ―</h3>
                    </div>
                    <div class="col-md-6 review-left">
                        dsdsdsd
                    </div>
                    <div class="col-md-6 review-right">
                        sdsddsd
                    </div>
                </div>
            </div>
        </div>

        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <h3>Nous contacter ―</h3>
                    </div>
                    <div class="container form">
                        <div class="row">
                            <div class="col-md-6">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Mail">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Subject">
                                    </div>
                                    <div class="form-group"  style="margin-bottom: 0">
                                        <textarea class="form-control" rows="4" placeholder="Message"></textarea>
                                    </div>                         
                                </form>
                            </div>
                            <div class="col-md-6 contact-right">
                                ffffff
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-right">
                        <button type="submit" class="btn btn-primary btn_brown">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import HotelDatePicker from 'vue-hotel-datepicker';

export default {
    components: {
        Carousel,
        Slide,
        HotelDatePicker
    },
    data() {
        return {
            frBook: {
                night: 'Nuit',
                nights: 'Nuits',
                'day-names': ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
                'check-in': 'Arrivé',
                'check-out': 'Départ',
                'month-names': ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
}
        }
    }
}
</script>

<style>
img {
    opacity: 0.7;
}

.VueCarousel-slide {
    position: relative;
    background: #38393b;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    height: 800px;
}

.VueCarousel-slide img {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.btn_brown {
    background: #8D6C49;
    color: #fff;
    border-radius: 0;
    border-color: #8D6C49;
    height: 48px;
    margin-top: 3px;
}

header h1 {
    position: absolute;
    z-index: 2;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    /* text-transform: uppercase; */
}

#about {
    margin-top: 75px;
    margin-bottom: -500px;
}

.top_text {
    position: relative;
    z-index: 2;
    height: 500px;
    margin-top: 50px;
    background-color: #f4f0ed;
}

.top_text_block {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 25px;
    padding-right: 40px;
}

.bottom_img {
    height: 500px;
    padding: 0;
    top: -550px;
}

.bottom_img img {
    height: 100%;
    width: 100%;
}

#about h3 {
    margin-top: -50px;
}

#rooms {
    margin-top: 75px;
}

.room {
    background: #38393b;
}

#rooms h4 {
    position: absolute;
    z-index: 2;
    top: 50%;
    bottom: 50%;
    left: 10%;
    color: #fff;
}

#rooms span {
    font-size: 24px;
    font-weight: 600;
}

#rooms ul {
    padding-left: 0;
}

#rooms li {
    display: inline;
}

#booking {
    background-color: #38393b;
    height: 250px;;
}

.reservation {
    color: #fff;
}

.datepicker__wrapper {
    height: 200px;
}

#recommendations img {
    max-height: 466px;
    width: 100%;
    object-fit: fill;
}

#gallery img {
    padding-bottom: 30px;
}

.review-left {
    background-color: #38393b;
    height: 200px;
}

.review-right {
    background-color: #f4f0ed;
    height: 200px;
}

form {
    margin-left: -15px;
}

.contact-right {
    background-color: #f4f0ed;
}
</style>