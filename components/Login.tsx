"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPasskey } from "../utils/Passkey";
import { ArrowRight, Loader2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const fullName = `${firstName} ${lastName}`.trim();

  const isFirstNameValid = firstName.trim().length >= 2;
  const isLastNameValid = lastName.trim().length >= 2;
  const isEmailValid =
    email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

  const handleCreatePasskey = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setError("");
    try {
      await createPasskey(fullName, email);
      router.push("/passkey");
    } catch (error) {
      console.error("Failed to create passkey:", error);
      setError("Failed to create passkey. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 mx-auto mt-10 p-6 rounded-lg shadow-md border border-gray-300 border-dashed glossy">
      <h1 className="text-4xl font-bold">Passkey Demo</h1>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2 font-medium">
              First Name
            </label>
            {/* className=
            {` hadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`} */}
            <input
              id="firstName"
              className={`border rounded-md text-lg p-2  placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600  ${
                firstName.length === 0
                  ? "border-gray-600"
                  : isFirstNameValid
                  ? "border-green-500 invalid:border-red-500"
                  : "border-red-500"
              }`}
              required
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-2 font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              className={`border rounded-md text-lg p-2  placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600   ${
                lastName.length === 0
                  ? "border-gray-600"
                  : isLastNameValid
                  ? "border-green-500 invalid:border-red-500"
                  : "border-red-500"
              }`}
              required
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">
            Email
          </label>
          <input
            id="email"
            className={`border rounded-md text-lg p-2  placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600   ${
              email.length === 0
                ? "border-gray-600"
                : isEmailValid
                ? "border-green-500 invalid:border-red-500"
                : "border-red-500"
            }`}
            type="email"
            placeholder="test@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm font-medium bg-red-50 border border-red-200 rounded-md p-3">
            {error}
          </div>
        )}
        <button
          type="button"
          disabled={!isFormValid || isLoading}
          onClick={handleCreatePasskey}
          className="flex w-full items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black h-12 mt-4 rounded-md font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating Passkey...
            </>
          ) : (
            <>
              Create Passkey
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
