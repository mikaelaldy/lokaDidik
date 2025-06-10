
import jsPDF from 'jspdf';

interface Problem {
  id: string;
  question: string;
  answer: string;
  solution: string;
}

export const generatePDFWithWatermark = (problems: Problem[], gradeLevel: string, topic: string, localContext: string) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Watermark function
  const addWatermark = () => {
    doc.saveGraphicsState();
    doc.setGState(doc.GState({ opacity: 0.1 }));
    doc.setTextColor(128, 128, 128);
    doc.setFontSize(8);
    
    // Position watermark at bottom right
    const watermarkText = "lokaDidik, made with ❤ by mikael aldy for indonesian education";
    const textWidth = doc.getTextWidth(watermarkText);
    doc.text(watermarkText, pageWidth - textWidth - 10, pageHeight - 10);
    
    doc.restoreGraphicsState();
  };

  // Header
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text('Lembar Kerja Matematika', 20, 30);
  
  doc.setFontSize(12);
  doc.text(`Kelas: ${gradeLevel}`, 20, 45);
  doc.text(`Topik: ${topic}`, 20, 55);
  doc.text(`Konteks: ${localContext.substring(0, 80)}${localContext.length > 80 ? '...' : ''}`, 20, 65);
  
  let yPosition = 85;
  
  // Add problems
  problems.forEach((problem, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      addWatermark();
      doc.addPage();
      yPosition = 30;
    }
    
    // Problem number and question
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}.`, 20, yPosition);
    
    // Split long questions into multiple lines
    const questionLines = doc.splitTextToSize(problem.question, pageWidth - 40);
    doc.text(questionLines, 30, yPosition);
    
    yPosition += questionLines.length * 7 + 15;
    
    // Answer space
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Jawaban:', 30, yPosition);
    yPosition += 10;
    
    // Draw answer lines
    for (let i = 0; i < 3; i++) {
      doc.line(30, yPosition + (i * 8), pageWidth - 30, yPosition + (i * 8));
    }
    
    yPosition += 35;
  });
  
  // Add watermark to the last page
  addWatermark();
  
  // Generate answer key on new page
  doc.addPage();
  addWatermark();
  
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text('Kunci Jawaban & Pembahasan', 20, 30);
  
  yPosition = 50;
  
  problems.forEach((problem, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 100) {
      addWatermark();
      doc.addPage();
      yPosition = 30;
    }
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}. Jawaban: ${problem.answer}`, 20, yPosition);
    yPosition += 15;
    
    doc.setFontSize(10);
    doc.text('Pembahasan:', 20, yPosition);
    yPosition += 10;
    
    const solutionLines = doc.splitTextToSize(problem.solution, pageWidth - 40);
    doc.text(solutionLines, 25, yPosition);
    yPosition += solutionLines.length * 5 + 20;
  });
  
  // Add watermark to the last page if not already added
  addWatermark();
  
  // Save the PDF
  doc.save(`soal-matematika-${gradeLevel}-${Date.now()}.pdf`);
};
