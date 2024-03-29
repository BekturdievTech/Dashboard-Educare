"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();
    const [admin, setAdmin] = useState({
        name: "",
        image: "",
        email: "",
        password: "",
        role: "",
    }); 
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, image, email, password, role} = admin;
    
        if (!name || !image || !email || !password || !role) {
          setError("All fields are necessary.");
          return;
        }
    
        try {
          const resAdminExists = await fetch("api/adminExists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
    
          const { admin } = await resAdminExists.json();
    
          if (admin) {
            setError("Admin already exists.");
            return;
          }
    
          const res = await fetch("api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              image,
              email,
              password,
              role
            }),
          });
    
          if (res.ok) {
            const form = e.target;
            form.reset();
            router.push("/");
          } else {
            console.log("User registration failed.");
          }
        } catch (error) {
          console.log("Error during registration: ", error);
        }
      };

  return (
    <form className="w-[345px]" onSubmit={handleSubmit}>

    <div className="form__group field">
        <input type="text" className="form__field" name="name" id="name" required value={admin.name} onChange={handleChange}/>
        <label htmlFor="name" className="form__label"> Your Name </label>
      </div>

      <div className="form__group field">
        <input type="text" className="form__field" name="image" id="image" required value={admin.image} onChange={handleChange}/>
        <label htmlFor="image" className="form__label"> Profile Image </label>
      </div>

      <div className="form__group field">
        <input type="email" className="form__field" name="email" id="email" required value={admin.email} onChange={handleChange}/>
        <label htmlFor="email" className="form__label"> Email Address </label>
      </div>

      <div className="form__group field">
        <input type="password" className="form__field" name="password" id="password" required value={admin.password} onChange={handleChange}/>
        <label htmlFor="password" className="form__label"> Password </label>
      </div>

      <div className="form__group field">
        <input type="text" className="form__field" name="role" id="role" required value={admin.role} onChange={handleChange}/>
        <label htmlFor="role" className="form__label"> Role </label>
      </div>

      <button type="submit" className="mt-3 bg-[#7152F3] w-full text-center py-5 rounded-[10px] text-white">
        Sign Up
      </button>
      {error && (<p>{error}</p>)}
    </form>
  );
}
