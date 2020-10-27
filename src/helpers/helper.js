import axios from 'axios';
import { API_URL } from './config';
const allowedModules = [

];
export const genericQuery = (config) => {
    let newCancelToken = axios.CancelToken,
        newSource = newCancelToken.source(),
        token;

    if (config.CancelToken) {
        config.CancelToken.cancel("Cancel request because another request will be made.");
    }

    token = config.token;

    if (!token) {
        let module = config.Data.requestjson.Module;

        if (allowedModules.includes(module)) {
            config.Url = '/public/';
        }
    }

    axios({
        baseURL: config.BaseURL ? config.BaseURL : API_URL,
        cancelToken: newSource.token,
        data: config.Method !== "GET" ? config.Data.requestjson : null,
        params: config.Method === "GET" ? config.Data : null,
        headers: {
            token: token
        },
        method: config.Method,
        responseType: config.ResponseType ? config.ResponseType : 'json',
        url: config.Url,
        onUploadProgress: config.OnUploadProgress ? config.OnUploadProgress : null
    })
        .then(function (response) {
            config.ResponseSuccessCallback(response, config);
        })
        .catch(function (thrown) {
            config.ResponseFailCallback(thrown, config);
        });

    if (config.CancelToken) {
        config.CancelToken = newSource;
    }

    return config;
}

const TOKEN_STR = 'lms-token'

export const setToken = (token) => {
    localStorage.setItem(TOKEN_STR, token);
}, getToken = () => {
    return localStorage.getItem(TOKEN_STR);
}, removeToken = () => {
    localStorage.removeItem(TOKEN_STR);
};