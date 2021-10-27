import { Router } from '@angular/router';
import { IUser, UserService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homep',
  templateUrl: './homep.component.html',
  styleUrls: ['./homep.component.css'],
})
export class HomepComponent implements OnInit {
  users?: IUser[];
  username: string = '';
  constructor(private router: Router, private userService: UserService) {
    this.username = String(this.router.getCurrentNavigation()?.extras?.state);
  }

  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
}
