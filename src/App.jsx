import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return(
        <div className="w-screen h-screen bg-slate-800 flex flex-col items-center justify-center gap-32">
            <h4 className="text-7xl text-white">Thực hành React</h4>
            <div className="flex flex-row w-2/3 flex-wrap">
                <Link to="/manage-task" className="w-1/3 h-40 p-4 hover:p-2 text-3xl hover:text-4xl">
                    <div className="rounded-md border w-full h-full border-solid border-slate-200 flex items-center justify-center">
                        <span className="font-bold text-white">Manager Task</span>
                    </div>
                </Link>
                <Link to="/caro" className="w-1/3 h-40 p-4 hover:p-2 text-3xl hover:text-4xl">
                    <div className="rounded-md border w-full h-full border-solid border-slate-200 flex items-center justify-center">
                        <span className="font-bold text-white">Caro</span>
                    </div>
                </Link>
                <Link to="/cart" className="w-1/3 h-40 p-4 hover:p-2 text-3xl hover:text-4xl">
                    <div className="rounded-md border w-full h-full border-solid border-slate-200 flex items-center justify-center">
                        <span className="font-bold text-white">Cart</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default App;