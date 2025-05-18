import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";

@Component({
  selector: "amenities-section",
  templateUrl: './amenities-section.component.html',
  styleUrls: ['./amenities-section.component.scss'],
   
 })
export class AmenitiesSectionComponent {
   ngAfterViewInit() {
          Aos.init(); // Initialize AOS
        }
  cards = [
    { image: '../../../assets/images/entrance-svgrepo-com 1 (1).svg', alt: 'Double height entrance', text: 'مدخل دبل هايت بتصميم زجاجي فاخر.' },
    { image: '../../../assets/images/airconditioning-so-svgrepo-com 1.svg', alt: 'Hidden AC system', text: 'نظام تكييف مخفي لمناطق المعيشة الرئيسية.' },
    { image: '../../../assets/images/frost-windshield-svgrepo-com 1.svg', alt: 'Low-E glass', text: 'زجاج Low-E مزدوج لعزل حراري مثالي.' },
    { image: '../../../assets/images/agriculture-ecology-forest-garden-leaf-plant-8-svgrepo-com 1.svg', alt: 'Outdoor seating', text: 'جلسات خارجية واسعة في الدور الأرضي والروف.' },
    { image: '../../../assets/images/pool-svgrepo-com 1.svg', alt: 'Swimming pool', text: 'إمكانية تجهيز مسبح في الروف.' },
    { image: '../../../assets/images/lock-on-svgrepo-com 1.svg', alt: 'Smart lock', text: 'نظام دخول ذكي (Smart Lock) وتحكم إلكتروني بالإضاءة.' },
    { image: '../../../assets/images/quicktiles-svgrepo-com 1.svg', alt: 'Smart lock', text: 'مغاسل رخامية مع مرايا مضاءة، وبلاط بورسلان عالي الجودة.' },
    { image: '../../../assets/images/elevator-svgrepo-com 1.svg', alt: 'Elevator', text: 'مصعد بثلاثة أدوار لتعزيز الخصوصية.' },
    { image: '../../../assets/images/ph_bathtub-light.svg', alt: 'Sanitary Tools', text: 'الادوات الصحية' },
    { image: '../../../assets/images/arcticons_smart-home-manager.svg', alt: 'Smart Home System', text: 'نظام منزل ذكي' },
    { image: '../../../assets/images/elevator-svgrepo-com 1.svg', alt: 'Pipes and Extensions', text: 'المواسير والتمديدات' },
    { image: '../../../assets/images/cil_layers.svg', alt: 'Insulation', text: 'اعمال العزل' },
    { image: '../../../assets/images/gas.svg', alt: 'Central Gas', text: 'الغاز المركزي' },
    { image: '../../../assets/images/fluent_vehicle-car-28-regular.svg', alt: 'Car Charger', text: 'شاحن سيارة' },
  ];
   features: string[] = [
     "يتميز المدخل بارتفاع مزدوج مع واجهات زجاجية (Curtain Wall) وتكسية حجر الترافرتين، إضافة إلى استخدام درابزينات زجاجية Laminated لتعزيز الأمان والجمالية.",
     "مكيف مخفي يغطي الدور الأرضي بالكامل، غرفة الماستر في الدور الأول، ومنطقة الجل هايت، بالإضافة إلى مكيف كاسيت للمطبخ لضمان توزيع مثالي للهواء.",
     "استخدام زجاج شبابيك (HD Low-E) لضمان كفاءة عزل حراري عالية، مع قطاع زجاج مزدوج وفق أعلى المواصفات.",
     "يشمل المشروع جلسات خارجية واسعة في الدور الأرضي ودور الروف، مما يوفر بيئة مثالية للاسترخاء.",
     "إمكانية إضافة مسبح كخيار إضافي وفق رغبة العميل.",
     "قفل إلكتروني (Smart Lock) مع إمكانية التحكم عن بعد عبر تطبيقات الهاتف الذكي.",
     "استخدام بلاط بورسلان عالي الجودة من مصنع إكسا مع نعلات مخفية (EXA)، بانوهات أنيقة في دورات المياه لتجمع بين الوظيفة والجمال.",
     "مصعد قريب من المدخل الرئيسي، مما يعزز الخصوصية عند استقبال الضيوف في الروف.",
     "تتميز فيلا أورا أبحر بأدوات صحية عصرية وفاخرة، حيث تم اختيار كل قطعة بعناية لتوفير أقصى درجات الراحة والرفاهية.",
     "تحتوي وحدة سكنية لاورا في أبحر على شاحن مخصص للسيارة، مما يجعلها خيارًا مثاليًا للراحة والراحة أثناء الإقامة.",
     "تم استخدام الغاز المركزي في مشروع اورا كخيارًا مثاليًا لتوفير الطاقة وتقليل التكاليف.",
    "يتضمن مشروع أعمال عزل متقدمة في الطوابق الأرضية والروف، مما يضمن بيئة مريحة ومثالية للاسترخاء.",
    "المواسير والتمديدات جزء أساسيًا من تصميم مباني اورا أبحر، حيث تساهم في توفير المياه والصرف الصحي بشكل فعال.",
    "يتميز مشروع فيلا أورا بنظام المنزل الذكي المتطور، الذي يتيح لك التحكم في جميع جوانب منزلك بسهولة.",
  ];
  groupedCards: any[][] = [];
activeDot = 0;

ngOnInit() {
  const chunkSize = 4; // 2x2 = 4 كروت
  for (let i = 0; i < this.cards.length; i += chunkSize) {
    this.groupedCards.push(this.cards.slice(i, i + chunkSize));
  }

  // تتبع السحب لتحديث dot
  setInterval(() => {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      const scrollLeft = container.scrollLeft;
      const slideWidth = 600;
      this.activeDot = Math.round(scrollLeft / slideWidth);
    }
  }, 200);
}

scrollToGroup(index: number) {
  const container = document.querySelector('.overflow-x-auto') as HTMLElement;
  const slideWidth = 600;
  container.scrollTo({
    left: index * slideWidth,
    behavior: 'smooth',
  });
}
}
