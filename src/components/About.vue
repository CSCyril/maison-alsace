<template>
    <div id="about">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>A propos ―</h3>
                </b-col>
                <b-col cols="4" class="left-about">
                    <div class="left-about-content">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque unde, sequi, incidunt, quia hic ea cum voluptate maiores distinctio molestiae quos enim facere blanditiis. Sed vitae maiores minus perspiciatis ducimus.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis magnam, totam nobis numquam amet obcaecati ratione cupiditate assumenda molestiae possimus a! Magni ad corrupti qui nostrum voluptate doloremque. Tempora, esse.
                        </p>
                        <b-button>En savoir plus</b-button>
                    </div>
                </b-col>
                <b-col cols="8">
                    <b-img :src="require('../assets/room1.jpg')" fluid></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
</script>

<style>
#about {
    clear: both;
    position: relative;
}

.left-about {
    background-color: #f4f0ed;
    position: relative;
}

.left-about-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>