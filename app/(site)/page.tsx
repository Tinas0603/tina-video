import Image from "next/image";

import AuthForm from "./components/AuthForm";

export default function Home() {
  const pageStyles = {
    backgroundImage: "url('/images/background.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const signInContainerStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  };
  return (
    <div className="min-h-full" style={pageStyles}>
      <div className="bg-gray-100" style={signInContainerStyles}>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            alt="Logo"
            height="48"
            width="48"
            className="mx-auto h-12 w-auto"
            src="/images/logo.png"
          />
          <h1
            className="
                mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-pink-400"
          >
            <span className="text-gray-900">Welcome to</span>{" "}
            <span className="text-pink-400">Tina</span>
          </h1>
          <h2
            className="
                mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-grey-900
                    "
          >
            Sign in to your account
          </h2>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
