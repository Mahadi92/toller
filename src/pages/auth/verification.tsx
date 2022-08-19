import AuthLayout from "@/components/layouts/AuthLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { Select } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+88</Option>
    <Option value="minus">+2</Option>
  </Select>
);

const validationSchema = yup.object({
  email: yup.string().email().required(),
  otp: yup.string().min(6).max(6).required(),
  purpose: yup.string().required(),
});

interface PropsType {
  purpose: any;
  email: string;
}

const VerificationPage: NextPage<PropsType> = ({ purpose, email }) => {
  const router = useRouter();

  const [otp, setOtp] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<any>({
    defaultValues: { email, purpose },
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = (otp: any) => {
    console.log(otp);
  };

  //call this function in useEffect with proper way
  const getResult = async (token: String) => {
    try {
      const result = await axios.get(`http://localhost:5000/auth/email-confirmation?token=${token}`)
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const resendVerifyMail = async () => {
    try {
      //set user email in email section
      const result = await axios.post('http://localhost:5000/auth/resend-confirmation-mail', {
        email: "diroba3671@wnpop.com",
        acc_verify_url: "https://loalhost:5000/verify"
      })
      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  // @ts-ignore
  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="heading text-primary pb-5">Verify your email</h1>

        <p className="leading-[2.5rem] tracking-wide">
          Enter the code or click the link we&sbquo;ve sent to{" "}
          <span className="bg-amber-200 px-2">
            {getValues("email")}ketipoj204@offsala.com
          </span>{" "}
          to verify your email. If you didn&sbquo;t receive an email from us,{" "}
          <Link href="/">
            <a className="text-primary">
              you can try using a sms on your number.
            </a>
          </Link>
        </p>

        <div>
          <form onSubmit={handleSubmit(handleOnSubmit)} method="POST">
            {/* <InputField
              type="number"
              name="otp"
              label="OTP"
              placeholder="OTP"
              hasError={Boolean(errors.otp)}
              helperText={errors.otp?.message}
              rest={register('otp')}
            /> */}
            <h2 className="sub-title pt-10 pb-8">Enter Code</h2>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={"auth-verification-otp-input text-2xl"}
              separator={<span></span>}
            />

            {true ? (
              <>
                <p className="py-5 text-sub-color-gray">
                  Code valid for 05 minutes
                </p>
                <button onClick={() => resendVerifyMail()} className="text-primary block">
                  Resend Verification Mail
                </button>
              </>
            ) : (
              <p className="py-5 text-sub-color-green">Code verified...</p>
            )}
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerificationPage;
