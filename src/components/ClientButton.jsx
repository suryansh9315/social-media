"use client";
import { signIn } from "next-auth/react";

const ClientButton = ({ provider }) => {
  return (
    <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </button>
  );
};

export default ClientButton;
