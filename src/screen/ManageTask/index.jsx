import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

const ManageTask = () => {
        const [projectState,setProjectState] = useState({
            actionType : actionType[0],
            projectSelectedId : null,
            projects : [],
        });
    
        function handleActionType(action,data){
            switch (action) {
            case actionType[0]: // Case Cancel
                setProjectState((currentState) => {
                return {
                    ...currentState,
                    actionType : actionType[0],
                    projectSelectedId : null,
                }
                })
                break;
        
            case actionType[1]: // case Add new
                setProjectState((currentState) => {
                return {
                    ...currentState,
                    actionType : actionType[1],
                    projectSelectedId : null,
                }
                })
                break;
            
            case actionType[2]: // Case save data create,edit
                if(typeof data.id === "number"){
                setProjectState((currentState) => {
                    let indexItemUpdate = currentState.projects.findIndex((item) => item.id === data.id);
                    let cloneProducts = [...currentState.projects];
                    cloneProducts[indexItemUpdate] = data;
                    return {
                    ...currentState,
                    actionType : actionType[0],
                    projectSelectedId : null,
                    projects : cloneProducts ?? [],
                    }
                });
                } else {
                setProjectState((currentState) => {
                    return {
                    ...currentState,
                    actionType : actionType[0],
                    projectSelectedId : null,
                    projects : [{...data,id : currentState.projects.length},...currentState.projects]
                    }
                });
                }
                break
        
            case actionType[3]: // case show data edit
                setProjectState((currentState) => {
                return {
                    ...currentState,
                    actionType : actionType[3],
                    projectSelectedId : data,
                }
                });
                break
        
            case actionType[4]: // Case Delete
                setProjectState((currentState) => {
                let indexItemRemove = currentState?.projects.findIndex((item) => item.id === data?.id);
                console.log("indexItemRemove: ", indexItemRemove);
                let newProjects = [...currentState?.projects].splice(indexItemRemove,-1);
                console.log("newProjects: ", newProjects);
                return {
                    ...currentState,
                    actionType : actionType[0],
                    projectSelectedId : null,
                    projects : newProjects ?? [],
                }
                });
                break
            
            }
        }
    
        return(
            <main className="h-screen my-8 flex gap-8">

                {/* Menu left */}
                <ProjectSideBar
                    listProject={projectState?.projects ?? []}
                    changeAction={handleActionType} 
                />

                {/* Tạo mới dự án */}
                { projectState.actionType === actionType[1] &&
                    <NewProject handleActionType={handleActionType} />
                }

                { projectState.actionType === actionType[3] &&
                    <SelectedProject project={projectState.projectSelectedId} saveData={handleActionType} />
                }

                {/* Khi không có dự án được chọn */}
                { projectState.actionType === actionType[0] && !projectState.projectSelectedId &&
                    <NoProjectSelected handleActionType={handleActionType} />
                }
            </main>
        )
}

export default ManageTask;

export const actionType = {
    0 : "NON",
    1 : "ADD",
    2 : "SAVE",
    3 : "EDIT",
    4 : "DELETE",
}