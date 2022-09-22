import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private loginComponent: LoginComponent, private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.registerToggleFromRegister();
    }, error => {
      console.log(error);
      this.toastr.error("Form Invalid");
    })
  }


  registerToggleFromRegister() {
    this.loginComponent.registerToggle();
  }
}
