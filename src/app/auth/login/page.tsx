import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Page = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="left-side flex-1 bg-red-600 bg-[url('/images/login/bg-snake-2.svg')] bg-cover bg-no-repeat flex flex-col justify-between text-gray-200 px-10 py-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="inline-block mx-auto max-w-4xl px-4">
            <div className="inline-block">
              <h1 className="text-5xl font-bold mb-4 typing-effect inline-block">
                Hello Kahayag!👋
              </h1>
            </div>

            <p className="text-sm mb-8 w-[75%]">
              Streamline your Kahayag restaurant management. Simplify tasks,
              track orders, and boost productivity with ease.
            </p>
          </div>
        </div>

        <p className="text-xs px-4">
          © 2023 Kahayag Restaurant. All rights reserved.
        </p>
      </div>

      <div className="right-side flex-1 bg-white flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold pb-5">Kahayag Admin</h1>
          <h1 className="text-xl mb-2">Welcome Back!</h1>
          <p className="text-xs mb-4 text-gray-600">
            Don't have an account? Ask your supervisor for the admin
            credentials.
          </p>
          <form>
            <div className="mb-4">
              <Label htmlFor="name" className="">
                Username
              </Label>
              <Input
                type="name"
                id="name"
                name="name"
                placeholder="Username"
                className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>

              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <Button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 rounded w-full"
              >
                Login Now
              </Button>
            </div>
            {/* <div className="mb-4">
            <button
              type="button"
              className="bg-white text-gray-700 font-bold py-2 px-4 rounded w-full border border-gray-300 flex items-center justify-center"
            >
              <img src="google-icon.png" alt="Google" className="mr-2" />
              Login with Google
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-gray-600">
              Forgot password? Click here
            </a>
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
