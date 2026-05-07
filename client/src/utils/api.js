import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5055'

export const api = axios.create({
  baseURL: import.meta.env.PROD ? API_BASE_URL : '/api',
  headers: { "Content-Type": "application/json" },
})

// Alternative direct fetch methods for production
export const apiDirect = {
  contact: {
    submit: async (formData) => {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      return response.json()
    }
  },
  search: {
    certificates: async (query) => {
      const response = await fetch(`${API_BASE_URL}/api/search?query=${encodeURIComponent(query)}`)
      return response.json()
    }
  }
}
