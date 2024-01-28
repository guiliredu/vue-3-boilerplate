import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => {
    return { 
      loading: false,
      alert: {
        show: false,
        message: '',
        type: 'success',
      },
    }
  },
  actions: {
    loadingShow() {
      this.loading = true
    },
    loadingHide() {
      this.loading = false
    },
    alertShow({ type, message }) {
      this.alert = {
        show: true,
        message,
        type,
      }

      setTimeout(() => {
        this.alertHide();
      }, 5000)
    },
    alertHide() {
      this.alert = {
        show: false,
        message: '',
        type: 'success',
      }
    },
  },
})