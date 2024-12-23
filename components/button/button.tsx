import '@/components/button/styles.css';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'outline' | 'filled';
  
}

export function Button(props: ButtonProps) {
  return <button className={`btn btn-${props.type}`}>{props.children}</button>;
}
