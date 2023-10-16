import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent {
  constructor(private router: Router) { }

  onNavigate(to: string) {
    this.router.navigateByUrl(`/pages/${to}`, { skipLocationChange: true })
  }
}
