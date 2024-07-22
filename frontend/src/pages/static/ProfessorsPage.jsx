import React from "react";
import StaticPageContainer from "../../layouts/StaticPageContainer";

const ProfessorsPage = () => {
  const professors = [
    {
      name: "Dr. Alice Smith",
      title: "Professeur de Mathématiques",
      email: "alice.smith@univ.ac.ma",
      phone: "+212612345678",
      image: "https://via.placeholder.com/150",
      bio: "Dr. Alice Smith est spécialisée en algèbre et en théorie des nombres. Elle a publié de nombreux articles sur la cryptographie et les mathématiques appliquées."
    },
    {
      name: "Dr. Bob Johnson",
      title: "Professeur de Physique",
      email: "bob.johnson@univ.ac.ma",
      phone: "+212612345679",
      image: "https://via.placeholder.com/150",
      bio: "Dr. Bob Johnson est expert en physique des particules et en astrophysique. Il a contribué à plusieurs découvertes importantes au sein de collaborations internationales."
    },
    {
      name: "Dr. Carol Davis",
      title: "Professeur de Chimie",
      email: "carol.davis@univ.ac.ma",
      phone: "+212612345680",
      image: "https://via.placeholder.com/150",
      bio: "Dr. Carol Davis se concentre sur la chimie organique et la recherche de nouveaux matériaux. Elle dirige plusieurs projets de recherche en collaboration avec l'industrie."
    },
    {
        name: "Dr. Bob Johnson",
        title: "Professeur de Physique",
        email: "bob.johnson@univ.ac.ma",
        phone: "+212612345679",
        image: "https://via.placeholder.com/150",
        bio: "Dr. Bob Johnson est expert en physique des particules et en astrophysique. Il a contribué à plusieurs découvertes importantes au sein de collaborations internationales."
      },
  ];


  return (
<StaticPageContainer page_title=" Professors ">
    <div className="flex flex-col items-center mx-auto p-6 space-y-6 max-w-6xl">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professors.map((professor, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={professor.image}
              alt={professor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {professor.name}
              </h3>
              <p className="text-orange-500 mb-2">{professor.title}</p>
              <p className="text-gray-700 mb-4">{professor.bio}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Email: <span className="text-blue-700">{professor.email}</span></li>
                <li>Téléphone: {professor.phone}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </StaticPageContainer>
  );
};

export default ProfessorsPage;
