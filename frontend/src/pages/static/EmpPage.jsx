import StaticPageContainer from "../../layouts/StaticPageContainer";

const EMP_PAGE = () => {
    const filieres = [
        { name: "SMA", s2Pdf: "/Emploi/MIPS2.pdf", s4Pdf: "/Emploi/SMAS4.pdf", s6Pdf: "/Emploi/SMAS6.pdf" },
        { name: "SMI", s2Pdf: "/Emploi/MIPS2.pdf", s4Pdf: "/Emploi/SMIS4.pdf", s6Pdf: "/Emploi/SMIS6.pdf" },
        { name: "SMP", s2Pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/03/Emploi-du-Temps-TC-PC-CTD-Section-A-SP-23-24-2.pdf", s4Pdf: "/Emploi/SMPS4.pdf", s6Pdf: "/Emploi/SMPS6.pdf" },
        { name: "SMC", s2Pdf: "link_to_sma_s2_pdf", s4Pdf: "/Emploi/SMCS4.pdf", s6Pdf: "/Emploi/SMCS6.pdf" },
        { name: "GEO", s2Pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/03/Emploi-du-Temps-TC-Geo-Section-A-S2-SP-23-24-5.pdf", s4Pdf: "/Emploi/GEOS4.pdf", s6Pdf: "/Emploi/GEOS6.pdf" },
        { name: "SEG", s2Pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/03/Emploi-du-Temps-CTD-TC-CFF-Section-A-S2-SP-23-24-3.pdf", s4Pdf: "/Emploi/SEGS4.pdf", s6Pdf: "/Emploi/SEGS6" },
        { name: "SV", s2Pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/05/Emploi-du-temps-SP-TC-BCG-S2-BES-Cours-TD-TPs-14-Mai-2024.xls-SV-SA.pdf", s4Pdf: "/Emploi/SVS4.pdf", s6Pdf: "/Emploi/SVS6.pdf" },
        { name: "EA", s2Pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/03/Emploi-du-Temps-TC-EA-S2-SP-23-24-2.pdf", s4Pdf: "/Emploi/EAS4.pdf", s6Pdf: "/Emploi/EAS6.pdf" },
      ];
      const LP = [
        { name: "GRGM",s2Pdf: "link_to_sma_s2_pdf", s4Pdf: "/Emploi/GRGMS4.pdf", s6Pdf: "/Emploi/GMSS6.pdf"},
      ];
      
      const masters = [
       
        { name: "M-MR", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/02/Emplois_Master_MMR_S2_2021_2022.xlsx-Master-MR.pdf" },
        
        { name: "M-EBA", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/02/Emploi-de-temps_MEBA_S8_23_24.pdf" },
        { name: "M-آليات تحليل الخطاب الأدبي", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/03/%D8%A7%D8%B3%D8%AA%D8%B9%D9%85%D8%A7%D9%84-%D9%85%D8%A7%D8%B3%D8%AA%D8%B1-%D8%A7%D9%84%D9%8A%D8%A7%D8%AA-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%AE%D8%B7%D8%A7%D8%A8-2.pdf" },
        { name: "MS-التواصل البيداغوجي وديداكتيك اللغة العربية", pdf: "http://www.fpk.ac.ma/posts/5842#:~:text=S2-,T%C3%A9l%C3%A9charger,-Master%20Ecotoxicologie%20et" },
        // Add more masters if needed
      ];
    return(
        <StaticPageContainer page_title="Emplois de Temps  ">
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Filières de Licence Fondamentale</h1>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Filière</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S2</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S4</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S6</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filieres.map((filiere) => (
            <tr key={filiere.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{filiere.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={filiere.s2Pdf} className="text-blue-500 hover:text-blue-700">Voir PDF</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={filiere.s4Pdf} className="text-blue-500 hover:text-blue-700">Voir PDF</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={filiere.s6Pdf} className="text-blue-500 hover:text-blue-700">Voir PDF</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-2xl font-bold mb-4">Filières de Licence Professionnelle</h1>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Filière</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S2</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S4</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S6</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {LP.map((LP) => (
            <tr key={LP.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{LP.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={LP.s2Pdf} className="text-blue-500 hover:text-blue-700">PDF</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={LP.s4Pdf} className="text-blue-500 hover:text-blue-700"> PDF</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={LP.s6Pdf} className="text-blue-500 hover:text-blue-700">PDF</a>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-bold mt-8 mb-4">Master</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Master</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S2</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {masters.map((master) => (
            <tr key={master.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{master.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={master.pdf} className="text-blue-500 hover:text-blue-700">Voir PDF</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </StaticPageContainer>
    );
}
export default EMP_PAGE;