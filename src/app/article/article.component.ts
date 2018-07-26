import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	post = {};
	blog = {};
	article = {};

  constructor(
  	private route : ActivatedRoute, 
  	private config : ConfigService,
  	private location: Location
  	) { }

  ngOnInit() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.post = this.getPostByID(id);
  	this.blog = this.getBlog();
  }

  	getBlog(){
  		return this.config.getConfig().blog;
  	}
    getPostByID(id : number){
  		return this.config.getPostByID(id);
  	}

  	goBack(): void {
  	this.location.back();
	}

}
