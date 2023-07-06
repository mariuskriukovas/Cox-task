<template>
    <v-container>
        <v-row class="ml-2 mr-2">
            <v-col cols="12">
                <attribute-table v-model="titleInformationAttributes"></attribute-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TitleInformationApi from "@/api/mockTitleInformationApi.js";
import AttributeTable from "@/components/AttributeTable.vue";


export default {
    name: 'TitleInformation',
    components: {AttributeTable},
    data: () => ({
        titleInformationAttributes: [],
    }),
    async mounted() {
        const vehicleUid = this.$route.params?.uid
        this.titleInformationAttributes = await TitleInformationApi.getTitleInformation(vehicleUid)
    },
    methods: {}
}
</script>
