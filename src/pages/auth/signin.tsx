import InputField from "@/components/InputField";
import AuthLayout from "@/components/layouts/AuthLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";

interface SignInFormPayload {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = () => {
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
      const { email, password } = payload
      const signUp = await axios.post('http://localhost:5000/auth/login', { email, password })
      console.log(signUp.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <h1 className="pb-5 heading text-primary">Login Account</h1>

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
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Email your password"
            hasError={Boolean(errors.password)}
            helperText={errors.password?.message}
            rest={register("password")}
          />

          <div className="py-2 text-right">
            <Link href="/auth/forgetpassword" passHref>
              <a>Forget Password</a>
            </Link>
          </div>

          <div className="grid gap-5">
            <button className="w-full text-center text-white rounded-lg h-input bg-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
