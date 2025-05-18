import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";

@Component({
  selector: "smart-home-section",
  templateUrl: './smart-home-section.component.html',
  styleUrls: ['./smart-home-section.component.scss'], 
 })
export class SmartHomeSectionComponent {
  ngAfterViewInit() {
      Aos.init(); // Initialize AOS
    }
}
