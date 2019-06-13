import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resovery-account',
  templateUrl: './resovery-account.page.html',
  styleUrls: ['./resovery-account.page.scss'],
})
export class ResoveryAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendRecoveryEmail( accountId ){
    alert('Email sent to ' + accountId);
  }

}
