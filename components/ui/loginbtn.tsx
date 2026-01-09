import { signIn } from "@/lib/auth"
import { FaUser } from "react-icons/fa"

export default function SignIn() {
    return (
    <form
        action={async () => {
        "use server"
        await signIn("discord")
        }}
    >
        <button type="submit" className="hover:cursor-pointer"><FaUser className="w-3.5 h-3.5" /></button>
    </form>
    )
}