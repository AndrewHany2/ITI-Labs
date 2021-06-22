import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formGroup: any = '';
  submitedSuccess: any = false;
  constructor(private MyService: UsersService, private router: Router) {}
  ngOnInit() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(11),
      ]),
      Username: new FormControl('', [Validators.required]),
      Street: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.formGroup.controls);
    let user: any = {
      name: this.formGroup.controls.Name.value,
      email: this.formGroup.controls.Email.value,
      phone: this.formGroup.controls.Phone.value,
      username: this.formGroup.controls.Username.value,
      address: {
        street: this.formGroup.controls.Street.value,
        city: this.formGroup.controls.City.value,
      },
    };
    this.MyService.AddNewUser(user).subscribe((res) => {
      this.submitedSuccess = true;
      this.router.navigateByUrl('users');
    });
  }
}
