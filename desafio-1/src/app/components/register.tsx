"use client";
import { useState } from "react";
import allUsers from "../data/constants/users"
import User from "../data/model/User"
import UserList from "./userList";
import FormUser from "./formUser";
import Id from "../data/model/id";

export default function Register(){
    const [userNow, setUserNow] = useState<Partial<User> | null>
    (null);

    const [users, setUsers] = useState<User[]>(allUsers)
    
    function selectUser(user: Partial<User>) {
        setUserNow(user);
    }

    function removeUser(user:User) {
        const newUsers = users.filter((u) => u.id !== user.id);
        setUsers(newUsers);
    }

    function saveUser() {
        const existUser = users.find((u) => u.id === userNow?.id)

        if (existUser) {
            const newUsers = users.map((u) => { 
                return u.id === userNow?.id ? userNow : u;

            });
            setUsers(newUsers as User[]);
        } else {
            setUsers([...users, userNow as User]);
        }
        setUserNow(null);
    }

    function cancel() {
        setUserNow(null);
    }
    
    return (
        <div className="flex flex-col gap-5">
            <button className="buttom green self-end"
            onClick={() => selectUser ({ id: Id.new()})}>Novo usuário</button>
            {userNow ? (
                <FormUser user={userNow}
                save={saveUser}
                changeUser={setUserNow}
                cancel={cancel}/>
            ) :(
                <UserList users={users}
                selectUser={selectUser}
                removeUser={removeUser} />
            )}
        </div>
    );
}