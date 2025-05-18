import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";

@Component({
  selector: "location-section",
  templateUrl: './location-section.component.html',
  styleUrls: ['./location-section.component.scss'],
   
 })
export class LocationSectionComponent {
   ngAfterViewInit() {
              Aos.init(); // Initialize AOS
            }
}
