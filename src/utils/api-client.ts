import axios from 'axios';

const api = axios.create({
  baseURL: window.location.origin,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor for error handling
api.interceptors.request.use(
  (config) => {
    // Add CORS headers
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type';
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = 'An unexpected error occurred';

    if (error.response) {
      // Server responded with an error status
      errorMessage = error.response.data?.message || 'Server error occurred';
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = 'No response received from server';
    } else {
      // Error in request configuration
      errorMessage = error.message || 'Error setting up request';
    }

    return Promise.reject(new Error(errorMessage));
  }
);

export default api;