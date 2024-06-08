// 'client-only';
import toast from 'react-hot-toast';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export const setToastSucess = (msg: string) => {
  toast.success(msg);
};

export const setToastError = (msg: string) => {
  toast.error(msg);
};


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
