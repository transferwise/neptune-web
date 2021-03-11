import { useContext } from 'react';
import { DirectionContext } from '../../../provider/direction/DirectionProvider';

export const useDirection = () => [useContext(DirectionContext)];
