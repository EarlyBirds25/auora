import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-aura-options',
  templateUrl: './aura-options.component.html',
  styleUrls: ['./aura-options.component.scss']
})
export class AuraOptionsComponent implements OnInit {

  constructor() { }
   ngAfterViewInit() {
            Aos.init(); // Initialize AOS
          }

  ngOnInit() {
  }

}
