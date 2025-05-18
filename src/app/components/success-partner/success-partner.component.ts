import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-success-partner',
  templateUrl: './success-partner.component.html',
  styleUrls: ['./success-partner.component.scss']
})
export class SuccessPartnerComponent {
     ngAfterViewInit() {
      Aos.init(); // Initialize AOS
                }
 
}
