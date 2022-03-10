import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fsm-login',
  templateUrl: './fsm-login.component.html',
  styleUrls: ['./fsm-login.component.css']
})
export class FsmLoginComponent implements OnInit {
  email: String;
  password: String;
  form: any;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
    ) { 

    this.form = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    })

  }

  ngOnInit(): void {
  }

submit() {
  this.router.navigateByUrl( '/menu' );
} 

}
