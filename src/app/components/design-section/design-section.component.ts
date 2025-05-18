import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";

@Component({
  selector: "design-section",
  templateUrl: './design-section.component.html',
  styleUrls: ['./design-section.component.scss'], 
   
 })
export class DesignSectionComponent {
  ngAfterViewInit() {
        Aos.init(); // Initialize AOS
      }
}
