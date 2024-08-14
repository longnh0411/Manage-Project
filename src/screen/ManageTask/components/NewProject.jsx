import { useEffect, useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";
import { actionType } from "../index";
export default function NewProject({handleActionType}) {
    let name = useRef();
    let descrption = useRef();
    let date = useRef();

    const modalRef = useRef();

    function onSaveNewProject(){
        let newProject = {
            id : null,
            name : name.current.value,
            descrption : descrption.current.value,
            dueDate : date.current.value
        }
        // validate 
        if( newProject.name.trim() === '' || newProject.descrption.trim() === '' || newProject.dueDate.trim() === '' ){
            modalRef.current.open();
            return;
        }
        handleActionType(actionType[2],newProject);
    }

    return(
        <>
            <Modal ref={modalRef} buttonCaption={"Đóng"}>
                <h2 className="text-xl font-bold text-stone-500 my-4" >Dữ liệu không hợp lệ</h2>
                <p className="text-stone-600 mb-4">Có lẽ bạn chưa điền đủ dữ liệu cần thiết.</p>
                <p className="text-stone-600 mb-4">Hãy chắc chắn rằng bạn đã điền đủ giá trị cho các trường dữ liệu cần thiết</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            onClick={()=> handleActionType(actionType[0],null)} 
                            className="text-sone-800 hover:text-stone-950"
                        >
                            Hủy
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={onSaveNewProject}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        >
                            Lưu
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={name} label={"Tên dự án"} placeholder="Nhập tên dự án"/>
                    <Input ref={descrption} label={"Mô tả"} isTextArena={true} placeholder="Nhập tên dự án"/>
                    <Input ref={date} label={"Ngày hết hạn"} placeholder="Chọn ngày hết hạn"/>
                </div>
            </div>
        </>
    )    
}