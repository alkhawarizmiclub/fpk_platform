import StaticPageContainer from "../../layouts/StaticPageContainer";
import React, { useState } from 'react';

const MediaPage = () => {
    return (
    <StaticPageContainer page_title="MediaPage">
        
       <div className="relative group w-full flex flex-col gap-2 rounded-lg overflow-hidden overflow">
            <div className="flex gap-4">
                <div className="relative w-1/3 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                    <a href="#">
                        <img src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/03/20230104_130525-scaled.jpg?resize=640%2C288" alt="Person's photo" className="h-full w-full object-cover bg-slate-300" />
                    </a>
                </div>
                <div className="relative w-1/3 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                    <a href="#">
                        <img src="http://www.fpk.ac.ma/wp-content/uploads/2023/03/20230104_125630-Copie-scaled.jpg" alt="Person's photo" className="h-full w-full object-cover bg-slate-300" />
                    </a>
                </div>
                <div className="relative w-1/3 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                    <a href="#">
                        <img src="http://www.fpk.ac.ma/wp-content/uploads/2023/03/FPK_vue-AMP-cnf-scaled.jpg" alt="Person's photo" className="h-full w-full object-cover bg-slate-300" />
                    </a>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="relative w-1/3 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                    <a href="#">
                        <img src="http://www.fpk.ac.ma/wp-content/uploads/2023/03/20230104_131826-scaled.jpg" alt="Person's photo" className="h-full w-full object-cover bg-slate-300" />
                    </a>
                </div>
                <div className="relative w-1/3 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                    <a href="#">
                        <img src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/03/20230104_131436-scaled.jpg?resize=640%2C288" alt="Person's photo" className="h-full w-full object-cover bg-slate-300" />
                    </a>
                </div>
                <div className="relative w-1/3 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                    <a href="#">
                        <img src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/03/20230104_125928-scaled.jpg?resize=640%2C288" alt="Person's photo" className="h-full w-full object-cover bg-slate-300" />
                    </a>
                </div>
              
                </div>
            </div>
       
        </StaticPageContainer>
    );
}

export default MediaPage;