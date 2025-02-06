import { useState } from "react";
import backgroundLarge from "../../assets/image/login-banner_lg.jpg";
import backgroundSmall from "../../assets/image/login-banner_sm.png";
import adminLogo from "../../assets/image/MinilogoWhite.png";
import LoginForm from "../../components/UI/LoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputsData = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Seu email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: "Senha",
      name: "password",
      type: "password",
      placeholder: "Sua senha",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <div className="relative h-screen">
      <h1 className="h-0 opacity-0">Página de login</h1>
      <div className="absolute top-0 left-0 right-0 z-30 w-full h-auto max-w-[1200px] mx-auto px-6 pt-8">
        <figure className="w-[50px] ">
          <img
            className="object-fit w-[inherit] h-[inherit]"
            src={adminLogo}
            alt="Logo"
          />
        </figure>
      </div>
      <picture className="h-[inherit] fixed inset-0">
        <source
          media="(min-width: 576px)"
          srcSet={backgroundLarge}
          type="image/webp"
        />
        <source srcSet={backgroundSmall} type="image/webp" />
        <img
          className="object-cover w-full h-full"
          src={backgroundLarge}
          alt="Banner"
          loading="lazy"
          rel="preload"
        />
      </picture>
      <div
        className="fixed bottom-[-5px] left-0 right-0 flex flex-col items-center md:justify-center
       md:h-[45%] h-[63%] w-full  clip-polygon md:clip-none
      justify-end bg-admin_background z-20 pb-10 mx-auto"
      >
        <h2 className="mb-2 text-3xl text-center uppercase text-light_color gilroyLight md:text-4xl">
          Login
        </h2>
        <LoginForm inputsData={inputsData} />
      </div>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>
    </div>
  );
}
