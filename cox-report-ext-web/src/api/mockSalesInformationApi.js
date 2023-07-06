// todo implement BE application, replace by AXIOS calls


const mockSalesInformation = [{
    attribute: "Seller Name", value: "Benton Nissan of Columbia"
}, {attribute: "Seller Number", value: "Value"}, {
    attribute: "Source System ID", value: "Benton Nissan of Columbia"
}, {attribute: "Sale Number", value: "5406622"}, {attribute: "Lane Number", value: "202074"},]

export default {
    // eslint-disable-next-line no-unused-vars
    async getSalesInformation(auctionUid) {
        return mockSalesInformation
    },
};
