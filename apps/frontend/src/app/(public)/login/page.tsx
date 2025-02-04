"use client";

import { Input, Button, FormPage } from "@/components";

const Login = () => {
  return (
    <FormPage
      onSubmit={async (evt) => {
        evt.preventDefault();
        console.log("Form submitted!");
      }}
      title="Login:"
    >
      <Input />
      <Button type="submit" color="primary" className="w-full">
        Enviar
      </Button>
    </FormPage>
  );
};

export default Login;
