<template>
    <v-data-table
            :headers="headers"
            :items="value"
            :server-items-length="totalElements"
            class="elevation-1"
            hide-default-footer
            item-key="uid"
    >
        <template v-slot:[`item.vin`]="{ item }">
            <p>{{ item }}</p>
        </template>
    </v-data-table>
</template>

<script>

export default {
    name: 'AttributeTable',
    props: {
        value: {
            type: Array,
            default() {
                return []
            },
            required: true,
        },
    },
    computed: {
        totalElements() {
            return this.value?.length
        }
    },
    data() {
        return {
            headers: [
                {
                    text: 'Attribute',
                    align: 'start',
                    value: 'attribute',
                },
                {
                    text: 'Value',
                    align: 'start',
                    value: 'value',
                },
            ],
        }
    }
}
</script>
