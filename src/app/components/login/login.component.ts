
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  registerMode = false;


  constructor(public accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login() {
    //console.log(this.model)
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }



  registerToggle() {
    this.registerMode = !this.registerMode;
  }

}
