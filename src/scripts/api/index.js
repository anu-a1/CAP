import axios from 'axios'
import config from '../config';


class API
{
    configureTransport(businessAreaId, roleId) {
        this.transport = axios.create({
            baseURL: config.api.url,
            timeout: 300000,
            withCredentials: true,
            headers: {businessAreaId, roleId},
            responseType: 'json'
        });
        return this;
    };

}

export default (new API()).configureTransport(1,4);