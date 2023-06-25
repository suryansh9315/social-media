"use client";
import { signIn } from "next-auth/react";

const ClientButton = ({ provider }) => {
  return (
    <button onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </button>
  );
};

export default ClientButton;
