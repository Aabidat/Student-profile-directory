function Footer({ students }) {
    
  const activeCount = students.filter((student) => student.isActive).length;
  const inactiveCount = students.length - activeCount;

  return (
    <footer className="footer">
      <p>Total Students: <strong>{students.length}</strong></p>
      <p>Active: <strong>{activeCount}</strong></p>
      <p>Inactive: <strong>{inactiveCount}</strong></p>
      <p className="footer-note">Student Profile Directory · Built with React</p>
    </footer>
  );
}
 
export default Footer;
 