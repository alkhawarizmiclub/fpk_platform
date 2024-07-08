import jsPDF from 'jspdf';
import fpkLogo from "../../assets/fpkLogo.png";
import usmsLogo from "../../assets/usmsLogo.png";
import Paths from "../../routers/Paths.json";


const gradeSheetsPdfGenerator = ({ schoolSeason, docTitle, docId, fullname, cneNum, apogeeNum, birthPlace, birthDate, semesterNum, majorLabel, subjectsResultsTable }) => {
    const padding = 15;

    const fpkLogoImage = new Image(Math.round(30 * (975 / 717), 2), 30);
    fpkLogoImage.src = fpkLogo;

    const usmsLogoImage = new Image(Math.round(30 * (490 / 567), 2), 30);
    usmsLogoImage.src = usmsLogo;

    const doc = new jsPDF('p', 'mm', 'a4');
    doc.setFont("Helvetica");

    // Header Section
    doc.addImage(usmsLogoImage, 'PNG', padding, 10, usmsLogoImage.width, usmsLogoImage.height);
    doc.addImage(fpkLogoImage, 'PNG', doc.internal.pageSize.getWidth() - padding - fpkLogoImage.width, 10, fpkLogoImage.width, fpkLogoImage.height);

    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text("Université Sultan Moulay Slimane", padding, 45, { align: "left" });
    doc.text("Faculté Polydisciplinaire de Khouribga", doc.internal.pageSize.getWidth() - padding, 45, { align: "right" });

    // Title Section
    doc.setFontSize(20);
    doc.setFont(undefined, "bold");
    doc.text(docTitle, doc.internal.pageSize.getWidth() / 2, 65, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Année universitaire: ${schoolSeason}`, doc.internal.pageSize.getWidth() / 2, 75, { align: "center" });

    // Info Section
    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    doc.text(`Nom complet: ${fullname}`, padding, 90);
    doc.text(`CNE: ${cneNum}`, padding, 96);
    doc.text(`APOGEE: ${apogeeNum}`, padding, 102);
    doc.text(`Lieu de naissance: ${birthPlace}`, padding, 108);
    doc.text(`Date de naissance: ${birthDate.getDay()}`, padding, 114);
    doc.text(`Semestre: ${semesterNum}`, padding, 120);
    doc.text(`Filière: ${majorLabel}`, padding, 126);

    // Data Section (Table)
    doc.autoTable({
        startY: 130,
        head: [["Module", "Note/Bareme", "Résultat", "Session", "Pts jury"]],
        body: subjectsResultsTable.slice(1, subjectsResultsTable.length - 1),
        foot: [subjectsResultsTable.at(subjectsResultsTable.length - 1)],
        tableWidth: 'auto'
    });

    // Stamp Section
    const stampY = doc.autoTable.previous.finalY + 20;
    doc.text(`ID unique: ${docId}`, padding, stampY);
    doc.text(`Vérifiez le contenu: ${Paths.ENT_E_DOCUMENTS_VERIFICATION_PAGE}`, padding, stampY + 10);
    doc.text("Signature et cachet du doyen", padding, stampY + 20);

    // Footer
    doc.setFontSize(10);
    doc.setFont(undefined, "normal");
    doc.text("Avis important : il ne peut etre delivré qu'un seul exemplaire du present relevé de note. Aucun duplicata ne sera fourni.", 105, 290, { align: "center" });

    return doc;
}

const deugAttestationPdfGenerator = (data) => {

}

export { gradeSheetsPdfGenerator, deugAttestationPdfGenerator };