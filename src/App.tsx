// Importing necessary modules and components from React and other files
import React, { useState } from 'react';
import EmployeeDropdown from './components/EmployeeDropdown';
import EmployeeCalendar from './components/EmployeeCalendar';
import { AttendanceRecord } from './components/types';
import './App.css'; // Importing the CSS file for styling

// Defining the main App component as a functional component with React.FC type
const App: React.FC = () => {
  // List of employee names
  const employees = ['Nusrath', 'Abhishek', 'Omkar', 'Vaneela', 'Sangeetha'];
  
  // State to store the currently selected employee's name
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  // Attendance data for each employee, where each employee's name is a key
  // and the value is an array of attendance records with date and status
  const attendanceData: { [employee: string]: AttendanceRecord[] } = {
    Nusrath: [
      { date: '2024-09-11', status: 'Present' },
      { date: '2024-09-07', status: 'Absent' },
      // Additional dates for Nusrath...
    ],
    Abhishek: [
      { date: '2024-09-03', status: 'Present' },
      { date: '2024-09-06', status: 'Absent' },
      // Additional dates for Abhishek...
    ],
    Omkar: [
      { date: '2024-09-05', status: 'Present' },
      { date: '2024-09-09', status: 'Absent' },
      // Other dates for Omkar...
    ],
    Vaneela: [
      { date: '2024-09-12', status: 'Present' },
      { date: '2024-09-14', status: 'Absent' },
      // Other dates for Vaneela...
    ],
    Sangeetha: [
      { date: '2024-09-20', status: 'Present' },
      { date: '2024-09-15', status: 'Absent' },
      // Other dates for Sangeetha...
    ],
  };

  // Retrieve the attendance data for the selected employee, or an empty array if no employee is selected
  const attendance = selectedEmployee ? attendanceData[selectedEmployee] || [] : [];

  // JSX for rendering the component
  return (
    <div className="container"> {/* Main container for the app */}
      <h1>Employee Attendance Calendar</h1> {/* Title of the application */}
      <EmployeeDropdown employees={employees} onSelect={setSelectedEmployee} /> {/* Dropdown to select an employee */}
      
      {selectedEmployee && ( /* Conditionally render the calendar if an employee is selected */
        <>
          <h2>Attendance for {selectedEmployee}</h2> {/* Display the name of the selected employee */}
          <EmployeeCalendar attendance={attendance} /> {/* Render the EmployeeCalendar with attendance data */}
        </>
      )}
    </div>
  );
};

export default App; // Exporting the App component as the default export
