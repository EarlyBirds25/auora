import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "services-section",
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
   
 })
export class ServicesSectionComponent {

  services = [
    { icon: '../../../assets/images/ion_school-outline (1).svg', alt: 'School Icon', text: 'مدارس ودور حضانة' },
    { icon: '../../../assets/images/fluent_building-government-20-regular (1).svg', alt: 'Government Icon', text: 'مرافق حكومية' },
    { icon: '../../../assets/images/ph_tree-light (1).svg', alt: 'Park Icon', text: 'مسطحات خضراء' },
    { icon: '../../../assets/images/ph_shopping-cart-light (1).svg', alt: 'Mall Icon', text: 'مراكز تجارية وتسوق' },
    { icon: '../../../assets/images/material-symbols-light_mosque-outline (1).svg', alt: 'Mosque Icon', text: 'مساجد وجوامع' },
    { icon: '../../../assets/images/ph_hospital-light (1).svg', alt: 'Hospital Icon', text: 'مستشفيات ومراكز صحية' },
  ];
}
