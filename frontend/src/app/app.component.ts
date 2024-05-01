import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardBoardComponent } from "./components/card-board/card-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CardBoardComponent]
})
export class AppComponent {
}
