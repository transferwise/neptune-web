import { useContext } from 'react';
import { DirectionContext } from '../../../provider/direction/DirectionProvider';

export const useDirection = () => ({direction: useContext(DirectionContext), isRTL: useContext(DirectionContext) === 'rtl'})
