import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	activeTab = 'home';



	home = { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
  	this.home = this.getHomeText();
  }

   getActiveTabs(tabname : string){
  	this.activeTab = tabname;
  }

  	getHomeText(){
  		return this.config.getHomeConfig().home;
  	}

}
