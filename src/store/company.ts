import { defineStore } from 'pinia'

interface Company {
  company?: string,
  type?: string[],
  stuff?: string[],
  address?: string,
  lat?: number,
  lng?: number,
  src?: string
}

export const useCompanyStore = defineStore('count', {
    state: () => ({
        data: {} as Company,
    }),
    getters: {
        company: (state) => state.data,
    },
    actions: {
        async selectCompany(data: object) {
            this.data = data
        },
    },
});
