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
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data: () => ({
        //
    }),
};
</script>
