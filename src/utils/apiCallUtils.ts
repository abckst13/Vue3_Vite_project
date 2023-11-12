// useApi.js
import { ref } from 'vue';
import axios from 'axios';

const useApi = () => {
    const error = ref(null);

    const api = axios.create({
        baseURL: 'https://your-api-base-url.com', // API의 기본 URL
        headers: {
            common: {
                'Content-Type': 'application/json'
                // 다른 원하는 공통 헤더 정보 추가
            }
        }
    });

    api.interceptors.response.use(
        response => response.data,
        err => {
            error.value = err;
            throw err;
        }
    );

    const get = async (url, params) => {
        try {
            const response = await api.get(url, { params });
            return response;
        } catch (err) {
            error.value = err;
            throw err;
        }
    };

    const post = async (url, data) => {
        try {
            const response = await api.post(url, data);
            return response;
        } catch (err) {
            error.value = err;
            throw err;
        }
    };

    return {
        error,
        get,
        post
    };
};

export default useApi;
