import Button from "./Button"
import { actionType } from "../index";
export default function ProjectSideBar({listProject,changeAction}) {
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Dự án của bạn</h2>
            <div>
                <Button onClick={()=> changeAction(actionType[1],null)}>+ Thêm dự án</Button>
            </div>
            <ul className="mt-4">
                {listProject?.length > 0 && listProject?.map((project) => {
                    return (
                        <li key={project.id}>
                            <button onClick={()=>{changeAction(actionType[3],project)}} className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                                {project.name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}