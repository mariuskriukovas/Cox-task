<template>
    <v-data-table
            :headers="headers"
            :items="value"
            :server-items-length="totalElements"
            class="elevation-1"
            hide-default-footer
            item-key="uid"
    >
        <template v-slot:[`item.value`]="{ item }">
            <div v-if="isY(item)">
                <v-chip
                        color="black"
                        outlined
                >{{ item.value }}
                </v-chip>
            </div>
            <div v-else-if="isNotNullOrBlank(item)">
                <v-chip>{{ item.value }}</v-chip>
            </div>
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
    },
    methods: {
        isY: (item) => item?.value?.trim() === "Y",
        isNotNullOrBlank: (item) => item?.value && item?.value?.length > 0
    }
}
</script>
