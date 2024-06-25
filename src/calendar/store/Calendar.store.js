import { create } from 'zustand';
import {Staff} from "./Data/Staff";


export const CalendarStore = create((set, getState) => ({

    staff: [],
    /**
     * @param {Array.<Staff>} staff
     */
    setStaff: (staff) => set(() => {
        if (!Array.isArray(staff)) {
            throw new Error('Must be an array');
        }
        for (let i in staff) {
            if (!(staff[i] instanceof Staff)) {
                throw new Error('Staff must be of type Staff');
            }
        }

        return {staff};
    }),
}));

export const getState = () => CalendarStore.getState();
