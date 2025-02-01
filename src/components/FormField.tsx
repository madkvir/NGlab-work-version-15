import React from "react";

interface FormFieldProps {
  label: string;
  icon: React.ComponentType<any>;
  required?: boolean;
  children: React.ReactNode;
}

const FormField = ({ label, icon: Icon, required, children }: FormFieldProps) => (
  <div>
    <label className="flex items-center gap-1 text-sm leading-5 font-medium text-gray-200 mb-1">
      <Icon className="h-3.5 w-3.5" />
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export default FormField;
