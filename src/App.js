import './App.css';
import Calendar from "./calendar/Calendar";
import {getState} from "./calendar/store/Calendar.store";
import {Staff} from "./calendar/store/Data/Staff";

getState().setStaff([
    new Staff(1, 1, 'Staff 1'),
    new Staff(2, 1, 'Staff 2'),
    new Staff(3, 1, 'Staff 3'),
    new Staff(4, 1, 'Room 1'),
]);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Calendar
            </header>
            <div>
                <Calendar/>
            </div>

        </div>
    );
}

export default App;
