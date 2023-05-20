'use client';

import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { categories } from "../header/Categories";

import Modal from "./Modal";
import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";

import useRentModal from "@/hooks/useRentModal";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: ''
    }
  });

  const category = watch('category');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const onBack = () => {
    setStep(value => value - 1);
  }

  const onNext = () => {
    setStep(value => value + 1);
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }

    return 'Next';
  }, [step]);

  const secLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return 'Back';
  }, [step]);

  let content = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Find the best place to stay"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] pb-[1px] overflow-y-auto">
        {categories.map((item, i) => (
          <div key={i} className="col-span-1">
            <CategoryInput
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
              onClick={category => setCustomValue('category', category)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      title="Airbnb your home"
      body={content}
      actionLabel={actionLabel}
      secAction={step === STEPS.CATEGORY ? undefined : onBack}
      secLabel={secLabel}
    />
  )
}

export default RentModal;
