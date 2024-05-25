// 'client-only';
import toast from 'react-hot-toast';

export const setToastSucess = (msg: string) => {
  toast.success(msg);
};

export const setToastError = (msg: string) => {
  toast.error(msg);
};
