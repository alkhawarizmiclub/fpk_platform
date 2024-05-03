// const Staff = ({ first_name, last_name, occupation, img_src }) => {

//     let bg_img = "";

//     if (img_src) {
//         bg_img = `bg-[url(${img_src})]`;
//     } else {
//         bg_img = "bg-slate-300";
//     }

//     return (
//         <div className="flex flex-col items-center text-center">
//             <div className={`mb-5 max-w-48 w-full aspect-square rounded-full overflow-hidden bg-slate-300`}>
//                 <img src={img_src} alt={`${first_name} ${last_name}'s portrait image`} className="mb-5 max-w-48 w-full rounded-full bg-gray-200" />
//             </div>
//             <h1 className="text-slate-800 text-lg font-semibold">{first_name} {last_name}</h1>
//             <h2 className="text-slate-500">{occupation}</h2>
//         </div>
//     );
// }

// export default Staff;


import React from 'react';
import { Link } from 'react-router-dom';

const Staff = ({ first_name, last_name, occupation, img_src }) => {

    let bg_img = "";

    if (img_src) {
        bg_img = `bg-[url(${img_src})]`;
    } else {
        bg_img = "bg-slate-300";
    }

    return (
        <div className="container mx-auto group">
            <div className="relative">
                <img src={img_src} alt={`${first_name} ${last_name}'s portrait image`} className="rounded-full w-32 h-32 object-cover group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white shadow-lg p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">{first_name} {last_name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{occupation}</p>
                    {/* You can use Link component instead of <a> for routing in React */}
                    {/* <a href={url} className="text-teal-500 font-semibold hover:text-teal-700">Contact</a> */}
                    {/* Assuming you want to add a link for contact */}
                    <Link to="/contact" className="text-teal-500 font-semibold hover:text-teal-700">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Staff;
