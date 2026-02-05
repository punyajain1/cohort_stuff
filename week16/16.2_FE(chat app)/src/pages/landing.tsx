import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socketStore } from "../components/socketstore";

export function Landing() {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    function generateCode() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        while (result.length < 5) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCode(result);
    }

    function join() {
        socketStore.name = (document.getElementById("name") as HTMLInputElement)?.value;
        const room = (document.getElementById("code") as HTMLInputElement)?.value;
        if(!room) {
            alert("Room code cannot be empty!");
            return;
        }

        try{
            const ws = new WebSocket("ws://localhost:8080");
            socketStore.socket = ws;
            socketStore.room = room;
            ws.onopen = () => {
                ws.send(JSON.stringify({
                    type: "join",
                    payload: { room  : room}
                }));
                navigate("/chat");
            };

            ws.onerror = (error) => {
                console.error("WebSocket Error:", error);
                alert("Failed to connect to the WebSocket server.");
            };

        } catch (error) {
            console.error("Error creating WebSocket:", error);
            alert("Failed to establish WebSocket connection.");
        }
    }

    return (
        <div className="bg-black min-h-screen h-screen pt-10">
            <div className="pt-8 flex flex-col items-center justify-center gap-20 ">
                <div className="font-abc text-6xl center text-white">Welcome To ChatRoom</div>
                <div className="bg-pro-400 border-2 items-center shadow-lg shadow-white border-white rounded-lg w-min-96 h-96">
                    <div className="p-6">
                        <div className="flex justify-center mb-4 ">
                            <span className="text-xl text-white font-abc flex justify-center">Enter Name</span>
                            <input id="name" type="text" placeholder="Name" className="bg-transparent border-2 ml-4 mr-4 border-white text-center w-90 h-10 text-white" />
                        </div>

                        <div className="flex justify-center mb-4">
                            <span className="text-xl text-white font-abc flex justify-center">Join Room</span>

                            <input id="code" type="text" placeholder="Room Code" className="bg-transparent ml-4 mr-4 text-center border-2 border-white w-90 h-10 text-white" />
                        </div>

                        <div className="flex justify-center">
                            <button onClick={join} className=" text-xl rounded-lg bg-pro-200 font-abc shadow-md text-white border-spacing-0.5 border-white p-2 hover:bg-pro-300">
                                Join Room
                            </button>
                        </div>

                        <div className="mt-4 ">
                            <span className="text-white text-3xl font-abc flex justify-center mb-3">Create Room</span>
                            <div className="flex justify-center">
                                <div className="border-2 border-white rounded-lg text-white text-xl text-center w-72 h-10 mb-2">{code}</div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={generateCode} className=" text-xl rounded-lg bg-pro-200 font-abc shadow-md text-white border-spacing-0.5 border-white p-2 hover:bg-pro-300">Create Room</button>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-center m-4 text-pro-100 font-bold italic text-lg">Real Time Chat Application using WebSockets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
