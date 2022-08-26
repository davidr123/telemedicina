import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  
  }
  @ViewChild(PagesComponent, { static: true })
  public drawer!: PagesComponent;

  public navItems = [
      { name: 'account_circle', text: 'Avatar' },
      { name: 'error', text: 'Badge' },
      { name: 'group_work', text: 'Button Group' }
  ];

  public selected = 'Avatar';

  public navigate(item:any) {
      this.selected = item.text;
      // this.drawer.close();
  }


}
