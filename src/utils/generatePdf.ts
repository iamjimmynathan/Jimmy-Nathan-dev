import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCE_TIMELINE } from '../data/portfolioData';

/**
 * Loads an image URL into a base64 Data URL using an HTML5 Canvas.
 */
function getBase64ImageFromUrl(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/jpeg', 0.85);
        resolve(dataURL);
      } catch (err) {
        console.warn('Could not convert image to base64 for PDF', err);
        resolve(null);
      }
    };
    img.onerror = () => {
      resolve(null);
    };
    img.src = url;
  });
}

/**
 * Generates and downloads a clean, professional PDF resume for Jimmy Nathan.
 */
export async function downloadResumePdf(): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;

  let y = 18;

  // Header Banner Background (Deep Executive Midnight)
  doc.setFillColor(7, 11, 20); // #070B14
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Accent Line under header (Executive Sky Blue)
  doc.setFillColor(14, 165, 233); // #0EA5E9
  doc.rect(0, 42, pageWidth, 1.5, 'F');

  // Attempt to add Jimmy's photo
  try {
    const photoBase64 = await getBase64ImageFromUrl(PERSONAL_INFO.portraitImage);
    if (photoBase64) {
      // Add portrait thumbnail in top right
      doc.addImage(photoBase64, 'JPEG', pageWidth - margin - 22, 10, 22, 26);
      // Border around photo
      doc.setDrawColor(14, 165, 233);
      doc.setLineWidth(0.5);
      doc.rect(pageWidth - margin - 22, 10, 22, 26);
    }
  } catch (e) {
    // Graceful fallback: continue without image
  }

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text('JIMMY NATHAN', margin, y);

  y += 7;
  // Subtitle / Roles
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(56, 189, 248); // Sky 400
  doc.text('FULL-STACK DEVELOPER & MOBILE APP DEVELOPER', margin, y);

  y += 6;
  // Contact details line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225); // Slate 300
  doc.text(
    `${PERSONAL_INFO.location}  |  ${PERSONAL_INFO.email}  |  ${PERSONAL_INFO.whatsappFormatted}  |  github.com/iamjimmynathan  |  linkedin.com/in/hejimmynathan`,
    margin,
    y
  );

  y = 50;

  // Helper function for section headings
  const addSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(7, 11, 20); // Deep Midnight
    doc.text(title.toUpperCase(), margin, y);

    // Decorative line
    doc.setDrawColor(14, 165, 233); // Sky Blue line
    doc.setLineWidth(0.6);
    doc.line(margin, y + 1.5, margin + 45, y + 1.5);

    doc.setDrawColor(226, 232, 240); // Light gray continuation
    doc.setLineWidth(0.2);
    doc.line(margin + 45, y + 1.5, pageWidth - margin, y + 1.5);

    y += 6.5;
  };

  // Section 1: Executive Summary
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // Slate 700

  const summaryText =
    'Self-taught Full-Stack Developer and Mobile App Developer based in Nigeria with 4+ years of hands-on experience building high-throughput web applications, scalable REST APIs, and native-grade iOS & Android mobile apps using React Native. Proven history of shipping 28+ projects across fintech, real-time social platforms, e-commerce, and collaborative SaaS dashboards. Passionate about clean architecture, performance optimization, and pragmatic product delivery.';

  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4 + 4;

  // Section 2: Technical Proficiencies
  addSectionHeader('Technical Proficiencies');
  doc.setFontSize(8);

  const skillsData = [
    { label: 'Frontend Engineering:', text: 'React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap, HTML5/CSS3' },
    { label: 'Mobile App Development:', text: 'React Native, Expo CLI/EAS, Cross-Platform iOS & Android, Native Device APIs, Offline Sync' },
    { label: 'Backend & APIs:', text: 'Node.js, Express.js, RESTful Architecture, JWT Authentication, WebSockets (Socket.io), Rate Limiting' },
    { label: 'Databases & Tools:', text: 'PostgreSQL, MongoDB, Firebase Firestore, Git/GitHub, Postman, Figma, Docker, Paystack/Stripe' },
  ];

  skillsData.forEach((s) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${s.label} `, margin, y);
    const labelWidth = doc.getTextWidth(`• ${s.label} `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textLines = doc.splitTextToSize(s.text, contentWidth - labelWidth);
    doc.text(textLines, margin + labelWidth, y);
    y += textLines.length * 3.8 + 1;
  });

  y += 3;

  // Section 3: Professional Experience
  addSectionHeader('Professional Experience');

  EXPERIENCE_TIMELINE.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);

    // Period (aligned right)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(2, 132, 199); // Sky dark (#0284C7)
    doc.text(exp.period, pageWidth - margin, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.company}  ·  ${exp.location}`, margin, y);

    y += 3.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);

    exp.description.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 4);
      doc.text(bulletLines, margin + 2, y);
      y += bulletLines.length * 3.6;
    });

    y += 2.5;
  });

  y += 1;

  // Section 4: Selected Production Implementations
  addSectionHeader('Key Production Implementations');

  const keyProjects = [
    {
      name: 'ApexPay Fintech & Mobile Wallet (React Native, Node.js, PostgreSQL):',
      desc: 'Engineered cross-platform mobile app with biometric transfer approvals, idempotent ledger transactions with PostgreSQL row-level locks, and sub-400ms endpoint response times.',
    },
    {
      name: 'Velocity E-Commerce & Merchant Engine (React, Node.js, Paystack & Stripe):',
      desc: 'Implemented dual payment webhooks with automated reconciliation, Redis caching for fast product lookups, and a 98/100 Google Lighthouse mobile score.',
    },
    {
      name: 'PulseWave Real-Time Social Platform (React, Socket.io, MongoDB):',
      desc: 'Designed event-driven real-time direct messaging and stories platform with sub-50ms message latency across thousands of simulated concurrent sockets.',
    },
  ];

  keyProjects.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.name, margin, y);
    y += 3.6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(proj.desc, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.4 + 2;
  });

  // Footer / Availability Strip
  y = pageHeight - 14;
  doc.setFillColor(241, 245, 249); // slate-100
  doc.rect(margin, y - 2, contentWidth, 8, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('STATUS: AVAILABLE FOR CONTRACTS & FULL-TIME ROLES', margin + 3, y + 3.2);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(
    `Direct Email: ${PERSONAL_INFO.email}  |  WhatsApp: ${PERSONAL_INFO.whatsappFormatted}`,
    pageWidth - margin - 3,
    y + 3.2,
    { align: 'right' }
  );

  // Trigger browser download
  doc.save('Jimmy_Nathan_CV.pdf');
}
