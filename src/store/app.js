// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    navigation: true,
  }),
  getters: {
    navigationState: state => state.navigation
  },
  actions: {
    toggleNavigationDrawer() {
      this.navigation = !this.navigation
    }
  }
})
