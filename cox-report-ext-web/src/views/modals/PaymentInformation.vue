<template>
    <v-dialog
            v-model="paymentInformationData.visible"
            max-width="800px"
            persistent
    >
        <v-card>
            <v-card-title>
                Payment Information
                <v-spacer></v-spacer>
                <v-btn
                        color="blue darken-1"
                        text
                        @click="paymentInformationData.visible = false"
                >
                    <v-icon class="ml-1" dark>
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-container>
                <v-row class="ml-2 mr-2">
                    <v-col cols="12">
                        <attribute-table v-model="paymentInformationAttributes"></attribute-table>
                    </v-col>
                </v-row>
            </v-container>
            <v-card class="mt-2 ml-4 mr-4" elevation="4">
                <v-card-title>Fee Details</v-card-title>
                <v-row class="ml-2 mr-2">
                    <v-col cols="12">
                        <attribute-table v-model="feeDetailAttributes"></attribute-table>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="mt-6 ml-4 mr-4" elevation="4">
                <v-card-title>Sale Information</v-card-title>
                <v-row class="ml-2 mr-2">
                    <v-col cols="12">
                        <attribute-table v-model="saleInformationAttributes"></attribute-table>
                    </v-col>
                </v-row>
            </v-card>
        </v-card>
    </v-dialog>
</template>

<script>


import {useModalStorage} from "@/store/modalStorage";
import {mapState} from "pinia";
import AttributeTable from "@/components/AttributeTable.vue";
import PaymentInformationApi from "@/api/mockPaymentInformationApi";
import FeeDetailsApi from "@/api/mockFeeDetailsApi";
import SalesInformationApi from "@/api/mockSalesInformationApi";

export default {
    name: 'PaymentInformation',
    components: {AttributeTable},
    computed: {
        ...mapState(useModalStorage, ['paymentInformationData']),
    },
    data: () => ({
        paymentInformationAttributes: [],
        feeDetailAttributes: [],
        saleInformationAttributes: [],
    }),
    methods: {},
    async mounted() {
        this.paymentInformationAttributes = await PaymentInformationApi.getPaymentInformation(this.paymentInformationData.auctionUid)
        this.feeDetailAttributes = await FeeDetailsApi.getFeeDetails(this.paymentInformationData.auctionUid)
        this.saleInformationAttributes = await SalesInformationApi.getSalesInformation(this.paymentInformationData.auctionUid)
    },
}
</script>
