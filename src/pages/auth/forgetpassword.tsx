import InputField from "@/components/InputField";
import AuthLayout from "@/components/layouts/AuthLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";

interface SignInFormPayload {
  email: string;
}

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormPayload>({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = async (payload: SignInFormPayload) => {
    try {
      console.log(payload);
      const { email } = payload
      const signUp = await axios.post('http://localhost:5000/auth/forget-password', {
        email,
        callBack_url: "https://loalhost:5000/reset-password"
      })
      console.log(signUp.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="pb-5 heading text-primary">Forget your password</h1>

        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="grid gap-4 pt-5"
        >
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="Email your email"
            hasError={Boolean(errors.email)}
            helperText={errors.email?.message}
            rest={register("email")}
          />

          <button className="w-full text-center text-white rounded-lg h-input bg-blue-400">
            Submit
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgetPassword;
