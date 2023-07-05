// todo implement BE application, replace by AXIOS calls
export default {
    async getSalesTransactions(filters, pageable) {
        console.log(filters)
        console.log(pageable)
        // Todo BE will be responsible for filtering, ordering and pagination
        // Not seeing purpose to mock this behaviour using lodash
        return {
            totalElements: 10, content: [{
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6a",
                vin: "ABC123",
                vehicle: "Honda Accord",
                auctionLocation: "New York",
                saleDate: "2023-07-01",
                buyerName: "John Smith",
                sellerName: "Jane Doe"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6b",
                vin: "DEF456",
                vehicle: "Toyota Camry",
                auctionLocation: "Los Angeles",
                saleDate: "2023-07-02",
                buyerName: "Michael Johnson",
                sellerName: "Emily Davis"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6c",
                vin: "GHI789",
                vehicle: "Ford Mustang",
                auctionLocation: "Chicago",
                saleDate: "2023-07-03",
                buyerName: "David Brown",
                sellerName: "Olivia Wilson"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6d",
                vin: "JKL012",
                vehicle: "Chevrolet Silverado",
                auctionLocation: "Houston",
                saleDate: "2023-07-04",
                buyerName: "Daniel Martinez",
                sellerName: "Sophia Taylor"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6e",
                vin: "MNO345",
                vehicle: "Volkswagen Golf",
                auctionLocation: "Miami",
                saleDate: "2023-07-05",
                buyerName: "William Anderson",
                sellerName: "Ava Thomas"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6f",
                vin: "PQR678",
                vehicle: "BMW X5",
                auctionLocation: "San Francisco",
                saleDate: "2023-07-06",
                buyerName: "James Harris",
                sellerName: "Mia White"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6g",
                vin: "STU901",
                vehicle: "Mercedes-Benz C-Class",
                auctionLocation: "Dallas",
                saleDate: "2023-07-07",
                buyerName: "Joseph Clark",
                sellerName: "Liam Martinez"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6j",
                vin: "VWX234",
                vehicle: "Audi Q7",
                auctionLocation: "Atlanta",
                saleDate: "2023-07-08",
                buyerName: "Christopher Baker",
                sellerName: "Harper Johnson"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6k",
                vin: "YZA567",
                vehicle: "Jeep Wrangler",
                auctionLocation: "Seattle",
                saleDate: "2023-07-09",
                buyerName: "Matthew Wilson",
                sellerName: "Ella Davis"
            }, {
                uid: "7075ae7f-67de-4741-902d-cdfc3f99ab6l",
                vin: "BCD890",
                vehicle: "Lexus RX",
                auctionLocation: "Phoenix",
                saleDate: "2023-07-10",
                buyerName: "Benjamin Martin",
                sellerName: "Amelia Anderson"
            }]
        }
    },
};
