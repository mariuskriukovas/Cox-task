// todo implement BE application, replace by AXIOS calls


const mockArbitrationInformation = [{
    attribute: "Arbitration Flag", value: "N"
}, {attribute: "Arbitration Status", value: ""}, {attribute: "Arbitration Date", value: ""},]

export default {
    // eslint-disable-next-line no-unused-vars
    async getArbitrationInformation(vehicleUid) {
        return mockArbitrationInformation
    },
};
