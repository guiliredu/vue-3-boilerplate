import { useAuthStore } from '@/stores/auth';
import { useAlertStore } from '@/stores/alerts';

const auth = useAuthStore();
const alerts = useAlertStore();

const settings = {
  token: auth.token,
  headers: new Headers({
    'Accept': 'application/json'
  }),
  baseURL: import.meta.env.VITE_API_URL,
};

export const http = {
  async get(endpoint) {
    return fetch(`${settings.baseURL}/${endpoint}`, {
      method: 'GET',
      headers: settings.headers
    })
    .then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    })
    .catch(error => {
      alerts.alertShow({ type: 'danger', message: `Erro: ${error}` })
    });
  },
  async post(endpoint, body) {
    settings.headers.set('Content-Type', 'multipart/form-data');
    settings.headers.set('Authorization', 'Bearer '+auth.token);

    return fetch(`${settings.baseURL}/${endpoint}`, {
      method: 'POST',
      headers: settings.headers,
      body,
    })
    .then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    })
    .catch(error => {
      alerts.alertShow({ type: 'danger', message: `Erro: ${error}` })
    });
  }
}