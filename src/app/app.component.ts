import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathobelaMawashaResume';

  generatePDF() {
    const content: HTMLElement = document.getElementById('pdfContent')!;

    // Use html2pdf to generate the PDF with custom options
    html2pdf(content, {
      margin: 10,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  }
}
