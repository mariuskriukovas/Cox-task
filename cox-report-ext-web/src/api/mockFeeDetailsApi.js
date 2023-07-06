// todo implement BE application, replace by AXIOS calls


const mockFeeDetails = [{
    attribute: "Sale Amount", value: "26,300.00"
}, {attribute: "Buy Fee", value: "475.00"}, {
    attribute: "DealShield Fee", value: "0.00"
}, {attribute: "Total Adjustments", value: "275.00"}, {
    attribute: "Charges Description", value: "BUY FEE:475.00; DSCH:275.00;"
},]

export default {
    // eslint-disable-next-line no-unused-vars
    async getFeeDetails(auctionUid) {
        return mockFeeDetails
    },
};
