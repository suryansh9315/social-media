import ClientButton from "@/components/ClientButton";
import { getProviders } from "next-auth/react";

async function getProviderServer() {
  const providers = await getProviders();
  return providers;
}

const page = async () => {
  const providers = await getProviderServer()
  return (
    <>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <ClientButton provider={provider} />
        </div>
      ))}
    </>
  );
};

export default page;
