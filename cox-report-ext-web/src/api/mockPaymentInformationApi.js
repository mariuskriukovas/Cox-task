// todo implement BE application, replace by AXIOS calls


const mockPaymentInformation = [{
    attribute: "Buyer Name", value: "American Motors of Jackson, Inc"
}, {attribute: "Buyer Number", value: "5378414"}, {attribute: "Buyer Rep", value: "101414366"}, {
    attribute: "Paid Flag", value: "Y"
}, {attribute: "Payment Date", value: "1/3/23"}, {
    attribute: "Payment Type 1", value: "ALLY"
}, {attribute: "Payment Amount 1", value: "27,050.00"}, {
    attribute: "Floor Plan Account", value: ""
}, {attribute: "Floor Plan Name", value: "ALLY"}, {
    attribute: "Payment Type 2", value: ""
}, {attribute: "Payment Amount 2", value: ""}, {attribute: "Payment Type 3", value: ""}, {
    attribute: "Payment Amount 3", value: ""
}, {attribute: "Split Pay Flag", value: "N"},]

export default {
    // eslint-disable-next-line no-unused-vars
    async getPaymentInformation(auctionUid) {
        return mockPaymentInformation
    },
};
