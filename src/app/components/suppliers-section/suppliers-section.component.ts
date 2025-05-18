import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-suppliers-section',
  templateUrl: './suppliers-section.component.html',
  styleUrls: ['./suppliers-section.component.scss']
})
export class SuppliersSectionComponent {
   ngAfterViewInit() {
                Aos.init(); // Initialize AOS
              }

}
