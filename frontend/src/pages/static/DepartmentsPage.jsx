
import React, { useState } from 'react';
import StaticPageContainer from "../../layouts/StaticPageContainer";

const departments = [
  {
    id: 'llc',
    title: 'Langue Littérature et Communication',
    imageSrc: '/llc.jpeg',
    link: '/etablissement/departements/llc/',
  },
  {
    id: 'smpc',
    title: 'Sciences de la matière Physique-chimie',
    imageSrc: '/smpc.jpeg',
    link: '/etablissement/departements/smpc/',
  },
  {
    id: 'gbg',
    title: 'Géographie Biologie Géologie',
    imageSrc: '/gbg.jpg',
    link: '/etablissement/departements/gbg/',
  },
  {
    id: 'seg',
    title: 'Sciences Economiques & Gestion',
    imageSrc: '/eg.jpeg',
    link: '/etablissement/departements/seg/',
  },
  {
    id: 'mi',
    title: 'Sciences Mathématiques et Informatique',
    imageSrc: '/mi.jpg',
    link: '/etablissement/departements/mi/',
  },
];

 
  const DepartmentPage = () => {
    
  
    return (
      <StaticPageContainer page_title="Nos départements ">
      <div className="container mx-auto p-6">
      <div className="gutentor-block-header">
        <div className="gutentor-section-title enable-title-design seperator-bottom text-center mb-6">
          
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div key={department.id} className="gutentor-single-item gutentor-image g-single-column-link-enabled relative">
            <div className="gutentor-single-item-wrap">
              <div className="gutentor-single-item-image-box">
                <div className="gutentor-image-thumb">
                  <img
                    fetchPriority="high"
                    decoding="async"
                    className="normal-image w-full h-64 object-cover"
                    src={department.imageSrc}
                    alt={department.title}
                  />
                </div>
              </div>
              <div className="gutentor-single-item-content text-center p-4">
                <h3 className="gutentor-single-item-title font-bold">
                  {department.title}
                </h3>
              </div>
            </div>
            <a
              className="gutentor-single-item-box-link gutentor-link absolute inset-0"
              href={department.link}
              rel="noopener noreferrer"
            ></a>
          </div>
        ))}
      </div>
    </div>
    </StaticPageContainer>
    );
  };
  

export default DepartmentPage;