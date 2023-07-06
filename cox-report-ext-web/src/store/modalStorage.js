import {defineStore} from 'pinia'

export const useModalStorage = defineStore('modalStorage', {
    state: () => ({
        paymentInformationData: {
            visible: false, auctionUid: null,
        },
    }), getters: {}, actions: {
        openPaymentInformation(auctionUid) {
            this.paymentInformationData.visible = true
            this.paymentInformationData.auctionUid = auctionUid
        },
    }, persist: {
        enabled: true
    }
})
