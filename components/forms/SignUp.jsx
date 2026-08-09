import React from 'react'
import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitSignUpForm = async (e) => {
        e.preventDefault();

        // UseStates used: username, password.
        
        // Don't run if username or password inputs are empty WIP
        if (username.length === 0) {
            console.log("Please enter a valid username.");
            return;
        } else if (password.length === 0) {
            console.log("Please enter a valid password.");
            return;
        }

        try {
            const response = await fetch("https://railwaybackendtestv1-production.up.railway.app/sign-up", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
            });
            
            // Intercept HTTP server errors (e.g. 404, 500)
            if (!response.ok) {
                throw new Error("An HTTP error has occurred! Status: " + response.status);
            }

            const data = await response.json();
            console.log("Success:" + data);
        } catch (error) {
            console.error("A fatal error has occurred during the sign up process: " + error);
        }
    }

    return (
        <div className='flex flex-col gap-4 border p-4 w-fit'>
            <h1 className='text-center text-[1.25rem] font-bold'>Sign Up</h1>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='border p-1' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='border p-1' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <button 
                    className='hover-button border rounded-[0.25rem] py-[0.125rem] text-[0.75rem]'
                    onClick={(e) => submitSignUpForm(e)}
                >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp