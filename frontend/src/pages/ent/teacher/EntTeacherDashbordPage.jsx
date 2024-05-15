import React from 'react';

const EntTeacherDashbordPage = () => {
    return (
        <body className="bg-zinc-100 dark:bg-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">Admin</h1>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Jason Statham</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Search" className="px-4 py-2 border rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6">
                    {/* Widget Cards */}
                </div>
            </div>
        </body>
    );
}

export default EntTeacherDashbordPage;