import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  @Input('user') user: any;

  delete(user: any): any {
    this.router.navigateByUrl(`users/delete/${user.id}`);
  }
  details(user: any): any {
    this.router.navigateByUrl(`users/details/${user.id}`);
  }
  edit(user: any): any {
    this.router.navigateByUrl(`users/edit/${user.id}`);
  }
}
