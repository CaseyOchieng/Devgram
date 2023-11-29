import Loady from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Form, FormControl,
  FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUserAccount } from "@/lib/appwrite/api";
import { SignupValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";


const SignUpForm = () => {

  const isLoading = false;

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
      resolver: zodResolver(SignupValidation),
      defaultValues: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
    })
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
      // Do something with the form values.
      const newUser = await createUserAccount(values);
      // ✅ This will be type-safe and validated.
      console.log(values, newUser)
    }
  
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo"/>
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create your account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2 ">To use Devgram,please enter your account details</p>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your name" type="text" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* The user Name */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Enter your username" type="text" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* The user Email */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" type="email" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* The user Password */}
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Enter your password" type="password" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="shad-button_primary">
      {isLoading ? (
        <div role="flex-center gap-2">
          <Loady />
        </div>
      ):
      'Submit'
      }
      </Button>
      <p className="text-small-regular text-light-2 text-center mt-2">Already have an account ?
      <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1 ">Log in</Link>
      </p>
    </form>
    </div>
  </Form>
  )
}

export default SignUpForm