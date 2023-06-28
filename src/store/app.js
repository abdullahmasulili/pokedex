// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        navigationDrawer: false,
        filterDrawer: false
    }),
    getters: {
        navigationDrawerState: (state) => state.navigationDrawer,
        filterDrawerState: (state) => state.filterDrawer
    },
    actions: {
        toggleDrawer(drawerType) {
            switch (drawerType) {
                case 'navigation':
                    this.navigationDrawer = !this.navigationDrawer
                    break
                case 'filter':
                    this.filterDrawer = !this.filterDrawer
                    break
            }
        }
    }
})
