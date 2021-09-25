import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  usuario = {

    email:'',

    password:''

  }



  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secundary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];

  onClick( check ){
    console.log(check);
  }

}
