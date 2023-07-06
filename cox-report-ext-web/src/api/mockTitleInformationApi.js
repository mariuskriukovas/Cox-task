// todo implement BE application, replace by AXIOS calls


const mockTitleInformation = [{attribute: "Title Status", value: "Y"}, {
    attribute: "Title Received Date", value: "3/9/23"
}, {attribute: "Title Issued Date", value: ""}, {
    attribute: "Auction Has Title", value: "Y"
}, {attribute: "Highlight if Y Title Issued to Buyer", value: "N"}, {
    attribute: "Title Issued to Floorplan", value: "N"
}, {attribute: "Title Returned to Seller", value: "N"}, {
    attribute: "Title Problem", value: "N"
}, {attribute: "Title Notes", value: ""}, {attribute: "Seller Expired", value: "Y"},]

export default {
    // eslint-disable-next-line no-unused-vars
    async getTitleInformation(vehicleUid) {
        return mockTitleInformation
    },
};
