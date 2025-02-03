"use client";

import { Button, FormPage } from "@/components";

const Login = () => {
  return (
    <FormPage
      onSubmit={async (evt) => {
        evt.preventDefault();
        console.log("Form submitted!");
      }}
      title="Login:"
    >
      <Button
        color="primary"
        type="submit"
        className="bg-primary text-white w-full rounded-md hover:bg-dark_primary"
      >
        Enviar
      </Button>
    </FormPage>
  );
};

export default Login;
