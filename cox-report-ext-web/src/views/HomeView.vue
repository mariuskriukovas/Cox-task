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
                <v-col cols="2">
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
                <v-col cols="2">
                    <date-picker v-model="filter.saleDate" label="Search by Sale Date"></date-picker>
                </v-col>
                <v-col class="mt-2" cols="2">
                    <v-btn
                            color="green"
                            outlined
                    >
                        Search
                    </v-btn>
                    <v-btn
                            class="ml-2"
                            color="green"
                            outlined
                            @click="onClearFilters"
                    >
                        Clear
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
                    ></v-data-table>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useClassifierStorage} from "@/store/classifierStorage";
import DatePicker from "@/components/DatePicker.vue";

export default {
    name: 'HomeView',
    components: {DatePicker},
    comments: {
        DatePicker
    },
    computed: {
        ...mapState(useClassifierStorage, ['classifiers']),
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
        saleTransactions: [
            {
                vin: 'ABC123',
                vehicle: 'Honda Accord',
                auctionLocation: 'New York',
                saleDate: '2023-07-01',
                buyerName: 'John Smith',
                sellerName: 'Jane Doe'
            },
            {
                vin: 'DEF456',
                vehicle: 'Toyota Camry',
                auctionLocation: 'Los Angeles',
                saleDate: '2023-07-02',
                buyerName: 'Michael Johnson',
                sellerName: 'Emily Davis'
            },
            {
                vin: 'GHI789',
                vehicle: 'Ford Mustang',
                auctionLocation: 'Chicago',
                saleDate: '2023-07-03',
                buyerName: 'David Brown',
                sellerName: 'Olivia Wilson'
            },
            {
                vin: 'JKL012',
                vehicle: 'Chevrolet Silverado',
                auctionLocation: 'Houston',
                saleDate: '2023-07-04',
                buyerName: 'Daniel Martinez',
                sellerName: 'Sophia Taylor'
            },
            {
                vin: 'MNO345',
                vehicle: 'Volkswagen Golf',
                auctionLocation: 'Miami',
                saleDate: '2023-07-05',
                buyerName: 'William Anderson',
                sellerName: 'Ava Thomas'
            },
            {
                vin: 'PQR678',
                vehicle: 'BMW X5',
                auctionLocation: 'San Francisco',
                saleDate: '2023-07-06',
                buyerName: 'James Harris',
                sellerName: 'Mia White'
            },
            {
                vin: 'STU901',
                vehicle: 'Mercedes-Benz C-Class',
                auctionLocation: 'Dallas',
                saleDate: '2023-07-07',
                buyerName: 'Joseph Clark',
                sellerName: 'Liam Martinez'
            },
            {
                vin: 'VWX234',
                vehicle: 'Audi Q7',
                auctionLocation: 'Atlanta',
                saleDate: '2023-07-08',
                buyerName: 'Christopher Baker',
                sellerName: 'Harper Johnson'
            },
            {
                vin: 'YZA567',
                vehicle: 'Jeep Wrangler',
                auctionLocation: 'Seattle',
                saleDate: '2023-07-09',
                buyerName: 'Matthew Wilson',
                sellerName: 'Ella Davis'
            },
            {
                vin: 'BCD890',
                vehicle: 'Lexus RX',
                auctionLocation: 'Phoenix',
                saleDate: '2023-07-10',
                buyerName: 'Benjamin Martin',
                sellerName: 'Amelia Anderson'
            }
        ],
        saleTransactionTotalElements: 10,
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
        }
    }
}
</script>
