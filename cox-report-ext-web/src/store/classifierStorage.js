import {defineStore} from 'pinia'
import ClassifierApi from "@/api/mockClassifierApi";

export const useClassifierStorage = defineStore('classifierStorage', {
    state: () => ({
        classifiers: {
            auctionLocation: [],
        },
    }), getters: {}, actions: {
        async loadAuctionLocationClassifier(force = false) {
            if (this.classifiers.auctionLocation?.length === 0 || force) {
                this.classifiers.auctionLocation = await ClassifierApi.getAuctionLocationClassifier()
            }
        },
    }, persist: {
        enabled: true
    }
})
