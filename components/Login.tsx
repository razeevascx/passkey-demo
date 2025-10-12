"use client";

import { useState } from "react";
import { createPasskey } from "../utils/Passkey";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <div className="flex flex-col gap-6 mx-auto mt-10 p-6 rounded-lg shadow-md border border-gray-300 border-dashed">
      <h1 className="text-4xl font-bolsd">Passkey Demo</h1>
      <div className="space-y-4  gap-4">
        <div className="flex-col gap-4">
          <label htmlFor="input " className="mb-4">
            {" "}
            Name{" "}
          </label>
          <input
            className="border border-gray-600 rounded-md w-full text-lg p-2  mb-2"
            required
            type="text"
            placeholder="Jhon Doe"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="input"> Email </label>
          <input
            className=" border border-gray-600 rounded-md w-full text-lg p-2 focus-visible:border-gray-100"
            type="email"
            placeholder="test@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <button
              onClick={() => createPasskey(name, email)}
              className="w-full  bg-gray-200 text-black h-9 mt-4 rounded-md  text-center justify-center font-bold   has-[>svg]:px-3"
            >
              Create Passkey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
