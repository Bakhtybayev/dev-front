import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class UsersPage {}
