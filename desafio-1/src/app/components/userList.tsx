'use client';
import User from "../data/model/User";

export interface UserListProps {
    users: User[];
    selectUser: (user: User) => void;
    removeUser: (user: User) => void;
}

export default function UserList(props: UserListProps) {
    function renderUser(user: User) {
        return <div className="flex items-center px-6 py-3 rounded-md bg-zinc-800">
            <div className="flex-1 flex flex-col">
                <span className="font-semibold">{user.name}</span>
                <span className="text-sm text-zinc-400">{user.email}</span>
            </div>
            <div className="flex gap-2">
                <button className="buttom blue"
                onClick={() => props.selectUser(user)}>
                    Alterar</button>
                <button className="buttom red" 
                onClick={() => props.removeUser(user)}>Deletar</button>
            </div>
        </div>;
    }

    return (
        <ul className="flex flex-col gap-2">
            {props.users.map((user) =>{
                return <li key={user.id}>{renderUser(user)}</li>;
            })}
        </ul>
    )
}