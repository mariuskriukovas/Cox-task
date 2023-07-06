<template>
    <v-container>
        <v-card elevation="2">
            <v-card-title>Sales Transactions</v-card-title>
            <v-row class="ml-2 mr-2">
                <v-col cols="3">
                    <v-text-field
                            v-model="filter.vin"
                            clearable
                            label="Search by VIN"
                            solo
                    ></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field
                            v-model="filter.dealerNumber"
                            clearable
                            label="Search by Dealer Number"
                            solo
                    ></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-select
                            v-model="filter.auctionLocationUid"
                            :items="classifiers.auctionLocation"
                            clearable
                            item-text="name"
                            item-value="uid"
                            label="Search by Auction Location"
                            solo
                    ></v-select>
                </v-col>
                <v-col cols="3">
                    <date-picker v-model="filter.saleDate" label="Search by Sale Date"></date-picker>
                </v-col>
            </v-row>
            <v-row class="ml-2 mr-2">
                <v-col align="right" cols="12">
                    <v-btn
                            color="primary"
                            outlined
                            @click="getSalesTransactions"
                    >
                        Search
                        <v-icon class="ml-1" dark>
                            mdi-magnify
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="ml-2"
                            color="primary"
                            outlined
                            @click="onClearFilters"
                    >
                        Clear
                        <v-icon class="ml-1" dark>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
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
                    >
                        <template v-slot:[`item.vin`]="{ item }">
                            <v-btn
                                    color="primary"
                                    text
                                    @click="navigateToVehicleView(item)"
                            >
                                {{ item.vin }}
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useClassifierStorage} from "@/store/classifierStorage";
import DatePicker from "@/components/DatePicker.vue";
import SaleTransactionApi from "@/api/mockSaleTransactionApi.js";
import {VEHICLE_ROUTE_NAME} from "@/plugins/router";

export default {
    name: 'HomeView',
    components: {DatePicker},
    computed: {
        ...mapState(useClassifierStorage, ['classifiers']),
    },
    watch: {
        saleTransactionOptions: {
            async handler() {
                await this.getSalesTransactions()
            },
            deep: true,
        },
    },

    data: () => ({
        filter: {
            vin: null,
            dealerNumber: null,
            auctionLocationUid: null,
            saleDate: null,
        },
        saleTransactionOptions: {},
        saleTransactionHeaders: [
            {
                text: 'VIN',
                align: 'start',
                value: 'vin',
                width: '300px'
            },
            {
                text: 'Vehicle',
                align: 'start',
                value: 'vehicle',
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
        ],
        saleTransactions: [],
        saleTransactionTotalElements: null,
    }),
    async mounted() {
        await this.loadAuctionLocationClassifier()
    },
    methods: {
        ...mapActions(useClassifierStorage, ['loadAuctionLocationClassifier']),
        onClearFilters() {
            this.filter = {
                vin: null,
                dealerNumber: null,
                auctionLocationUid: null,
                saleDate: null,
            }
        },
        async getSalesTransactions() {
            const data = await SaleTransactionApi.getSalesTransactions(this.filter, this.saleTransactionOptions)
            this.saleTransactions = data?.content ?? []
            this.saleTransactionTotalElements = data?.totalElements
        },
        async navigateToVehicleView(item) {
            await this.$router.push({name: VEHICLE_ROUTE_NAME, params: {uid: item.uid}})
        },
    }
}
</script>
