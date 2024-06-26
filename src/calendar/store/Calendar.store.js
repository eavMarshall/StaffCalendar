import { create } from 'zustand';
import {Staff} from "./Data/Staff";

export const CalendarStore = create((set, getState) => ({

    allStaff: [],
    /**
     * @param {Array.<Staff>} allStaff
     */
    setAllStaff: (allStaff) => set(() => {
        return {allStaff: convertStaffArrayToMap(allStaff)};
    }),
}));

export const getState = () => CalendarStore.getState();

export const convertStaffArrayToMap = (allStaff) => {
    const staff = {};
    if (!Array.isArray(allStaff)) {
        throw new Error('Must be an array');
    }
    for (let i in allStaff) {
        if (!(allStaff[i] instanceof Staff)) {
            throw new Error('Staff must be of type Staff');
        }
        staff[allStaff[i].id] = allStaff[i];
    }
    return staff;
};
