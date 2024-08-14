export function SignIn() {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center relative">
            <div className="flex flex-col items-center justify-between py-4 px-4 w-[460px] h-96 border-2 border-emerald-200 rounded-xl">
                <h1 className="text-2xl font-poppins font-bold text-gray-700">Welcome Back</h1>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-poppins font-medium text-gray-700">Email</label>
                        <input type="email" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-emerald-500" />
                    </div>
                    <div className="w-full flex flex-col mt-4">
                        <label className="text-sm font-poppins font-medium text-gray-700">Password</label>
                        <input type="password" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-emerald-500" />
                        <p className="w-full text-gray-600 font-poppins font-semibold text-right">can’t remember password? <a href="#" className="text-emerald-500 font-bold hover:text-emerald-600">restart</a></p>
                    </div>
                </div>
               
                <button className="w-full bg-emerald-500 rounded-full text-white p-2 text-xl font-poppins font-semibold hover:bg-emerald-600">Sign In</button>
            </div>

            <a href="/" className="font-poppins font-bold text-2xl absolute top-2">Logo</a>

        </div>
    )
}