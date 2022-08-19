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
  vehicleType: string;
  toll: string;
}

const vehicleData = [
  { id: "11", vehicleType: "Car", toll: "200" },
  { id: "22", vehicleType: "Truck", toll: "200" },
];

const Toll = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editedToll, setEditedToll] = useState({ vehicleType: "", toll: "" });

  const validationSchema = Yup.object().shape({
    vehicleType: Yup.string().required().label("Vehicle type"),
    toll: Yup.string().required().label("Toll"),
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
            className="w-full md:w-1/2 grid gap-5"
          >
            <InputField
              type="text"
              name=""
              label="Vehicle Type"
              placeholder="Write here"
              hasError={Boolean(errors.vehicleType)}
              helperText={errors.vehicleType?.message}
              rest={register("vehicleType")}
            />
            <InputField
              type="text"
              name="toll"
              label="Toll Price"
              placeholder="Write here"
              hasError={Boolean(errors.toll)}
              helperText={errors.toll?.message}
              rest={register("toll")}
            />
            <button className="px-5 text-white font-semibold rounded-md h-input bg-primary">
              Add
            </button>
          </form>

          {/* ---------------- Toll table ----------------------- */}
          <div className="w-full py-10">
            <Table dataSource={vehicleData}>
              <Column
                title="Vehicle Type"
                dataIndex="vehicleType"
                key="vehicleType"
              />
              <Column
                title="Toll Price"
                dataIndex="toll"
                key="toll"
                align="center"
              />
              <Column
                title="Actions"
                key="id"
                align="right"
                render={(toll) => {
                  return (
                    <div className="flex justify-end items-center gap-3">
                      <button
                        onClick={() => {
                          setEditedToll(toll);
                          setIsOpenModal(true);
                        }}
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
        title="Edit Vehicle or toll"
        visible={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onAddCategorySubmit)}
          className="w-full grid gap-5"
        >
          <InputField
            type="text"
            defaultValue={editedToll.vehicleType}
            name="vehicleType"
            label="Vehicle Type"
            placeholder="Write here"
            hasError={Boolean(errors.vehicleType)}
            helperText={errors.vehicleType?.message}
            rest={register("vehicleType")}
          />
          <InputField
            type="text"
            defaultValue={editedToll.toll}
            name="toll"
            label="Toll Price"
            placeholder="Write here"
            hasError={Boolean(errors.toll)}
            helperText={errors.toll?.message}
            rest={register("toll")}
          />
          <button className="px-5 text-white font-semibold rounded-md h-input bg-primary">
            Update
          </button>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Toll;
