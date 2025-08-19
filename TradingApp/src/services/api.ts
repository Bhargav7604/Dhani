import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = ''; // Get token from storage or state
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.log('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh'),
};

export const strategiesAPI = {
  getAll: () => api.get('/strategies'),
  getById: (id: string) => api.get(`/strategies/${id}`),
  create: (strategy: any) => api.post('/strategies', strategy),
  update: (id: string, strategy: any) => api.put(`/strategies/${id}`, strategy),
  delete: (id: string) => api.delete(`/strategies/${id}`),
};

export const deployedStrategiesAPI = {
  getAll: () => api.get('/deployed-strategies'),
  deploy: (strategyId: string, config: any) =>
    api.post('/deployed-strategies', { strategyId, config }),
  pause: (id: string) => api.patch(`/deployed-strategies/${id}/pause`),
  resume: (id: string) => api.patch(`/deployed-strategies/${id}/resume`),
  stop: (id: string) => api.patch(`/deployed-strategies/${id}/stop`),
};

export const performanceAPI = {
  getPerformance: (period: string) => api.get(`/performance?period=${period}`),
  getTrades: (strategyId?: string) => api.get(`/trades${strategyId ? `?strategyId=${strategyId}` : ''}`),
};

export default api;