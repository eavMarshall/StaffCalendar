import './Calendar.css';
import {CalendarStore} from "./store/Calendar.store";

function Calendar() {
    const allStaff = CalendarStore((state) => state.staff);
    console.log(allStaff)
    return (
        <div className="Calendar">
            {allStaff.map((staff) => {
                return <div>{staff.name}</div>;
            })}
        </div>
    );
}

export default Calendar;
