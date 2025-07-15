import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  openGithub() {
  window.open('https://github.com/welmansouri/MyPortfolio', '_blank');
}


}
