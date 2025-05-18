import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";

@Component({
  selector: "floor-plans-section",
  templateUrl: './floor-plans-section.component.html',
  styleUrls: ['./floor-plans-section.component.scss'], 
   
 })
export class FloorPlansSectionComponent {
   ngAfterViewInit() {
              Aos.init(); // Initialize AOS
            }
}
