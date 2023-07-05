<template>
    <v-app>
        <v-app-bar
                app
                color="#ffffff"
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://www.coxautoinc.com/wp-content/themes/coxautoinc/dist/images/logo-brand-stacked.svg"
                        transition="scale-transition"
                        width="150"
                />
            </div>
        </v-app-bar>

        <v-main>
            <HelloWorld/>
        </v-main>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
    name: 'App',

    components: {
        HelloWorld,
    },

    data: () => ({
        //
    }),
};
</script>
