import StaticPageContainer from "../../layouts/StaticPageContainer";


const staffMembers = [
    { name: "ABDELAZIZ EL MEKNASSI" },
    { name: "ABDELHADI NAKHAL" },
    { name: "ABDERRAHIM LAHMAR" },
    { name: "ALLAL KHRIBCHI" },
    { name: "ATIKA ZIOUI" },
    { name: "ZINEB EL MAAKOUL" },
    { name: "FAHD MOUNTACIR" },
    { name: "FATIMA BENTECH" },
    { name: "JIHAD MEZDI" },
    { name: "LAILA DRIOUACH" },
    { name: "MARIAM HATTANE" },
    { name: "MARIAM ZENOUAKI" },
    { name: "MERYEM TAYBI" },
    { name: "MOHAMMED JETTI" },
    { name: "BRAHIM EL FOURATI" },
    { name: "MORAD MATROUF" },
    { name: "SALIMA NACIR" },
    { name: "SANAA JENNANE" },
    { name: "WIDAD EL KADIRI" },
    { name: "YOUSSEF JAMIL" },
    { name: "YOUSSEF BINID" },
    { name: "ISMAIL RHRAISSA" },
    { name: "BOUAZZA SAADAOUI" },
    { name: "MAHRACH KAOUTAR" }
  ];

const StaffPage = () => {
    return (
        <StaticPageContainer page_title="Staff">
           <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 inline-block pb-2">Doyen</h2>
        </div>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <div className="mb-4">
              <img
                src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/02/doyen-1-scaled-e1677513352365.jpg?resize=200%2C252"
                alt="Khalid Mehdi"
                className="mx-auto rounded-md"
                width="200"
                height="252"
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold">Khalid Mehdi</h5>
              <p className="text-gray-600">Doyen de la Faculté Polydisciplinaire de Khouribga</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="staff-section" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2  className="text-3xl font-bold border-b-2 border-gray-300 inline-block pb-2">Responsables</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <img
                className="rounded-full mx-auto h-48 w-48 object-cover"
                src="vide_dean_1.jpeg"
                alt="Khalid Sbiaai"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">Khalid Sbiaai</h5>
            <p className="text-gray-600">Vice Doyen chargé à la pédagogie</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <img
                className="rounded-full mx-auto h-48 w-48 object-cover"
                src="secretary_general.jpg"
                alt="Omar Hansali"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">Omar Hansali</h5>
            <p className="text-gray-600">Secrétaire Générale</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <img
                className="rounded-full mx-auto h-48 w-48 object-cover"
                src="vice_dean_2.jpg"
                alt="Noureddine Barka"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">Noureddine Barka</h5>
            <p className="text-gray-600">Vice Doyen chargé de la recherche scientifique et de la coopération</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section-0fc92415-eccd-4f7b-a096-8c12a67df15c" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 inline-block pb-2">Equipe administrative</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
                  <svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6 text-gray-600 absolute inset-0 m-auto"
>
  <path d="M12 2C14.21 2 16 3.79 16 6C16 8.21 14.21 10 12 10C9.79 10 8 8.21 8 6C8 3.79 9.79 2 12 2Z"></path>
  <path d="M2 22C2 18 12 16 12 16C12 16 22 18 22 22"></path>
</svg>
                    <i className="fas fa-user text-gray-600"></i>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-800">{staff.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
        </StaticPageContainer>
    );
}

export default StaffPage;