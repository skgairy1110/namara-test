import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	@Input() post : any;
	

  constructor(private config : ConfigService) { }



  ngOnInit() {

  }

 
}
