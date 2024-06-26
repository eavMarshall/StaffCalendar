import styles from './Calendar.module.scss';
import {CalendarStore} from "./store/Calendar.store";

function Calendar() {
    const allStaff = CalendarStore((state) => state.allStaff);
    return (
        <div className="Calendar">
            <div className={styles.header}>
            {Object.keys(allStaff).map((id) => {
                const staff = allStaff[id];
                return <div key={`Staff-${id}`}>{staff.name}</div>;
            })}
            </div>

        </div>
    );
}

export default Calendar;
