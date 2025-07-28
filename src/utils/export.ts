import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BrandIdentity } from '../types';

export async function exportToPDF(brandName: string, identity: BrandIdentity): Promise<void> {
  try {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = margin;

    // Title
    pdf.setFontSize(24);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${brandName} - Brand Identity Kit`, margin, yPosition);
    yPosition += 20;

    // Slogans
    pdf.setFontSize(16);
    pdf.text('Brand Slogans:', margin, yPosition);
    yPosition += 10;
    pdf.setFontSize(12);
    identity.slogans.forEach((slogan, index) => {
      pdf.text(`${index + 1}. ${slogan}`, margin + 5, yPosition);
      yPosition += 8;
    });
    yPosition += 10;

    // About Us
    pdf.setFontSize(16);
    pdf.text('About Us (Formal):', margin, yPosition);
    yPosition += 10;
    pdf.setFontSize(10);
    const formalLines = pdf.splitTextToSize(identity.aboutUs.formal, pageWidth - 2 * margin);
    pdf.text(formalLines, margin, yPosition);
    yPosition += formalLines.length * 5 + 10;

    // Color Palette
    pdf.setFontSize(16);
    pdf.text('Color Palette:', margin, yPosition);
    yPosition += 10;
    pdf.setFontSize(12);
    Object.entries(identity.colorPalette).forEach(([name, color]) => {
      pdf.text(`${name.charAt(0).toUpperCase() + name.slice(1)}: ${color}`, margin + 5, yPosition);
      yPosition += 8;
    });

    // Save the PDF
    pdf.save(`${brandName}-brand-identity.pdf`);
  } catch (error) {
    console.error('Failed to export PDF:', error);
    alert('Failed to export PDF. Please try again.');
  }
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
  }
}