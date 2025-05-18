import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import Swal from 'sweetalert2';
import * as Aos from "aos";


@Component({
  selector: "contact-form",
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'], 
   
 })
export class ContactFormComponent {
  formData = {
    name: '',
    phone: '',
  };
  ngAfterViewInit() {
        Aos.init(); // Initialize AOS
                  }

  onSubmit() {
    // تحقق بسيط قبل الإرسال
    if (!this.formData.name || !this.formData.phone) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يرجى تعبئة جميع الحقول المطلوبة.',
        confirmButtonText: 'حسنًا',
        confirmButtonColor: '#d33',
      });
      return;
    }

    // عرض SweetAlert عند الإرسال
    Swal.fire({
      icon: 'success',
      title: 'تم الإرسال!',
      text: 'شكرًا لتسجيل اهتمامك. سنتواصل معك قريبًا.',
      confirmButtonText: 'حسنًا',
      confirmButtonColor: '#01447B',
    });

    // إعادة تعيين النموذج
    this.formData = { name: '', phone: '' };
  }
}
