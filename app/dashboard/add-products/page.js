import { auth } from "@/auth";
import { Authorizationcheck } from "@/config/authorization-check";
import AddProduct from "./add-product";


export default async function page () {
    const session = await auth();
    return (
        <>
        <Authorizationcheck/>
        <AddProduct userId={session?.user?.id}/>
        </>


    )
}