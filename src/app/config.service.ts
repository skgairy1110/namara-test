import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { homeconfiguration } from './homeconfiguration';
import { serviceconfiguration } from './serviceconfiguration';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
	config = configuration;
	homeconfig = homeconfiguration;
	serviceconfig = serviceconfiguration;

	constructor() { }

	getConfig() {
		return this.config;
  }
  getHomeConfig() {
  	return this.homeconfig;
  }
  getServiceConfig() {
  	return this.serviceconfig;
  }
  getPostByID(id : number){
    return this.config.blog.posts[id - 1];
  }
 
}
