// todo implement BE application, replace by AXIOS calls

import {filter, find, map} from "lodash";

const mockVehicleData = [{
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6a",
    vin: "ABC123",
    vehicle: "Honda Accord",
    auctionLocation: "New York",
    saleDate: "2023-07-01",
    buyerName: "John Smith",
    sellerName: "Jane Doe",
    make: "Honda",
    model: "Accord",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6b",
    vin: "DEF456",
    vehicle: "Toyota Camry",
    auctionLocation: "Los Angeles",
    saleDate: "2023-07-02",
    buyerName: "Michael Johnson",
    sellerName: "Emily Davis",
    make: "Toyota",
    model: "Camry",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6c",
    vin: "GHI789",
    vehicle: "Ford Mustang",
    auctionLocation: "Chicago",
    saleDate: "2023-07-03",
    buyerName: "David Brown",
    sellerName: "Olivia Wilson",
    make: "Ford",
    model: "Mustang",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6d",
    vin: "JKL012",
    vehicle: "Chevrolet Silverado",
    auctionLocation: "Houston",
    saleDate: "2023-07-04",
    buyerName: "Daniel Martinez",
    sellerName: "Sophia Taylor",
    make: "Chevrolet",
    model: "Silverado",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6e",
    vin: "MNO345",
    vehicle: "Volkswagen Golf",
    auctionLocation: "Miami",
    saleDate: "2023-07-05",
    buyerName: "William Anderson",
    sellerName: "Ava Thomas",
    make: "Volkswagen",
    model: "Golf",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6f",
    vin: "PQR678",
    vehicle: "BMW X5",
    auctionLocation: "San Francisco",
    saleDate: "2023-07-06",
    buyerName: "James Harris",
    sellerName: "Mia White",
    make: "BMW",
    model: "X5",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6g",
    vin: "STU901",
    vehicle: "Mercedes-Benz C-Class",
    auctionLocation: "Dallas",
    saleDate: "2023-07-07",
    buyerName: "Joseph Clark",
    sellerName: "Liam Martinez",
    make: "Mercedes-Benz",
    model: "C-Class",
    vehicleYear: "2023"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6j",
    vin: "VWX234",
    vehicle: "Audi Q7",
    auctionLocation: "Atlanta",
    saleDate: "2023-07-08",
    buyerName: "Christopher Baker",
    sellerName: "Harper Johnson",
    make: "Audi",
    model: "Q7",
    vehicleYear: "2020"
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6k",
    vin: "YZA567",
    vehicle: "Jeep Wrangler",
    auctionLocation: "Seattle",
    saleDate: "2023-07-09",
    buyerName: "Matthew Wilson",
    sellerName: "Ella Davis",
    make: "Jeep",
    model: "Wrangler",
    vehicleYear: "2022",
}, {
    uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6l",
    vin: "BCD890",
    vehicle: "Lexus RX",
    auctionLocation: "Phoenix",
    saleDate: "2023-07-10",
    buyerName: "Benjamin Martin",
    sellerName: "Amelia Anderson",
    make: "Lexus",
    model: "RX",
    vehicleYear: "2020"
}]

const isFilterValid = (filter) => filter ?? filter?.length > 0
export default {

    // eslint-disable-next-line no-unused-vars
    async getSalesTransactions(filters, pageable) {
        // Todo BE will be responsible for filtering, ordering and pagination, so providing only very simple example
        const mockData =
            filter(mockVehicleData, e => {
                let matchFilters = true
                if (isFilterValid(filters?.vin)) {
                    matchFilters = matchFilters && e.vin.includes(filters?.vin)
                }
                if (isFilterValid(filters?.saleDate)) {
                    matchFilters = matchFilters && e.saleDate.includes(filters?.saleDate)
                }
                return matchFilters
            })
        return {
            totalElements: 10, content: mockData
        }
    },
    async getVehicleHeader(vehicleUid) {
        const mockData = map(mockVehicleData, e => {
            return {
                ...e,
                vehicleUid: e.uid,
                uid: '8' + e.uid.slice(1)
            }
        })
        return find(mockData, {vehicleUid});
    },
    // eslint-disable-next-line no-unused-vars
    async getVehicleAuctionHistory(vehicleUid, pageable) {
        const mockContent = map(mockVehicleData, e => {
            return {
                vehicleUid,
                uid: '8' + e.uid.slice(1),
                auctionUid: '9' + e.uid.slice(1),
                vra: Math.floor(100000 + Math.random() * 900000),
                auctionCode: Math.floor(1000 + Math.random() * 9000),
                auctionLocation: e.auctionLocation,
                saleDate: e.saleDate,
                buyerName: e.buyerName,
                sellerName: e.sellerName,
            }
        })
        return {
            totalElements: 10, content: mockContent
        }
    },
};
