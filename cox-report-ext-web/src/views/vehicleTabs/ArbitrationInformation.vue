<template>
    <v-container>
        <v-row class="ml-2 mr-2">
            <v-col cols="12">
                <attribute-table v-model="arbitrationInformationAttributes"></attribute-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import AttributeTable from "@/components/AttributeTable.vue";
import ArbitrationInformationApi from "@/api/mockArbitrationInformationApi";

export default {
    name: 'ArbitrationInformation',
    components: {AttributeTable},
    data: () => ({
        arbitrationInformationAttributes: [],
    }),
    async mounted() {
        const vehicleUid = this.$route.params?.uid
        this.arbitrationInformationAttributes = await ArbitrationInformationApi.getArbitrationInformation(vehicleUid)
    },
    methods: {}
}
</script>
