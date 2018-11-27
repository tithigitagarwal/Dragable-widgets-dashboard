import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css']
})
export class Widget1Component implements OnInit {
  @Input() hello: string;
  constructor() { }

  ngOnInit() {
    console.log(" @Input() hello: string;",this.hello )
  }

}
