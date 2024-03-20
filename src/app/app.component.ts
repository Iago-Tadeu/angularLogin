import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CustomCardComponent } from "/shared/widgets/custom.card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // , 
  // CustomCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("TESTE");
  }
}
