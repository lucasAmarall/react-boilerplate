import axios from "axios";

class APIService {
  static get host(){
    const HOSTS = {
      local: "http://dev.com.br",
      dev: "http://dev.com.br",
      qa: "http://qa.com.br",
      staging: "http://staging.com.br",
      prod: "http://prod.com.br",
    };

    const host = window.location.hostname;
    const env = Object.keys(HOSTS).find(_env => host.includes(_env));
    return HOSTS[env] || HOSTS.prod;
  }
  
  constructor(){
    this.service = axios.create({
      baseURL: APIService.host,
      timeout: 30000,
    });
  }

  get(resource, params) {
    return this.service.get(resource, params);
  }

  post(resource, params) {
    return this.service.post(resource, params);
  }

  put(resource, params) {
    return this.service.put(resource, params);
  }

  delete(resource) {
    return this.service.delete(resource);
  }

  patch(resource, params) {
    return this.service.patch(resource, params);
  }

}

export default APIService;