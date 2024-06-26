import styles from './Calendar.module.scss';
import './Calendar.scss';
import {CalendarStore} from "./store/Calendar.store";

const time = {
    0: [15, 30, 45],
    60: [15, 30, 45],
    120: [15, 30, 45],
    180: [15, 30, 45],
    240: [15, 30, 45],
    300: [15, 30, 45],
    360: [15, 30, 45],
    420: [15, 30, 45],
};

function Calendar() {
    const allStaff = CalendarStore((state) => state.allStaff);
    return (
        <div className={styles.pageWrapper}>
            <div className="calendar table-container">
                <table border="1">
                    <tr>
                        <th rowSpan="1"></th>
                        {Object.keys(allStaff).map((id) => {
                            const staff = allStaff[id];
                            return <th key={`Staff-${id}`} className={styles.header}>{staff.name}</th>;
                        })}
                    </tr>
                    {Object.keys(time).map((id, i) => {
                        return time[id].map((timeRow, j) => {
                            return <>
                                <tr>
                                    {j === 0 ? <td rowSpan="3" className={styles.timeColumn}></td> : null}
                                    {Object.keys(allStaff).map((id) => {
                                        return <td key={`Staff-${id}`} className={styles.timeHeight}></td>;
                                    })}
                                </tr>
                            </>
                        });
                    })}
                </table>
            </div>
        </div>
    );
}

export default Calendar;
