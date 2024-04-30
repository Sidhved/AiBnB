import React, { useState } from "react";
import LargeHeading from "../components/Texts/LargeHeading";
import TextBox from "../components/Inputs/TextBox";
import Button from "../components/Buttons/Button";
import { authQueries } from "../api/authQueries";
import { useParams } from "react-router-dom";

function ResetPassword() {
    // get token for route parameters
    const { token } = useParams();

    // STATES
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // function to handle reset password
    const resetPassword = async () => {
        await authQueries.resetPassword(newPassword, token);
    };

    return (
        <div className="h-[100vh] bg-black flex flex-col items-center justify-center">
            <div className="w-[40%] flex flex-col space-y-8">
                <div>
                    <LargeHeading>RESET PASSWORD</LargeHeading>
                </div>

                <div className="flex flex-col space-y-5">
                    <div>
                        <TextBox
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="password"
                            placeholder="New Password"
                        />
                    </div>
                    <div>
                        <TextBox
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>
                </div>

                <div>
                    <Button onClick={resetPassword} label="RESET PASSWORD" />
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
