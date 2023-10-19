import { Component, OnInit } from '@angular/core';
import { TestymonialsService } from '../testymonials.service';
@Component({
  selector: 'app-testymonials',
  templateUrl: './testymonials.component.html',
  styleUrls: ['./testymonials.component.scss'],
})
export class TestymonialsComponent implements OnInit {
  testymonials: any[] = [];

  constructor(private TestymonialsService: TestymonialsService) {}

  ngOnInit(): void {
    this.TestymonialsService.getTestymonials().subscribe((data: any) => {
      this.testymonials = data.data.slice(0,4);
      console.log(this.testymonials);
    });
  }
}
