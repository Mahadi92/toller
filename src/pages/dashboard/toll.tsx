import DashboardLayout from "@/components/layouts/DashboardLayout";
import { BiCategory } from "react-icons/bi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Table } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import InputField from "@/components/InputField";

const { Column } = Table;

interface Inputs {
  category: string;
}

const categoryData = [
  {
    category: "Yo",
    id: "123456789",
  },
];

const Toll = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const validationSchema = Yup.object().shape({
    category: Yup.string().required().label("Category"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) });

  const onAddCategorySubmit = () => {};

  const handleFormData = () => {};
  const handleEditCategory = () => {};
  return (
    <DashboardLayout>
      <div className="py-10">
        <div className="pb-5 pl-8 border-b">
          <div className="flex items-center max-w-4xl px-0 m-auto space-x-2 text-xl font-medium xl:px-0 text-slate-600">
            <BiCategory />
            <span className="">Category</span>
          </div>
        </div>

        <div className="max-w-4xl min-h-screen p-4 m-auto border-l border-r">
          {/* --------------- Add Category ---------------- */}
          <form
            onSubmit={handleSubmit(onAddCategorySubmit)}
            className="flex items-end gap-5"
          >
            <div className="w-4/6 lg:w-3/6">
              <InputField
                type="text"
                name=""
                label="Add Category"
                placeholder="Write here"
              />
            </div>
            <button className="px-5 text-white font-semibold rounded-md h-input bg-primary">
              Add
            </button>
          </form>

          {/* ---------------- category table ----------------------- */}
          <div className="w-full py-10">
            <Table dataSource={categoryData}>
              <Column title="Category" dataIndex="category" key="category" />
              <Column
                title="Actions"
                key="id"
                align="right"
                render={() => {
                  return (
                    <div className="flex justify-end items-center gap-3">
                      <button
                        onClick={() => setIsOpenModal(true)}
                        className="flex justify-center items-center gap-2 bg-blue-50 rounded-md px-2 py-1 text-blue-400 text-base"
                      >
                        <FiEdit /> <span className="hidden lg:block">Edit</span>
                      </button>
                      <button className="flex justify-center items-center gap-2 bg-red-50 rounded-md px-2 py-1 text-red-400 text-base">
                        <AiOutlineDelete />{" "}
                        <span className="hidden lg:block">Delete</span>
                      </button>
                    </div>
                  );
                }}
              />
            </Table>
          </div>
        </div>
      </div>
      <Modal
        title="Edit category"
        visible={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(handleEditCategory)}
          className="flex items-end gap-5"
        >
          <div className="w-5/6">
            <InputField
              type="text"
              name="category"
              defaultValue={"lol"}
              label="Edit Category"
              placeholder="Write here"
            />
          </div>
          <button className="px-5 text-white font-semibold rounded-md h-input bg-primary">
            Update
          </button>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Toll;
