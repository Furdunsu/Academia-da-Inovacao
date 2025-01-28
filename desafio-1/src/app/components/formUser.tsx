import User from "../data/model/User";

export interface FormUserProps {
    user: Partial<User>;
    changeUser: (user: Partial<User>) => void;
    save: () => void; 
    cancel: () => void;
}

export default function FormUser(props: FormUserProps) {
    const { user, changeUser, save, cancel } = props;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <span>Nome</span>
                <input type="text" 
                value={user.name ?? ""}
                onChange={(e) => changeUser({...user, name: e.target.value })}
                className="input" />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <span>Email</span>
                    <input type="email" 
                    value={user.email ?? ""}
                    onChange={(e) => changeUser({...user, email: e.target.value })}
                    className="input" />
                </div>
                <div className="flex flex-col gap-1">
                    <span>Senha</span>
                    <input type="password"
                    value={user.password ?? ""}
                    onChange={(e) => changeUser({...user, password: e.target.value })}
                    className="input" />
                </div>
            </div>
            <div className="flex gap-2">
                <button className="buttom blue" onClick={save}>Salvar</button>
                <button className="buttom gray" onClick={cancel}>Cancelar</button>
            </div>
        </div>
    )
}