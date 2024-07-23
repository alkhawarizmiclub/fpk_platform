import { jsPDF } from "jspdf";
import 'jspdf-autotable';



const generatePDF = (formData) => {
    const doc = new jsPDF();

    const padding = 14;
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageCenterX = pageWidth / 2;

    const studentInfo = [
        [{ content: 'Informations personnelles', colSpan: 2, styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 165, 0] } }],
        ['Nom', formData.firstName],
        ['PréfirstName', formData.lastName],
        // ['Nom en arabe', formData.firstNameAr],
        // ['Prénom en arabe', formData.lastNameAr],
        ['Date de Naissance', formData.birthDate],
        ['Lieu de Naissance', formData.birthPlace],
        ['Nationalité', formData.nationality],
        ['CIN/Passport', formData.idNum],
        ['Email', formData.email],
        ['Téléphone', formData.phone],
        ['Téléphone Urgent', formData.emergencyPhone],
        ['Adresse', formData.homeAddress],
    ];
    const academicInfo = [
        [{ content: 'Parcours Académique', colSpan: 2, styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 165, 0] } }],
        ['Filière', formData.major],
        ['Type du  Baccalauréat', formData.bacYear],
        ['CNE', formData.studentId],
        ['Année du Baccalauréat', formData.bacYear],
        ['Moyenne du Bac', formData.bacGrade], // Replace with correct key
    ];
    const documentsProvided = [
        [{ content: 'Documents Fournis', colSpan: 2, styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 165, 0] } }],
        ['Copie de la CIN (Recto-verso)', formData.idCardFile ? 'X' : ''],
        ['Copie du diplôme du Baccalauréat', formData.bacFile ? 'X' : ''],
        ['Copie des relevees du Baccalauréat', formData.gradeSheetsFile ? 'X' : ''],
    ];

    // Adding header
    doc.setFontSize(12);
    doc.text('Université Sultan Moulay Slimane', pageCenterX, 20, { align: 'center' });
    doc.text('Faculté Polydisciplinaire de Khouribga', pageCenterX, 26, { align: 'center' });
    doc.setFontSize(18);
    doc.text('Fiche de pré-inscription', pageCenterX, 40, { align: 'center' });

    // Adding student info table
    doc.autoTable({
        body: studentInfo,
        startY: 50, // Adjust as needed
        styles: { fontSize: 10 },
        headStyles: { fillColor: [255, 165, 0], fontStyle: 'bold', halign: 'center' },
        bodyStyles: { halign: 'left' },
        columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'wrap' } },
        tableLineWidth: 0.1, // Line width between columns
    });

    // Adding academic info table
    doc.autoTable({
        body: academicInfo,
        startY: doc.autoTable.previous.finalY + 10, // Start after previous table + padding
        styles: { fontSize: 10 },
        headStyles: { fillColor: [255, 165, 0], fontStyle: 'bold', halign: 'center' },
        bodyStyles: { halign: 'left' },
        columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'wrap' } },
        tableLineWidth: 0.1, // Line width between columns
    });

    // Adding documents provided section
    doc.autoTable({
        body: documentsProvided,
        startY: doc.autoTable.previous.finalY + 10, // Start after previous table + padding
        styles: { fontSize: 10 },
        headStyles: { fillColor: [255, 165, 0], fontStyle: 'bold', halign: 'center' },
        bodyStyles: { halign: 'left' },
        columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'wrap' } },
        tableLineWidth: 0.1, // Line width between columns
    });

    // Adding download date
    const downloadDate = new Date().toLocaleDateString('fr-FR');
    doc.setFontSize(10);
    doc.text(`Date de téléchargement : ${downloadDate}`, pageWidth - padding, doc.autoTable.previous.finalY + 10, null, null, 'right');

    // Adding footer
    doc.setLineWidth(0.5);
    doc.line(10, doc.internal.pageSize.height - 20, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 20);
    doc.setFontSize(8);
    doc.text('www.fpk.ac.ma', 105, doc.internal.pageSize.height - 8, null, null, 'center');
    doc.text('Tel: +212 456 789 | Fax: +212 5671234475', 105, doc.internal.pageSize.height - 4, null, null, 'center'); // Replace with actual phone number



    const fpkLogoImage = new Image();
    fpkLogoImage.src = "/lo.png";

    fpkLogoImage.onload = () => {
        const aspectRatio = fpkLogoImage.width / fpkLogoImage.height;
        const imageWidth = 30;
        const imageHeight = imageWidth / aspectRatio;

        doc.addImage(fpkLogoImage, 'PNG', padding, 10, imageWidth, imageHeight);

        // if (formData.studentPhoto) {
        //     const fpkLogoImage = new Image();
        //     doc.addImage(formData.studentPhoto, 'PNG', 150, 15, 40, 40);
        // }

        doc.save('informations_etudiant.pdf');
    }

};

export default generatePDF;