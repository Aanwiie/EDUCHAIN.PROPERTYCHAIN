import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ethers } from 'ethers';
import logo from "../assets/Metamask.png";
import OCButton from "./OCIDButton.tsx";  // Import the OCButton component

const Navigation = ({ account, setAccount }) => {
    const [toggle, setToggle] = useState(false);
    
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0]);
        setAccount(account);
    };

    const handleOCIDClick = () => {
        // Implement the logic for handling OCID button click
        console.log("OCID button clicked");
    };

    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Property Chain</h1>
                    <ul className="md:flex md:items-center absolute md:static left-0 w-full md:w-auto bg-slate-50 md:bg-transparent transition-all ease-in duration-300">
                        <li className="my-2 md:my-0 mx-4">
                            <NavLink className="text-xl hover:text-green-500 duration-500 font-bold active:text-green-500 focus:text-green-500" to="/buy">
                                Buy
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0 mx-4">
                            <NavLink className="text-xl hover:text-green-500 duration-500 font-bold active:text-green-500 focus:text-green-500" to="/sell">
                                Sell
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0 mx-4">
                            <NavLink className="text-xl hover:text-green-500 duration-500 font-bold active:text-green-500 focus:text-green-500" to="/rent">
                                Rent
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0 mx-4">
                            <button
                                type="button"
                                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
                                onClick={connectHandler}
                            >
                                <img src={logo} alt="Logo" className="h-6 w-6" />
                                <span>Connect</span>
                            </button>
                        </li>
                        <li className="my-2 md:my-0 mx-4">
                            {/* Use the OCButton component */}
                            <OCButton onClick={handleOCIDClick}>
                                OCID
                            </OCButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
