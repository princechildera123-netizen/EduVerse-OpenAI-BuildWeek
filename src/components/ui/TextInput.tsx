import type { ComponentPropsWithoutRef } from 'react';

type TextInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export function TextInput({ id, label, className = '', ...props }: TextInputProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink" htmlFor={id}>
      {label}
      <input
        id={id}
        className={`focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base text-ink shadow-sm transition placeholder:text-slate-400 hover:border-slate-300 ${className}`}
        {...props}
      />
    </label>
  );
}
