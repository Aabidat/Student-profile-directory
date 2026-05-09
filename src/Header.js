function Header({totalStudents}) {
    return (
        <header className="header">
            <h1 className="header-title">Student Profile Directory</h1>
            <span className="header-badge">{totalStudents} totalStudents</span>
        </header>
    );
}

export default Header;