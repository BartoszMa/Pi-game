import RedirectIfNotLogged from "./RedirectIfNotLogged";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const Profile = () => {
    RedirectIfNotLogged()
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true})
    const [profile, setProfile] = useState({})
    const {nickname} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4200/${nickname}`)
                const data = await response.json()
                setProfile(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [])

    const updateMail = async (nickname, email) => {
        try {
            await fetch(`http://localhost:4200/${nickname}`, {
                credentials: "include",
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nickname: nickname,
                    email: email
                })
            });

        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = async (user) => {

        await updateMail(nickname, user.email)
    }

    return (
        <div>
            <div
                className={"w-6/12 mx-auto text-center px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"}>
                <div>
                    Nickname: {profile.nickname}
                </div>
                <div>
                    Email: {profile.email}
                </div>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-6">
                    <input {...register("email", {required: "email required"})} type="email" className="form-control block
        w-6/12
        mx-auto
        text-center
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                           placeholder="email"/>
                </div>

                <button type="submit"
                        className="w-6/12 mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Change Email
                </button>
            </form>
        </div>
    )

}

export default Profile