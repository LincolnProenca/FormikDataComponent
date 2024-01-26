# FormikDataComponent

This package provides a set of components for form management in Next.js applications, utilizing the Formik library. The two main components, `FormDataRoot` and `FormdataForm`, work together to simplify the process of building and handling forms in your Next.js project.

## Installation

```bash
npm install formik-data-component
```

or

```bash
yarn add formik-data-component
```

## Usage

### `FormDataRoot` Component

The `FormDataRoot` component is a wrapper that manages form state and submission using Formik. It serves as a container for the entire form.

#### Props:

- `onSubmit`: (Function) A callback function to handle form submission. It receives the form data as an argument.
- `initialValues`: (Object, optional) Initial values for the form fields.
- `children`: (React nodes) The structure of the form.
- `className`: (String, optional) Additional styling for the form container.
- `schema`: (Yup schema, optional) Validation schema for form validation.

#### Example:

```jsx
import { FormData } from "formik-data-component";

<FormData.Root
  onSubmit={handleFormSubmit}
  initialValues={initialFormValues}
  schema={formValidationSchema}
>
  {/* Form structure goes here */}
</FormData.Root>;
```

### `FormdataForm` Component

The `FormdataForm` component renders form fields based on the provided `columns` configuration. It utilizes Formik's `Field` component for each form field.

#### Props:

- `columns`: (Array) An array of objects defining the form fields.
- `id`: (Any, optional) Identifier for the form.
- `className`: (String, optional) Additional styling for the form.
- `children`: (React nodes, optional) Additional elements to include in the form.
- `errors`: (Object) Formik errors object (provided by the `useFormikContext` hook).
- `touched`: (Object) Formik touched object (provided by the `useFormikContext` hook).

#### Example:

```jsx
import { FormData } from "formik-data-component";

<FormData.Form
  columns={formColumns}
  id="formId"
  className="custom-form-styling"
>
  {/* Additional form elements or customization goes here */}
</FormData.Form>;
```

### Example Usage:

```jsx
import { FormData } from "formik-data-component";

<FormData.Root
  onSubmit={handleFormSubmit}
  initialValues={initialFormValues}
  schema={formValidationSchema}
>
  <FormData.Form columns={formColumns} id="formId" />
</FormData.Root>;
```

This example demonstrates the integration of the `FormDataRoot` and `FormdataForm` components to create a form with specific columns and customization. Adjust the props and structure according to your specific form requirements.

### Example `columns` Configurations:

```jsx
const columns = [
  {
    type: "text",
    name: "option",
    placeholder: "Deadline",
    onClick: () => setShowDeadline(true),
    disabled: true,
    // Additional styles using sx as the component is made with mui
    sx: {
      color: "inherit",
      "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled":
        {
          cursor: "pointer",
        },
      "& .Mui-disabled": {
        fill: "#757575",
        cursor: "pointer",
      },
    },
    options: [data.option],
    component: GenericSelectField,
  },
  {
    type: "text",
    name: "subject",
    placeholder: "Subject",
    options: subject,
    component: GenericSelectField2,
  },
  {
    type: "text",
    name: "urgency",
    placeholder: "Urgency",
    options: ["High", "Medium", "Low"],
    component: GenericSelectField,
  },
  {
    type: "text",
    name: "price",
    placeholder: "Price",
    // Additional customization using Bottomlabel
    Bottomlabel: (
      <div className="w-full flex justify-between">
        <div className="text-verde_escuro">Suggested Price</div>
        <div className="text-verde_claro">US$20</div>
      </div>
    ),
    component: PriceField,
  },
];
```

### Example input Components:

#### `GenericField`

```jsx
export const GenericField = ({ field, form, ...props }: any) => (
  <div className="flex flex-col">
    <TextField fullWidth {...field} {...props} variant="outlined" />
    {props?.Bottomlabel}
  </div>
);
```

#### `GenericSelectField`

```jsx
export const GenericSelectField = ({ field, form, ...props }: any) => (
  <div className="flex flex-col">
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-name-label">{props.label}</InputLabel>
      <Select
        fullWidth
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        input={<OutlinedInput {...field} {...props} />}
      >
        {props.options.map((name: any) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);
```
