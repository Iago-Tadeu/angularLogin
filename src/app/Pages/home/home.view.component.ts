import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-login-home',
  // standalone: true,
  // imports: [],
  styleUrl: './home.view.component.scss',
  template: `
    <p>
      home works!
    </p>
  `,
})
export class HomeViewComponent implements OnInit {
  ngOnInit(): void {
    console.log("HOME");
  }
}
