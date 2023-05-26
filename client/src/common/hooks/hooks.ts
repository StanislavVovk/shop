import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useAppForm } from './useAppForm';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector, useAppDispatch, useAppForm }
