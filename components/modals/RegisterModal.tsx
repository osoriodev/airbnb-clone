'use client';

import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import useRegModal from "@/hooks/useRegModal";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const RegisterModal = () => {
  const regModal = useRegModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/register', data)
    .then(() => {
      regModal.onClose();
    })
    .catch((error) => {
      toast.error('Something went wrong');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const content = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        subtitle="Create an account!"
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const foot = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        label="Continue with Google"
        onClick={() => signIn('google')}
        icon={FcGoogle}
        outline
      />
      <Button
        label="Continue with GitHub"
        onClick={() => signIn('github')}
        icon={AiFillGithub}
        outline
      />
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="font-light text-neutral-500">Already have an account?</p>
        <button
          className="text-neutral-800 hover:underline"
          onClick={regModal.onClose}
        >
          Log in
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={regModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={regModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={content}
      footer={foot}
    />
  )
}

export default RegisterModal;
