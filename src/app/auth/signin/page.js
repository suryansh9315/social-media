import ClientButton from "@/components/ClientButton";
import { getProviders } from "next-auth/react";

async function getProviderServer() {
  const providers = await getProviders();
  return providers;
}

const page = async () => {
  const providers = await getProviderServer();
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-24">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <div className="mt-5">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <ClientButton provider={provider} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default page;
