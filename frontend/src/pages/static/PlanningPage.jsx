import StaticPageContainer from "../../layouts/StaticPageContainer";

const filieres = [
   
    { name: "EA", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/ea.pdf" },
    { name: "GEO", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/geo.pdf" },
    { name: "SEG", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/seg.pdf" },
    { name: "SV", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/sv.pdf" },
    { name: "SMC", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/smc.pdf" },
    { name: "SMP", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/smp.pdf" },
    { name: "SMA", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/sma.pdf" },
    { name: "SMI", pdf: "http://www.fpk.ac.ma/wp-content/uploads/2024/07/smi.pdf" },
  ];
const PLANNING_PAGE = () => {
    return(
<StaticPageContainer page_title="Planning ">

<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Planning des Examens</h1>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Filière</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planning PDF</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filieres.map((filiere) => (
            <tr key={filiere.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{filiere.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={filiere.pdf} className="text-blue-500 hover:text-blue-700">Voir PDF</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</StaticPageContainer>
    );
}
export default PLANNING_PAGE;