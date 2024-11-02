
import React, { useState, useEffect } from "react";

function MessageBar() {
    const [showMessageBar, setShowMessageBar] = useState(true);

    //   useEffect(() => {
    //     const timer = setTimeout(() => setShowMessageBar(false), 6000000); // Hide after 10 seconds
    //     return () => clearTimeout(timer);
    //   }, []);

    const handleClose = () => {
        setShowMessageBar(false); 
    };

    return (
        <div>
            {
                showMessageBar && (
                    <div className="bg-green-700 text-white text-center p-2 font-semibold flex items-center justify-center relative">
                        <div className="max-lg:mr-6 flex max-lg:flex-col w-[95%]">
                            <p className="lg:text-justify">
                                সম্পূর্ণ সরকারি অনুমোদনে NSDA এর অধীনে RPL Mode এ Graphic Design-3, Web Design & Development for Freelancing Level-3 and Computer Operation-3 Assessment করা হবে।
                            </p>
                            <div>
                                <a
                                    href="https://forms.gle/3H35zv36t1rZyeWq8"
                                    className="ml-2 inline-block bg-red-800 max-lg:w-[40%] text-white px-3 py-1 rounded hover:bg-red-900 transition"
                                >
                                    Registration Ongoing
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClose}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-green-500 hover:bg-red-700 rounded-full w-6 h-6 flex items-center justify-center"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default MessageBar;
