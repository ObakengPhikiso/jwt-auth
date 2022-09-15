import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  section_A: boolean = true

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductCategories().subscribe((data: any) => {
      console.log(data);
    })
  }

}
