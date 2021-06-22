import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  formGroup: any = new FormGroup({});
  loading: boolean = true;
  user: any;
  submitedSuccess: any = false;

  constructor(
    private MyService: UsersService,
    private myRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.MyService.GetUserById(this.myRoute.snapshot.params.id).subscribe(
      (res) => {
        this.loading = false;
        this.user = res;
        this.formGroup.controls.Name.value = this.user.name;
        this.formGroup.controls.Email.value = this.user.email;
        this.formGroup.controls.Phone.value = this.user.phone;
        this.formGroup.controls.Username.value = this.user.username;
        this.formGroup.controls.Street.value = this.user.address.street;
        this.formGroup.controls.City.value = this.user.address.city;
      }
    );
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      Username: new FormControl('', [Validators.required]),
      Street: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.user.name = this.formGroup.controls.Name.value;
    this.user.email = this.formGroup.controls.Email.value;
    this.user.phone = this.formGroup.controls.Phone.value;
    this.user.address.street = this.formGroup.controls.Street.value;
    this.user.address.city = this.formGroup.controls.City.value;
    this.user.username = this.formGroup.controls.Username.value;
    this.MyService.UpdateUser(this.user).subscribe((res) => {
      this.submitedSuccess = true;
      this.router.navigateByUrl('users');
    });
  }
}
