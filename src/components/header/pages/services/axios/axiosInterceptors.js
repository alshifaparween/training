import axios from 'axios';
import { store } from '../../Redux/store';
import { logoutAction } from '../../Redux/actions/logoutAction';

export const axiosInstanceWithToken = axios.create({
  timeout: 30000, // Set a timeout of 30 seconds
});

// axios requrest with token
axiosInstanceWithToken.interceptors.request.use(config => {
  const { authentication } = store.getState();
  store.dispatch({ type: 'AXIOS_PROCESSING' });

  if (authentication.token) {
    config.headers.Authorization = `Bearer ${authentication.token}`;
  }

  return config;
}, (error) => {
  // Handle request errors
  store.dispatch({ type: 'AXIOS_FAILURE' });
  return Promise.reject(error);
});

// axios response with token
axiosInstanceWithToken.interceptors.response.use(config => {
  const { authentication } = store.getState();

  if (authentication.token) {
    config.headers.Authorization = `Bearer ${authentication.token}`;
  }

  if (config?.data?.errorCode === 401) {
    store.dispatch(logoutAction());
  }

  store.dispatch({ type: 'AXIOS_SUCCESS' });

  return config;
}, (error) => {
  // Handle response errors
  store.dispatch({ type: 'AXIOS_FAILURE' });

  if (error.response && error.response.status === 401) {
    // Handle 401 errors (unauthorized)
    store.dispatch(logoutAction());
  }

  return Promise.reject(error);
});

export const axiosInstanceWithoutToken = axios.create();

// axios requrest without token
axiosInstanceWithoutToken.interceptors.request.use(config => {
  return config;
}, (error) => {
  // Handle request errors
  return Promise.reject(error);
});

// axios response without token
axiosInstanceWithoutToken.interceptors.response.use(config => {
  return config;
}, (error) => {
  // Handle response errors
  return Promise.reject(error);
});












// module.exports= {axiosInstanceWithToken,axiosInstanceWithoutToken}
