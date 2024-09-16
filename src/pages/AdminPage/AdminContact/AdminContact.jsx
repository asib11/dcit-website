import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdminContact = () => {
    const messages = useLoaderData();
    
    return (
        <div>
            <h2 className='text-5xl font-extrabold my-16 pl-16'>All Messages {messages.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>course</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages.map((message,idx) => 
                                <tr className="bg-base-200" key={message._id}>
                                    <th>{idx+1}</th>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.phone}</td>
                                    <td>{message.courseData}</td>
                                    <td>{message.textArea}</td>
                                </tr>
                            )
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminContact;