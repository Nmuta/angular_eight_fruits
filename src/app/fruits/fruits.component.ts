import { FruitService } from './../fruit.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  constructor(private fruitService: FruitService) { }
  fruits: any = [];

  ngOnInit() {
    this.fruitService.getFruits().subscribe(fruits => {
      this.fruits = fruits;
    });
  }


}
