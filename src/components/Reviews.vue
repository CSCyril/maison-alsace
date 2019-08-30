<template>
    <div id="reviews">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>Avis ―</h3>
                </b-col>
                <div class="reviews-import">
                    <b-row>
                        <b-col cols="6" class="review">
                            /!\ INTEGRATION API
                            <p>La maison est magnifique, très bien équipée, très bien décorée pour les fêtes sur la façade , appartements très propres, le propriétaire très accueillant et disponible</p>
                        </b-col>
                        <b-col cols="6" class="review">
                            /!\ INTEGRATION API
                            <p>Très jolie bâtisse, au style typiquement alsacien. Cadre accueillant et chaleureux. Hôte très sympa et arrangeant 😉 Parfait pour un petit week cosy en Alsace 😊</p>
                        </b-col>
                    </b-row>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<style>
#reviews .reviews-import {
    width: 100%;
}

#reviews .reviews-import .review {
    min-height: 200px;
}

#reviews .reviews-import .review:nth-child(even) {
    background-color: #f4f0ed;
}

#reviews .reviews-import .review:nth-child(odd) {
    background-color: #38393b;
    color: #fff;
}
</style>