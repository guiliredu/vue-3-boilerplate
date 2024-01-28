import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
      token: localStorage.getItem('access_token'),
      user: null,
    }
  },
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('access_token', token)
    },
    setUser(user) {
      this.user = user;
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.clear('access_token')
    },
  },
})