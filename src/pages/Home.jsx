import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Typeanimation from '../components/Typeanimation';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import IosShareIcon from '@mui/icons-material/IosShare';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { TweenMax } from 'gsap';
import UpdateCards from '../components/UpdateCards';
const Home = () => {
    const navigate = useNavigate()
    const words = [
        "today startups are being widely recognized as important engines for growth and job generation. Through innovation and scalable technology, startups can generate impactful solutions, and thereby act as vehicles for socio-economic development and transformation.",
        "finance is the soul and blood of any business and no firm can survive without finance. It concerns itself with the management of monetary affairs of the firm and how money can be raised on the best terms available.",
        "an electric vehicle uses one or more electric motors or traction motors for propulsion. The power of a vehicle’s electric motor, as in other vehicles, is measured in kilowatts (kW).",
        "self confidence is a state of mind where someone pushes their boundaries and encourages belief from the very beginning, and this comes from a place of self-love.You ought to love yourself to gain that freedom from doubting your actions.",
        "having a healthy lifestyle is all about choosing to live your life in the healthiest way possible.There are a few things you have to do to start living your life in this way, i.e., the healthy way. This means doing some amount of exercise daily.",
    ];
    const inputRef = useRef(null);
    const [start, setStart] = useState(false);
    const [onFirst, setOnFirst] = useState(true);
    const [random, setRandom] = useState();
    const [loadText, setLoadTxt] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [startTime, setStartTime] = useState(1);
    const [endTime, setEndTime] = useState(1);
    const [speed, setSpeed] = useState()
    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState();
    const [password, setPassword] = useState()
    const [passwordShow, setPasswordShow] = useState(false);
    const [updateCheck, setUpdateCheck] = useState(false);
    const [responseReceived, setResponseReceived] = useState()

    useEffect(() => {
        if (start && !onFirst && inputRef.current) {
            inputRef.current.focus();
        }
    }, [start, onFirst]);
    useEffect(() => {
        if (updateCheck && open) {
            // Animation to make the component appear from top
            TweenMax.fromTo(".updateCheckDiv", 0.6, { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        }
    }, [updateCheck, open]);
    useEffect(() => {
        if (open) {
            // Animation to make the component appear from opacity 0 to 100
            TweenMax.fromTo(".componentContainer", 0.8, { opacity: 0 }, { opacity: 1 });
        }
    }, [open]);
    useEffect(() => {
        generateRandomNumber();
        // console.log("random ", random);
    }, []);
    const generateRandomNumber = () => {
        setRandom(Math.floor(Math.random() * words.length));
    };
    const handelClick = () => {
        generateRandomNumber();
        // console.log("random ", random)
        setLoadTxt(words[random])
        // console.log('load textt ', loadText)
        setOnFirst(false);
        setStart(!start);
        // console.log("start ", start)
        if (start === false) {
            let date = new Date();
            let startT = date.getTime();
            setStartTime(startT)
            // console.log("statTime ", startT)
            // console.log("statTime ", startTime)
            setInputValue('');
        }
        else if (start === true) {
            let date = new Date();
            let endT = date.getTime();
            setEndTime(endT)
            // console.log("endTime ", endTime)
            // console.log("startTime ", startTime)
            let totaltime = (endT - startTime) / 1000;
            // console.log("totaltime ", totaltime)
            // console.log("inpt value ", inputValue)
            var wordcounter = (str1, str2) => {
                let one = str1.split(" ");
                let two = str2.split(" ");
                var count1 = 0
                one.forEach(function (value, index) {
                    if (value == two[index]) {
                        count1++;
                    }
                })
                console.log(count1);
                return count1;
            }
            // console.log("loadtext 1", loadText)
            // console.log("input value ", inputValue);
            var correctwords = wordcounter(loadText, inputValue);
            var speed = Math.round((correctwords / totaltime) * 60);
            setSpeed(speed);
            // console.log("speed ", speed)
            // console.log("correctwords ", correctwords)
        }
    };
    const postHandler = async (e) => {
        e.preventDefault();
        // console.log("username", username)
        // console.log("password", password)
        // console.log("speed ", speed)
        const response = await axios.post('https://typerverse-server-production.up.railway.app/post', { username, password, speed });
        // console.log("response", response.data)
        if (response.data.newUser) {
            // console.log("new user", response.data.newUser)
            navigate('/leaderboard')
        }
        else if (response.data.success) {
            setResponseReceived(response.data.findUser.speed)
            setUpdateCheck(!updateCheck)
        }
        else {
            toast.error(response.data.message);
            // console.log("error", response.data.message)
        }
    }
    const updateScore = async () => {
        console.log(username, speed)
        const response = await axios.post('https://typerverse-server-production.up.railway.app/update', { username, speed });
        navigate('/leaderboard')
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior (creating a new line)
            handelClick(); // Call handelClick function
        }
    };
    return (
        <div className='relative min-h-screen bg-[#e0f6ea] overflow-hidden flex flex-col text-center'>
            <ToastContainer />
            {updateCheck && open && (
                <UpdateCards
                    responseReceived={responseReceived}
                    updateScore={updateScore}
                    setOpen={setOpen}
                    setUpdateCheck={setUpdateCheck}
                />
            )}
            {open && (
                <div className='componentContainer absolute z-10 w-screen h-screen flex items-center justify-center p-3 '>
                    <div className="absolute bg-black opacity-50 w-full h-full"
                        onClick={() => {
                            setOpen(false)
                            setUpdateCheck(!updateCheck)
                        }}
                    ></div> {/* Outer shade */}
                    <div className="mx-auto bg-white max-w-screen-xl z-30 px-4 py-16 sm:px-6 lg:px-8  rounded-lg relative opacity-100 transition-opacity duration-300">
                        {/* Inner white div */}
                        <div className="mx-auto max-w-lg text-center flex  flex-col items-center justify-center">
                            {/* Cross sign positioned absolute on top right */}
                            <div className='absolute top-0 right-0 p-3 cursor-pointer'
                                onClick={() => {
                                    setOpen(false)
                                    setUpdateCheck(false)
                                }}>
                                <CloseIcon />
                            </div>
                            <h1 className="text-2xl font-bold sm:text-3xl">Your Typing Speed Was {speed}</h1>
                            <p className="mt-4 text-gray-500">
                                Post Your Typing Speed and Compete with our TOP users
                            </p>
                            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <input
                                            style={{
                                                border: '1px solid black',
                                            }}
                                            onChange={(e) => { setUsername(e.target.value) }}
                                            ref={inputRef}
                                            type="Username"
                                            className=" rounded-lg outline-none w-full p-2"
                                            placeholder="Enter Username"
                                        />
                                        <input
                                            style={{
                                                border: '1px solid black',
                                            }}
                                            onChange={(e) => { setPassword(e.target.value); }}
                                            ref={inputRef}
                                            type={passwordShow ? "text" : "password"}
                                            className="mt-4 rounded-lg outline-none w-full p-2"
                                            placeholder="Enter Password"
                                        />
                                        <div
                                            onClick={() => { setPasswordShow(!passwordShow); }}
                                            className='absolute top-16 right-0 cursor-pointer px-2 hover:scale-95 transition-all ease-in-out duration-200'> <RemoveRedEyeOutlinedIcon /></div>
                                    </div>
                                    <label className='text-sm text-gray-500'>Note: New users can directly write desired username and password.</label>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={postHandler}
                                        className='bg-[#a9eaab] px-4 py-2 rounded-lg hover:bg-[#87dd8a] hover:scale-105 transition-all ease-in-out duration-200 text-white text-2xl flex items-center'><IosShareIcon /> Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Navbar />
            {onFirst && <Typeanimation />}
            {!onFirst && (
                start ? (
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl pl-4 pr-4 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24 xl:pl-28 xl:pr-28 pt-2'>
                        {loadText}
                    </h1>
                ) : (
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl pl-4 pr-4 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24 xl:pl-28 xl:pr-28 pt-2'>
                        Your Speed was {speed} word per minute
                    </h1>
                )
            )}
            <InputBox
                disabled={!start}
                value={inputValue}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                onChange={(e) => { setInputValue(e.target.value) }}
            />
            <div className='flex items-center justify-center gap-5'>
                <div
                    onClick={handelClick}
                    className="mt-5">
                    {!start ? (
                        <Button text="Click To Start" />
                    ) : (
                        !onFirst ? (
                            <Button text="Click To Submit" />
                        ) : (
                            <Button text="Click To Start" />

                        )
                    )}
                </div>
                {!start && !onFirst && (
                    <div className='mt-5' onClick={() => { setOpen(true) }}>
                        <Button text="Post Your Score" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
