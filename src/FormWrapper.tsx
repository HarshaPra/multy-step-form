import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
}


export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div >
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', margin: 0 }}>{title}</h2>
      <div style={{
        display: 'grid',
        gap: '1rem',
        justifyContent: 'flex-start',
        gridTemplateColumns: 'auto minmax(auto, 400px)',
      }}>{children}</div>
    </div>
  )
}