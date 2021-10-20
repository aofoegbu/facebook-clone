import Image from "next/image";
import { sigIn } from "next-auth/client";

function Login() {
    return (
        <div>
            <Image
            src="https://links.papareact.com/t41"
            width={400}
            height={400}
            objectFit="contain"
            alt=""
            />
            <h1 className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>
                Login with Facebook
            </h1>
        </div>
    )
}

export default Login;
