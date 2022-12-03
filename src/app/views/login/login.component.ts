import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) // private formBuilder: FormBuilder
  {}

  // checkoutForm = this.formBuilder.group({
  //   email: '',
  //   password: '',
  // });

  ngOnInit(): void {}

  signIn(): void {
    // if (!this.checkoutForm.value.email || !this.checkoutForm.value.password) {
    //   alert('Preencha todos os campos!');
    // } else {
    //   this.checkoutForm.reset();
    //   this.router.navigate(['../../home']);
    // }
  }
}
