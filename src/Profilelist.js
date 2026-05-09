import Profilecard from "./Profilecard";

function ProfileList({students, onToggle}) {
    return (
        <div className="profile_list">
            {students.map((students) => ( 
                <Profilecard
                key={students.id}
                student={students}
                onToggle={onToggle}
                />
            ))}

        </div>
    );
}

export default ProfileList;