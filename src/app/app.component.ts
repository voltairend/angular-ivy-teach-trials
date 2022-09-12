import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  name = 'Input and output';
  sonname: string;
  constructor() {}

  ngOnInit() {
    console.log('init');
  }

  GetNewName(e) {
    console.log(e);
    this.sonname = e;
  }
}
