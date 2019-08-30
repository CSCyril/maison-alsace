<template>
    <div id="booking">
        <b-container fluid>
            <b-container>
                <b-row>
                    <b-col cols="5">
                        <h3>Réservation ―</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta facilis minima, vero quos quam amet quaerat numquam repudiandae.</p>
                    </b-col>
                    <b-col cols="7">
                        <b-row>
                            <b-col cols="6"><HotelDatePicker :i18n="frBook" format="DD/MM/YYYY" /></b-col>
                            <b-col cols="3">Voyageurs</b-col>
                            <b-col cols="3">
                                <button type="submit" class="btn btn-primary btn_brown">Rechercher</button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
    </div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker';

export default {
    components: {
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
#booking {
    background-color: #38393b;
    height: 250px;
    color: #fff;
}
</style>