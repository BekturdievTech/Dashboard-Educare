"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = admin;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-[345px]" onSubmit={handleSubmit}>
      <div className="form__group field">
        <input
          type="email"
          className="form__field"
          name="email"
          id="email"
          required
          value={admin.email}
          onChange={handleChange}
        />
        <label htmlFor="email" className="form__label">          
          Email Address
        </label>
      </div>

      <div className="form__group field">
        <input
          type="password"
          className="form__field"
          name="password"
          id="password"
          required
          value={admin.password}
          onChange={handleChange}
        />
        <label htmlFor="password" className="form__label">          
          Password
        </label>
      </div>

      <button
        type="submit"
        className="mt-3 bg-[#7152F3] w-full text-center py-5 rounded-[10px] text-white"
      >
        Log In
      </button>
      {error && (<p>{error}</p>)}
    </form>
  );
}
