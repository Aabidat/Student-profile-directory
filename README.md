# Student-profile-directory
A React application that displays and manages student profiles for a coding cohort. Users can view each student's details and toggle their enrollment status between Active and Inactive.

# Overview
The Student Profile Directory is a beginner-friendly React app that puts core React concepts into practice. It displays a grid of student cards, each containing personal and academic information. Clicking a button on any card toggles that student's status between Active and Inactive, and the footer updates the counts in real time.

# Features
Displays 6 unique student profile cards Toggle each student between Active and Inactive status Footer shows a live count of total, active, and inactive students Fully reusable components — no hardcoded duplicate cards All student data rendered dynamically from an array using .map() Clean, responsive UI with hover effects and status indicators

# Components
*App.js* The root component of the application. Responsible for: Storing the student data array using useState Defining the toggleActive(id) function that flips a student's status Passing data and functions down to child components via props
*Header.js* Displays the application title and a badge showing the total number of students. Receives totalStudents as a prop from App.
*ProfileList.js* Receives the students array and onToggle function as props. Uses .map() to render one ProfileCard for each student in the array. Does not hardcode any cards manually.
*ProfileCard.js* The main display component. Receives a single student object and the onToggle function as props. Displays: Student name, track, bio, and skill level Active or Inactive status label (conditional rendering) A button to toggle the student's status (conditional rendering for button text)
*Footer.js* Receives the full students array as a prop. Uses .filter() to count active students and displays the total, active, and inactive counts.
