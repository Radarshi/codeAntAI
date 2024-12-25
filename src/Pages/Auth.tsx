import Card from "../Components/Auth/Card.tsx";
import SignIn from "../Components/Auth/SignIn.tsx";
const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <Card />
            <SignIn />
        </div>
    );
};

export default Auth;