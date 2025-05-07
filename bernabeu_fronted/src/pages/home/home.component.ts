import { Component } from '@angular/core';
import { NavbarComponent } from "../../commons/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  time: string = '00:00:00';

}
