import { useContext } from 'react';
import { RTLContext } from '../../../provider/rtl/RTLProvider';

export const useRTL = () => [useContext(RTLContext)];
