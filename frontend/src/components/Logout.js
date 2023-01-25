// import {cookies} from 'react-cookie'
// import {useNavigate} from "react-router-dom";
//
// const Logout = async () => {
//     const navigate = useNavigate()
//     try {
//         await fetch('http://localhost:4200/logout', {
//             method: 'GET',
//             credentials: 'include'
//         });
//
//         cookies.remove('isLoggedIn');
//         cookies.remove('nickname');
//         navigate('/login');
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// export default Logout

import {useEffect} from 'react';
import {cookies} from 'react-cookie';
import {useNavigate} from "react-router-dom";

// const Logout = () => {
//     const navigate = useNavigate()
//     useEffect(() => {
//         await fetch('http://localhost:4200/logout', {
//             method: 'GET',
//             credentials: 'include'
//         });
//         cookies.remove('isLoggedIn');
//         cookies.remove('nickname');
//     }, []);
//     navigate("/login")
// }

// const Logout = () => {
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const logout = async () => {
//             try {
//                 await fetch('http://localhost:4200/logout', {
//                     method: 'GET',
//                     credentials: 'include'
//                 });
//
//                 cookies.remove('isLoggedIn');
//                 cookies.remove('nickname');
//                 navigate('/login');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         logout()
//     }, []);
//
//     return null;
// }
const Logout = () => {
    const navigate = useNavigate();


    fetch('http://localhost:4200/logout', {
        method: 'GET',
        credentials: 'include'
    });

    cookies.remove('isLoggedIn');
    cookies.remove('nickname');
    navigate('/login');


}


export default Logout