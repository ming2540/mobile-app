import { Component, OnInit, Input } from '@angular/core';
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.scss'],
})
export class ItemsComponentComponent implements OnInit {

  @Input() items: Items;

  constructor() { }

  ngOnInit() {}

}
