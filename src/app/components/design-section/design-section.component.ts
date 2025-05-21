import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";
interface Item {
    tittle: string;
    description:string;
    image: string;
}

@Component({
  selector: "design-section",
  templateUrl: './design-section.component.html',
  styleUrls: ['./design-section.component.scss'],

 })
export class DesignSectionComponent {
  currentIndex: number = 0;
  ngAfterViewInit() {
        Aos.init(); // Initialize AOS
      }
      items: Item[] = [
        { tittle: "غرفة المعيشة", description:"غرفة المعيشة قلب المنزل، تعكس الأناقة من خلال تصميمها الفريد. تتميز بألوان دافئة وأثاث مريح، مع لمسات فنية تضفي جواً من الفخامة. ",image: "assets/images/Rectangle 9977.png" },
    { tittle: "المطبخ",description:"وصف حول المطبخ", image: "assets/images/Rectangle 9976.png" },
    { tittle: "غرفة النوم",description:"وصف حول غرفة النوم ", image: "assets/images/Rectangle 9982.png" },

];
  get currentItem(): Item {
    return this.items[this.currentIndex];
  }

  showNext() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}