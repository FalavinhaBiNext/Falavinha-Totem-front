import { useState } from "react";
import backgroundLarge from "../../assets/image/login-banner_lg.jpg";
import backgroundSmall from "../../assets/image/login-banner_sm.png";
import LoginForm from "../../components/UI/adminUI/LoginForm";
import { motion } from "framer-motion";
import Logo from "../../components/UI/adminUI/Logo";

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
      <header className="relative w-full min-h-[60px] z-50 flex items-center justify-between min-[992px]:p-base_container px-5">
        <Logo />
      </header>
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
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-[-5px] left-0 right-0 flex flex-col items-center
        md:h-[75%] h-[63%] w-full clip-polygon md:clip-polygon2 justify-end
        bg-admin_background z-20 pb-10 mx-auto"
      >
        <h2 className="mb-2 text-3xl text-center uppercase text-light_color gilroyLight md:text-4xl">
          Login
        </h2>
        <LoginForm inputsData={inputsData} />
      </motion.main>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-30"></div>
    </div>
  );
}
