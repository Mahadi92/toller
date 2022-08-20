import DefaultLayout from "@/components/layouts/DefaultLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { DatePicker, Select } from "antd";
import { useState } from "react";
import axios from "axios";

const { Option } = Select;

const vehicleData = [
  { id: "1111", vehicleType: "Car", toll: "200" },
  { id: "2222", vehicleType: "Truck", toll: "200" },
  { id: "333", vehicleType: "Bus", toll: "200" },
  { id: "4444", vehicleType: "Motor Cycle", toll: "200" },
];

interface Inputs {
  firstName: string;
  lastName: string;
  number: number;
  vehicleModel: string;
  vehicleRegNo: string;
  cardName: string;
  cardNumber: string;
  expiredDate: string;
  cvcNumber: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  number: Yup.string().required().label("Number"),
  vehicleModel: Yup.string().required().label("Vehicle Model"),
  vehicleRegNo: Yup.string().required().label("Vehicle Registration No"),
  cardName: Yup.string().required().label("Card Name"),
  cardNumber: Yup.string().required().label("Card Number"),
  cvcNumber: Yup.string().required().label("CVC Number"),
});

const Ticket = () => {
  const [vehicle, setVehicle] = useState("");
  const [expiredDate, setExpiredDate] = useState("");

  const handleVehicleChange = (value: string) => {
    setVehicle(value);
  };

  const handleExpiredDate = (value: any) => {
    setExpiredDate(value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) });

  const handleOnSubmit = async (payload: any) => {
    console.log(payload);
    try {
      //toll amount not in payload
      const { cardName, cardNumber, cvcNumber, firstName, lastName, number, vehicleModel, vehicleRegNo,
        toll_amount } = payload
      const result = await axios.post('http://t-api.ataur.dev/toll/new', {
        cardName, cardNumber, cvcNumber, firstName, lastName, number, vehicleModel, vehicleRegNo,
        toll_amount:300
      })
      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <form
          className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 pb-10"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="grid gap-4 border border-slate-100 p-5 rounded-lg">
            <h1 className="text-4xl text-slate-400 pb-5">Information</h1>
            <InputField
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              label="First Name"
              hasError={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
              rest={register("firstName")}
            />
            <InputField
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              hasError={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
              rest={register("lastName")}
            />

            <InputField
              type="number"
              name="number"
              label="Number"
              placeholder="Enter your phone number"
              hasError={Boolean(errors.number)}
              helperText={errors.number?.message}
              rest={register("number")}
            />

            <InputField
              type="text"
              name="vehicleModel"
              label="Vehicle Model"
              placeholder="Enter your vehicle model"
              hasError={Boolean(errors.vehicleModel)}
              helperText={errors.vehicleModel?.message}
              rest={register("vehicleModel")}
            />

            <InputField
              type="text"
              name="vehicleRegNo"
              label="Vehicle Registration No"
              placeholder="Enter your vehicle registration no."
              hasError={Boolean(errors.vehicleRegNo)}
              helperText={errors.vehicleRegNo?.message}
              rest={register("vehicleRegNo")}
            />
            <div className="flex flex-col w-full space-y-1">
              <label className="text-sm md:text-base" htmlFor="selectVehicle">
                Select Vehicle
              </label>
              <div className="relative">
                <Select
                  style={{ width: "100%" }}
                  bordered={false}
                  placeholder="Select your vehicle type"
                  onChange={handleVehicleChange}
                  className="vehicleSelectBox w-full h-input border rounded-md border-slate-100 text-font-light"
                >
                  {vehicleData.map((data, i) => {
                    return (
                      <Option key={i} value={data.id}>
                        {data.vehicleType} -{" "}
                        <span className="font-light text-gray-400">
                          {data.toll}tk
                        </span>
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </div>
          </div>
          <div className="grid gap-4 items-start border border-slate-100 p-5 rounded-lg">
            <h1 className="text-4xl text-slate-400 pb-5">Card Information</h1>

            <InputField
              type="text"
              name="cardName"
              label="Card Name"
              placeholder="Enter your card name"
              hasError={Boolean(errors.cardName)}
              helperText={errors.cardName?.message}
              rest={register("cardName")}
            />

            <InputField
              type="text"
              name="cardNumber"
              label="Card Number"
              placeholder="Enter your card number"
              hasError={Boolean(errors.cardNumber)}
              helperText={errors.cardNumber?.message}
              rest={register("cardNumber")}
            />

            <div className="flex flex-col w-full space-y-1">
              <label className="text-sm md:text-base" htmlFor="selectVehicle">
                Expired Date
              </label>
              <div className="relative">
                <DatePicker
                  onChange={handleExpiredDate}
                  className="w-full h-input border rounded-md border-slate-100 text-font-light"
                />
              </div>
            </div>

            <InputField
              type="number"
              name="cvcNumber"
              label="CVC Number"
              placeholder="Enter your CVC number"
              hasError={Boolean(errors.cvcNumber)}
              helperText={errors.cvcNumber?.message}
              rest={register("cvcNumber")}
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 h-input bg-blue-400 hover:bg-blue-500 text-white rounded-md transition ease-in-out delay-150"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Ticket;

//--- Vehicle CRUD {id, name, toll price}

//--- card information
// Name of card
// card number
// expired data
// cvc number (3 digits)
