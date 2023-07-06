<template>
    <v-container>
        <v-row class="mt-2 mb-2">
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            class="mx-2"
                            color="primary"
                            dark
                            fab
                            small
                            v-bind="attrs"
                            @click="navigateToHomeView"
                            v-on="on"
                    >
                        <v-icon dark>
                            mdi-arrow-left
                        </v-icon>
                    </v-btn>
                </template>
                <span>Navigate to Sales Transactions</span>
            </v-tooltip>
        </v-row>
        <v-card elevation="2">
            <v-card-title>Vehicle Auction History</v-card-title>
            <v-row class="ml-2 mr-2">
                <v-col cols="12">
                    <v-data-table
                            :headers="saleTransactionHeaders"
                            :items="saleTransactions"
                            :items-per-page="10"
                            :options.sync="saleTransactionOptions"
                            :server-items-length="saleTransactionTotalElements"
                            class="elevation-1"
                            item-key="uid"
                    ></v-data-table>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="mt-6" elevation="2">
            <v-card-title>Vehicle Information</v-card-title>
            <v-tabs show-arrows>
                <v-tab
                        v-for="(tab, index) in tabs"
                        :key="tab.route.name"
                        :ripple="false"
                        :to="tab.route"
                        :value="index"
                        @change="handleTabChange(index)"
                >
                    {{ tab.title }}
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="activeTab">
                <v-tab-item v-for="(tab, index) in tabs" :key="index" :value="index">
                    <router-view/>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </v-container>
</template>

<script>
import SaleTransactionApi from "@/api/mockSaleTransactionApi.js";
import {
    ARBITRATION_INFORMATION_ROUTE_NAME,
    HOME_ROUTE_NAME,
    PAYMENT_INFORMATION_TAB_ROUTE_NAME
} from "@/plugins/router";

export default {
    name: 'VehicleView',
    watch: {
        saleTransactionOptions: {
            async handler() {
                await this.getSalesTransactions()
            },
            deep: true,
        },
    },

    data: () => ({
        saleTransactionOptions: {},
        saleTransactionHeaders: [
            {
                text: 'VIN',
                align: 'start',
                value: 'vin',
                width: '300px'
            },
            {
                text: 'VRA',
                align: 'start',
                value: 'vra',
                width: '100px'
            },
            {
                text: 'Auction Location',
                align: 'start',
                value: 'auctionLocation',
            },
            {
                text: 'Sale Date',
                align: 'start',
                value: 'saleDate',
            },
            {
                text: 'Buyer Name',
                align: 'start',
                value: 'buyerName',
            },
            {
                text: 'Seller Name',
                align: 'start',
                value: 'sellerName',
            },
            {
                text: 'Vehicle Year',
                align: 'start',
                value: 'vehicleYear',
            },
            {
                text: 'Make',
                align: 'start',
                value: 'make',
            },
            {
                text: 'Model',
                align: 'start',
                value: 'model',
            },
            {
                text: 'Auction Code',
                align: 'start',
                value: 'auctionCode',
            },
        ],
        saleTransactions: [],
        saleTransactionTotalElements: null,
        activeTab: 0,
        tabs: []
    }),
    async mounted() {
        this.tabs = [
            {
                title: "Payment Information",
                name: PAYMENT_INFORMATION_TAB_ROUTE_NAME,
                route: {name: PAYMENT_INFORMATION_TAB_ROUTE_NAME, params: this.$route.params},
            },
            {
                title: "Arbitration Information",
                name: ARBITRATION_INFORMATION_ROUTE_NAME,
                route: {name: ARBITRATION_INFORMATION_ROUTE_NAME, params: this.$route.params},
            }
        ]
    },
    methods: {
        handleTabChange(value) {
            this.activeTab = value
        },
        async getSalesTransactions() {
            const data = await SaleTransactionApi.getSalesTransactions(this.filter, this.saleTransactionOptions)
            this.saleTransactions = data?.content ?? []
            this.saleTransactionTotalElements = data?.totalElements
        },
        async navigateToHomeView() {
            await this.$router.push({name: HOME_ROUTE_NAME, params: {}})
        },
    }
}
</script>
