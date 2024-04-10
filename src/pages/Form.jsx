import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const formSchema = yup.object().shape({
    firstName: yup
    .string()
    .required(),
    lastName: yup
    .string()
    .required(),
    email: yup
    .string()
    .email("please provide a valid email address")
    .required("email address is required"),
    phoneNumber: yup
    .string()
    .required(),
  password: yup
    .string()
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),
  
});


const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-[25px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


const Form = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchema),
    });

    const formSubmitHandler = (data) => {
        console.log(data);
      };
    
      return (
        <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
          <form onSubmit={handleSubmit(formSubmitHandler)} className="w-full">
            <div className="mb-6 flex gap-4">
                <div>
                    <label
                        htmlFor="firstName"
                        className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                    >
                        First name
                    </label>
                    <input
                        {...register("firstName")}
                        type="text"
                        name="firstName"
                        id="firstName"
                        className={textInputClassName}
                        placeholder="John"
                    />
                    {errors.firstName ? (
                    <span className="text-red-900">{errors.firstName.message}</span>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="lastName"
                        className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                    >
                        Last name
                    </label>
                    <input
                        {...register("lastName")}
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={textInputClassName}
                        placeholder="Doe"
                    />
                    {errors.lastName ? (
                    <span className="text-red-900">{errors.lastName.message}</span>
                    ) : (
                        <></>
                    )}
                </div>
                
            </div>
            <div className="mb-6"> 
                <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
                >
                    Phone number
                </label>
                <input
                    {...register("phoneNumber")}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className={textInputClassName}
                    placeholder="08033xxxxxx"
                />
                {errors.phoneNumber ? (
                <span className="text-red-900">{errors.phoneNumber.message}</span>
                ) : (
                    <></>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                className={textInputClassName}
                placeholder="test@test.com"
              />
              {errors.email ? (
                <span className="text-red-900">{errors.email.message}</span>
              ) : (
                <></>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                className={textInputClassName}
                placeholder="Create a password"
              />
              {errors.password ? (
                <span className="text-red-900">{errors.password.message}</span>
              ) : (
                <></>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-[25px] font-medium text-gray-900 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                className={textInputClassName}
                placeholder='******************'
              />
              {errors.confirmPassword ? (
                <span className="text-red-900">
                  {errors.confirmPassword.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <p className='mt-5 mb-4 text-gray-400 text-[18px] font-normal'>By clicking on create account below you agree to our <Link to ='/' className="text-primary">Terms of use</Link> and <br /><Link to ='/' className="text-primary">Privacy policy.</Link></p>
            <button
              type="submit"
              className="w-full bg-primary border rounded-xl md:rounded-md text-[25px] text-white px-10 py-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Create account
            </button>
            <p className='mt-3 text-gray-400 text-[18px] font-normal text-center'>Already have an account ? <Link to ='/' className="text-primary">Log In</Link></p>
          </form>
        </div>
      );
    };
    
    export default Form;