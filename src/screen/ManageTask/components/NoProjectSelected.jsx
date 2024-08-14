import noProjectImage from "../../../assets/no-projects.png";
import Button from "./Button";
import { actionType } from "../index";
export default function NoProjectSelected({handleActionType}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img 
                src={noProjectImage} 
                alt="An empty task list"
                className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">
                Không có dự án được lựa chọn
            </h2>
            <p className="text-stone-400 mb-4">
                Chọn một dự án hoặc bắt đầu một dự án mới
            </p>
            <p className="mt-8">
                <Button onClick={()=> handleActionType(actionType[1])}>Tạo mới dự án</Button>
            </p>
        </div>
    )
}