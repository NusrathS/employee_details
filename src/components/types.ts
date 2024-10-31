// Exporting the AttendanceRecord interface to be used in other files
export interface AttendanceRecord {
    date: string; // A string representing the date of attendance in 'YYYY-MM-DD' format
    status: 'Present' | 'Absent'; // Status of attendance, which can either be 'Present' or 'Absent'
}
