import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css'],
})
export class HelloworldComponent implements OnInit {
  myname: string = 'Voltaire';
  @Input() GetMyName: string;
  @Output() SendMyName = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  SendName() {
    console.log('SendName called');
    this.SendMyName.emit('Voltaire the great');
  }
}
