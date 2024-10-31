import React from 'react'; // Import React library to use JSX and React types

// Define the props for the EmployeeDropdown component
interface EmployeeDropdownProps {
  employees: string[]; // List of employee names to display in the dropdown
  onSelect: (employee: string) => void; // Callback function triggered when an employee is selected
}

// Define the EmployeeDropdown component as a functional component with React.FC type
const EmployeeDropdown: React.FC<EmployeeDropdownProps> = ({ employees, onSelect }) => (
  // Render a <select> dropdown element
  <select onChange={(e) => onSelect(e.target.value)}>
    {/* Default option displayed when no employee is selected */}
    <option value="">Select an Employee</option>
    
    {/* Map over the employees array to create an <option> for each employee */}
    {employees.map((employee, index) => (
      <option key={index} value={employee}>
        {employee} {/* Display the employee's name as the option text */}
      </option>
    ))}
  </select>
);

// Export the EmployeeDropdown component to be used in other files
export default EmployeeDropdown;
