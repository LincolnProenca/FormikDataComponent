import React from "react";
import { Form, Field, useFormikContext } from "formik";
import { twMerge } from "tailwind-merge";
import { FormikContextType } from "formik";

interface FromDataProps {
  columns: Col[];
  id?: any;
  className?: string;
  children?: React.ReactNode;
  errors?: any;
  touched?: any;
}
interface Col {
  type?: string;
  name: string;
  placeholder: string;
  component: any;
  options?: any[];
}

function FormdataForm({ columns, id, className, children }: FromDataProps) {
  const { errors, touched }: FormikContextType<any> = useFormikContext();
  return (
    <Form className="w-full" id={id}>
      <div className={twMerge("flex flex-col", className)}>
        {columns.map((col: Col, index) => (
          <div key={index} className="mt-2 mb-2">
            <div>
              <Field
                type={col.type}
                label={col.placeholder}
                options={col.options}
                {...col}
              />
              {touched[col.name] && errors[col.name] && (
                <p className="text-red-600">{String(errors[col.name])}</p>
              )}
            </div>
          </div>
        ))}
        {children}
      </div>
    </Form>
  );
}

export default FormdataForm;
