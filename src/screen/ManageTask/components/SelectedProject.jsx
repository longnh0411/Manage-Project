import { actionType } from "../index";
const SelectedProject = ({project,saveData}) => {
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project?.name ?? ''}
                    </h1>
                    <button onClick={()=> saveData(actionType[4],project)} className="text-stone-600 hover:text-stone-950">
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{project.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.descrption}</p>
            </header>
        </div>
    )
}

export default SelectedProject;