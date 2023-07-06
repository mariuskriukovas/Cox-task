<template>
    <v-container>
        <v-card class="pb-4" elevation="2">
            <v-card-title>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                class="mx-2"
                                color="primary"
                                dark
                                fab
                                outlined
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
                Vehicle Auction
            </v-card-title>
            <v-row class="ml-2 mr-2">
                <v-col align="left" cols="3">
                    <header-label v-model="header.vin" title="VIN"></header-label>
                </v-col>
                <v-col align="left" cols="3">
                    <header-label v-model="header.vehicleYear" title="Vehicle Year"></header-label>
                </v-col>
                <v-col align="left" cols="3">
                    <header-label v-model="header.make" title="Make"></header-label>
                </v-col>
                <v-col align="left" cols="3">
                    <header-label v-model="header.model" title="Model"></header-label>
                </v-col>
            </v-row>
            <v-card class="mt-2 ml-4 mr-4" elevation="4">
                <v-card-title>History</v-card-title>
                <v-row class="ml-2 mr-2">
                    <v-col cols="12">
                        <v-data-table
                                :headers="auctionHistoryHeaders"
                                :items="auctionHistoryRecords"
                                :items-per-page="10"
                                :options.sync="auctionHistoryOptions"
                                :server-items-length="auctionHistoryTotalElements"
                                class="elevation-1"
                                item-key="uid"
                        ></v-data-table>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="mt-6 ml-4 mr-4" elevation="4">
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
        </v-card>
    </v-container>
</template>

<script>
import SaleTransactionApi from "@/api/mockSaleTransactionApi.js";
import {ARBITRATION_INFORMATION_ROUTE_NAME, HOME_ROUTE_NAME, TITLE_INFORMATION_ROUTE_NAME} from "@/plugins/router";
import HeaderLabel from "@/components/HeaderLabel.vue";

export default {
    name: 'VehicleView',
    components: {HeaderLabel},
    watch: {
        auctionHistoryOptions: {
            async handler() {
                await this.getSalesTransactions()
            },
            deep: true,
        },
    },

    data: () => ({
        header: {
            vin: "",
            vehicleYear: "",
            make: "",
            model: "",
        },
        auctionHistoryOptions: {},
        auctionHistoryHeaders: [
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
                text: 'Auction Code',
                align: 'start',
                value: 'auctionCode',
            },
        ],
        auctionHistoryRecords: [],
        auctionHistoryTotalElements: null,
        activeTab: 0,
        tabs: []
    }),
    async mounted() {
        this.tabs = [
            {
                title: "Title Information",
                name: TITLE_INFORMATION_ROUTE_NAME,
                route: {name: TITLE_INFORMATION_ROUTE_NAME, params: this.$route.params},
            },
            {
                title: "Arbitration Information",
                name: ARBITRATION_INFORMATION_ROUTE_NAME,
                route: {name: ARBITRATION_INFORMATION_ROUTE_NAME, params: this.$route.params},
            },
        ]

        const vehicleUid = this.$route.params?.uid
        this.header = await SaleTransactionApi.getVehicleHeader(vehicleUid)
    },
    methods: {
        handleTabChange(value) {
            this.activeTab = value
        },
        async getSalesTransactions() {
            const vehicleUid = this.$route.params?.uid
            const data = await SaleTransactionApi.getVehicleAuctionHistory(vehicleUid, this.auctionHistoryOptions)
            this.auctionHistoryRecords = data?.content ?? []
            this.auctionHistoryTotalElements = data?.totalElements
        },
        async navigateToHomeView() {
            await this.$router.push({name: HOME_ROUTE_NAME, params: {}})
        },
    }
}
</script>
