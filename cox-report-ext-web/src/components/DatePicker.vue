<template>
    <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            min-width="auto"
            offset-y
            transition="scale-transition"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                    v-model="date"
                    :label="label"
                    clearable
                    readonly
                    solo
                    v-bind="attrs"
                    v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
                v-model="date"
                @input="menu = false"
        ></v-date-picker>
    </v-menu>
</template>

<script>

export default {
    name: 'DatePicker',
    props: {
        value: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
            default() {
                return null
            }
        },
    },
    data() {
        return {
            date: null,
            menu: false,
        };
    },
    watch: {
        date: function (newVal) {
            this.$emit('input', newVal)
        },
        value: {
            handler: function (newVal) {
                if (newVal !== this.date) {
                    this.date = newVal
                }
            },
            deep: true,
            immediate: true
        },
    },
}
</script>
