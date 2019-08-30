<template>
    <div id="contact">
        <b-container>
            <b-row>
                <b-col md="12">
                    <h3>Nous contacter ―</h3>
                </b-col>
                <b-col md="6">
                    <b-form @submit="onSubmit">
                        <b-form-group>
                            <b-form-input id="input-1" v-model="form.name" required placeholder="Nom"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input id="input-2" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input id="input-3" v-model="form.subject" required placeholder="Sujet"></b-form-input>
                        </b-form-group>
                        <b-form-textarea id="textarea" v-model="form.text" required placeholder="Message" rows="4" max-rows="6"></b-form-textarea>
                        <b-button type="submit">Envoyer</b-button>
                    </b-form>
                </b-col>
                <b-col md="6" class="coord">

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                email: '',
                name: '',
                subject: '',
                text: ''
                },
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.subject = ''
                this.form.text = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                this.show = true
                })
            }
        }
    }
</script>

<style>
.coord {
    background-color: #f4f0ed;
}
</style>