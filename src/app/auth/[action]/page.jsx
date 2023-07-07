"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Auth({ params }) {
  const [err, setErr] = useState(false);
  const [response, setResponse] = useState("");

  const router = useRouter();

  const handleSubmitSignup = async (e) => {
    setErr(false);
    setResponse("");
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    const email = e.target[2].value;
    const first_name = e.target[3].value;
    const last_name = e.target[4].value;

    try {
      const res = await fetch("https://blog-19ak.onrender.com/auth/user", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          email,
          first_name,
          last_name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(res.status);

      if (res.status === 200) {
        console.log(data);
        router.push("/auth/signin");
      }
    } catch (e) {
      setErr(true);
      setResponse("Username already taken! Please try again");
    }
  };

  const handleSubmitSignin = async (e) => {
    e.preventDefault();
    setErr(false);
    setResponse("");

    const login_username = e.target[0].value;
    const login_password = e.target[1].value;

    const formData = new FormData()

    formData.append('username',login_username)
    formData.append('password',login_password)

    try {
      console.log("inside");
      console.log(login_username);
      console.log(login_password);
      const res = await fetch("https://blog-19ak.onrender.com/auth/token", {
        method: "POST",
        body: formData
      });
      if(!res.ok) throw new Error(res.status)
      const data = await res.json();
      
    } catch (error) {
      setErr(true);
      setResponse("Invalid username or password. Please try again!")
    }
  };

  return (
    <div>
      {params.action === "signup" ? (
        <div className="my-8 max-w-screen-md mx-auto p-4 shadow-md rounded-md">
          <h1 className="text-center text-3xl p-2 pb-8">Register Here</h1>
          <form
            onSubmit={handleSubmitSignup}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div>
              <label htmlFor="username" className="p-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your unique username"
                required
                className="p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="p-2">
                Password
              </label>
              <input
                placeholder="Enter a strong password!"
                type="password"
                name="password"
                id="password"
                required
                className="p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="p-2">
                Email
              </label>
              <input
                placeholder="Enter your mail"
                type="email"
                name="email"
                id="email"
                className="p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="firstname" className="p-2">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter your first name"
                className="p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="p-2">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter your last name"
                className="p-2 border rounded-md"
              />
            </div>

            <button className="btn">Signup</button>
          </form>
          {err ? (
            <p className="text-center rounded-sm p-2 text-black">{response}</p>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="my-8 max-w-screen-md mx-auto p-4 shadow-md rounded-md">
          <h1 className="text-center text-3xl p-2 pb-8">Login Here</h1>
          <form
            onSubmit={handleSubmitSignin}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div>
              <label htmlFor="username" className="p-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your unique username"
                required
                className="p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="p-2">
                Password
              </label>
              <input
                placeholder="Enter a strong password!"
                type="password"
                name="password"
                id="password"
                required
                className="p-2 border rounded-md"
              />
            </div>

            <button className="btn">Login</button>

            {err ? <p className="text-center rounded-sm p-2 text-black">{response}</p> : ''}
          </form>
        </div>
      )}
    </div>
  );
}

export default Auth;
