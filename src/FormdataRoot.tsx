import { Formik, useFormikContext } from "formik";
import React from "react";
import { twMerge } from "tailwind-merge";

interface FormDataProps {
  onSubmit: (data: any) => void;
  initialValues?: object;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  schema?: any;
}

function FormDataRoot({
  className,
  children,
  onSubmit,
  initialValues = {},
  schema,
}: FormDataProps) {
  return (
    <div id="select" className={twMerge("w-full h-full", className)}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(data) => {
          console.log(data);
          onSubmit(data);
        }}
        validationSchema={schema}
      >
        {({ isSubmitting, handleChange, values, errors, touched }) => (
          <React.Fragment>{children}</React.Fragment>
        )}
      </Formik>
    </div>
  );
}

export default FormDataRoot;
