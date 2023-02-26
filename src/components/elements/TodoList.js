import { api } from '@/config/api';
import { PATH_API } from '@/config/path';
import { useEffect, useState } from 'react';
import { Button, Checkbox, DatePicker, message, Modal, TimePicker } from "antd";
import moment from 'moment';

const TodoList = () => {

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    


    const [form, setForm] = useState({
        name: "",
        todo: "",
        status: false,
        // estimateTime: "00:00:00",
    });



    const [dataDetail, setDataDetail] = useState({
        name: "",
        todo: "",
    });


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [dataTodo, setDataTodo] = useState([]);

    useEffect(() => {
        getData()
    }, []);


    const getData = async () => {
        const res = await api({
            url: PATH_API.todo,
        });
        if (res) {
            setDataTodo(res.data)
        }
    }
    const postData = async () => {
        const res = await api({
            url: PATH_API.todo,
            method: "POST",
            data: form,
        });
        if (res) {
            message.success("Update success");
            getData();
            setForm({
                name: "",
                todo: "",
                status: false
            })
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setForm({
            ...form,
            [name]: value,
        })
    }


    const handleChangeEdit = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDataDetail({
            ...dataDetail,
            [name]: value,
        })
    }


    const handleRemove = async (id) => {
        await api({
            url: `${PATH_API.todo}/${id}`,
            method: "DELETE",
        });
        message.success("Remove success");
        getData();
    }


    const handleEdit = (item, index) => {
        setIsModalOpen(true);
        setDataDetail(dataTodo[index]);
    };

    const submitEdit = async () => {
        await api({
            url: `${PATH_API.todo}/${dataDetail.id}`,
            method: "PUT",
            data: dataDetail,
        });
        message.success("Edit success");
        setIsModalOpen(false);
        getData();
    }


    const toggleDone = async (index, id, checked) => {
        const _data = {
            ...dataTodo[index],
            status: !checked,
        }
        await api({
            url: `${PATH_API.todo}/${id}`,
            method: "PUT",
            data: _data,
        });
        if (!checked) {
            message.success("DONE task successfully");
        } else {
            message.success("UNDONE task successfully");
        }
        getData();

    }


    /* <-------  Count Time  -------> */
    // const initCountdown = (endDateString) => {
    //     // const endDateString = "2023-01-01 00:00:00";
    //     const today = new Date();
    //     const LAUNCH_DATE = new Date(endDateString);
    //     const _distance = LAUNCH_DATE.getTime() - today.getTime();
    //     return _distance;
    // };






    // const submitTime = (time) => {
    //     setForm({
    //         ...form,
    //         estimateTime: time,
    //     })
    // }


    return (
        <div className='container'>
            <div className="flex py-[40px]">
                <div className="flex">
                    <label htmlFor="name">Name</label>
                    <input className='input border-[1px] border-black mx-[10px]' type="text" name="name" onChange={handleChange} value={form.name} />
                </div>
                <div className="flex">
                    <label htmlFor="todo">To Do</label>
                    <input className='input border-[1px] border-black mx-[10px]' type="text" name="todo" onChange={handleChange} value={form.todo} />
                </div>
                {/* <div className="flex mx-[20px]">


                    <DatePicker
                        popupClassName="customDatePicker"
                        onChange={submitTime}
                    />
                </div> */}
                <button className='btn btn-success' type="primary" onClick={postData}>
                    Submit
                </button>


            </div>
            <div className="flex py-[40px] info">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Work
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Estimate Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataTodo.map((item, index) =>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.todo}
                                        </td>
                                        <td className="px-6 py-4">

                                            <span className="badge">

                                                {moment(item.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
                                            </span>

                                        </td>
                                        <td className="px-6 py-4">
                                            <Checkbox onChange={() => toggleDone(index, item.id, item?.status)} defaultChecked={item?.status} />
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className='btn btn-error' type="primary" onClick={() => handleRemove(item.id)}>
                                                Remove
                                            </button>
                                            <span>{" "}</span>
                                            <button className='btn btn-success' type="primary" onClick={() => handleEdit(item, index)}>
                                                Edit
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* {moment(initCountdown(item.estimateTime)).format('MMMM Do YYYY, h:mm:ss a')} */}

                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal title="Edit task" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
                <div className="flexCenter mb-[20px]">
                    <label htmlFor="name">Name</label>
                    <input className='input border-[1px] border-black mx-[10px]' type="text" name="name" value={dataDetail.name} onChange={handleChangeEdit} />
                </div>
                <div className="flexCenter mb-[20px]">
                    <label htmlFor="todo">To Do</label>
                    <input className='input border-[1px] border-black mx-[10px]' type="text" name="todo" value={dataDetail.todo} onChange={handleChangeEdit} />
                </div>
                <div className="flexCenter">
                    <button className='btn btn-success' type="primary" onClick={submitEdit}>
                        Submit
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default TodoList