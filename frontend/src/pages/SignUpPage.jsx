const SignUpPage = () => {
    return (
        <>
            <div className="p-10 w-1/2 flex justify-center items-center ">

                <form method="post" className="flex flex-col gap-5">

                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="first-name-ar">First Name AR</label>
                            <input type="text" name="first-name-ar" id="first-name-ar" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="first-name-ar">Last Name AR</label>
                            <input type="text" name="last-name-ar" id="last-name-ar" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="first-name-ar">First Name FR</label>
                            <input type="text" name="first-name-fr" id="first-name-fr" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="first-name-ar">Last Name FR</label>
                            <input type="text" name="last-name-fr" id="last-name-fr" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="password2">Password (repeated)</label>
                        <input type="password" name="password2" id="password2" placeholder="test" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>

                    <p>Forgot your password ? <a href="#" className="text-blue-500">Reset it here.</a></p>

                    <input type="submit" value="Sign Up" className="py-2 px-3 rounded-lg text-white bg-blue-500" />

                </form>

            </div>

            <div className="p-10 w-1/2 flex flex-col justify-center items-center bg-red-100">

            </div>
        </>
    );
}

export default SignUpPage;