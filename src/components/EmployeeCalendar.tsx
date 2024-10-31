import React from 'react'; // Import React library to use JSX and React types
import { AttendanceRecord } from './types'; // Import the AttendanceRecord type

// Define the props for the EmployeeCalendar component
interface EmployeeCalendarProps {
  attendance: AttendanceRecord[]; // Array of attendance records
}

// Array representing the days of the week
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Define the EmployeeCalendar component as a functional component with React.FC type
const EmployeeCalendar: React.FC<EmployeeCalendarProps> = ({ attendance }) => {
  const daysInMonth = 30; // Number of days in the month to be displayed

  // Reduce attendance array to an object where keys are dates and values are statuses
  const attendanceByDate = attendance.reduce((acc, record) => {
    acc[record.date] = record.status;
    return acc;
  }, {} as { [date: string]: 'Present' | 'Absent' | 'Pending' }); // Initialize an empty object with specific type

  return (
    <div>
      {/* Calendar month header */}
      <h3 style={{ textAlign: 'center', color: '#00a1e0' }}>September 2024</h3>
      {/* Calendar grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center' }}>
        {/* Render days of the week */}
        {daysOfWeek.map((day) => (
          <div key={day} style={{ fontWeight: 'bold', color: '#555' }}>
            {day} {/* Display the day name */}
          </div>
        ))}
        {/* Render days of the month */}
        {[...Array(daysInMonth)].map((_, i) => {
          const date = `2024-09-${String(i + 1).padStart(2, '0')}`; // Format date string
          const status = attendanceByDate[date]; // Get attendance status for the date

          // Set background color based on attendance status
          const backgroundColor = status === 'Present' ? 'green' : status === 'Absent' ? 'red' : 'transparent';
          // Set text color based on attendance status
          const color = status === 'Present' || status === 'Absent' ? 'white' : '#000';

          return (
            // Render each day of the month
            <div
              key={i} // Key for React element
              style={{
                padding: '10px', // Padding around the day number
                backgroundColor: backgroundColor, // Background color based on attendance status
                color: color, // Text color based on attendance status
                borderRadius: '4px', // Rounded corners
              }}
            >
              <div>{i + 1}</div> {/* Display the day number */}
            </div>
          );
        })}
      </div>

      {/* Legend for attendance statuses */}
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <span style={{ backgroundColor: 'green', color: 'white', padding: '5px', marginRight: '10px' }}>Present</span>
        <span style={{ backgroundColor: 'red', color: 'white', padding: '5px' }}>Absent</span>
      </div>
    </div>
  );
};

// Export the EmployeeCalendar component to be used in other files
export default EmployeeCalendar;
