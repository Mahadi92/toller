import AuthLayout from "@/components/layouts/AuthLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { Checkbox, Select } from "antd";
import { useState } from "react";

import toast from "react-hot-toast/headless";
import InputField from "@/components/InputField";
import axios from "axios";

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+88</Option>
    <Option value="minus">+2</Option>
  </Select>
);

interface SignUpFormPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phone: yup.string().required(),
});

const SignUpPage = () => {
  const router = useRouter();
  const [acceptTerms, setAcceptTerms] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormPayload>({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = async (payload: SignUpFormPayload) => {
    try {
      console.log(payload);
      const { name, email, password, phone } = payload
      const signUp = await axios.post('http://localhost:5000/auth/register', { name, email, password, phone })
      console.log(signUp);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="heading text-primary pb-5">Create Your Account</h1>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="grid gap-4 pt-5"
        >
          <InputField
            type="text"
            name="name"
            label="Name"
            placeholder="Your name"
            hasError={Boolean(errors.name)}
            helperText={errors.name?.message}
            rest={register("name")}
          />
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="Email your email"
            hasError={Boolean(errors.email)}
            helperText={errors.email?.message}
            rest={register("email")}
          />
          {/*<InputNumber addonBefore={selectBefore} defaultValue={10293847773} />*/}
          <InputField
            type="number"
            name="phone"
            label="Mobile Number"
            placeholder="Your mobile number"
            hasError={Boolean(errors.phone)}
            helperText={errors.phone?.message}
            rest={register("phone")}
          />
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            hasError={Boolean(errors.password)}
            helperText={errors.password?.message}
            rest={register("password")}
          />
          <InputField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Password Again"
            hasError={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
            rest={register("confirmPassword")}
          />

          <div>
            <Checkbox onChange={(e) => setAcceptTerms(e.target.checked)}>
              I certify that I am 18 years of age or older, agree to the User
              Agreement, and acknowledge of{" "}
              <span className="text-primary font-bold">P2P Mining</span> Privacy
              Policy.
            </Checkbox>
          </div>

          <div className="grid gap-5 pt-10">
            <button className="w-full h-input text-center bg-blue-400 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
