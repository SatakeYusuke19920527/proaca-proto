import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/userSlice';

export const useLoginCheck = () => {
  const user = useAppSelector(selectUser);
  return user.uid === "" ? false : true
}