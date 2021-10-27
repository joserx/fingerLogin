import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }
  public createForm() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  public submit() {
    this.router.navigate(['/home'], { state: this.form.value.username });
  }
}
