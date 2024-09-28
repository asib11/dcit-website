import React from 'react';
import img from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import {  FaArrowLeft} from "react-icons/fa";

const NewsDetails = () => {
    return (
        <div className='max-w-7xl mx-auto pb-10 max-xl:p-4'>
            <Link to={'/news'}><p className='flex items-center gap-2 text-3xl font-bold mb-6 py-16 hover:text-red-500'> <FaArrowLeft/> All News</p></Link>
            <h1 className='max-lg:text-3xl lg:text-5xl font-bold mb-6 '>🚨সতর্কতামূলক পোস্ট :</h1>
            <div className='flex max-lg:flex-col-reverse gap-8'>
                <div className='lg:w-1/2 text-justify'>
                    <ul className='list-disc pt-6 pl-6'>
                        <li>
                            <p>
                                সমসাময়িক সময়ে পরিবেশে তাপমাত্রা অত্যধিক বৃদ্ধির কারণে আপনার ব্যবহৃত গাড়িতে সর্বোচ্চ সীমা পর্যন্ত জ্বালানি তেল ভরবেন না। অনুগ্রহপূর্বক আপনার জ্বালানি ট্যাংকের অর্ধেক পূর্ণ করুন এবং বাতাসের জন্য কিছু জায়গা রেখে দেন। দিনে একবার করে জ্বালানি ট্যাংক খুলুন এবং ভিতরে উৎপন্ন গ্যাস বের হয়ে আসতে সাহায্য করুন।
                            </p>
                        </li>
                        <li>
                            সর্বোচ্চ জ্বালানি তেল ভরার কারণে চলতি মাসে পার্শ্ববর্তী দেশে ৫টি গাড়ি বিস্ফোরণের ঘটনা ঘটেছে।
                            যেহেতু রমজান মাস পর্যাপ্ত পরিমাণ পানি সেহরিতে খাওয়ার চেষ্টা করুন। এবং রোদ এড়িয়ে চলার চেষ্টা করুন। রোদে বের হলে মাথার উপর ছাতা বা অন্য কিছু রাখুন, যাতে সূর্যের তাপ মাথায় সরাসরি না পরে।
                        </li>
                        <li>
                            পানি শূন্যতা এবং সূর্যের তাপ লাগার কারণে অনেক মানুষ হিট স্ট্রোক করছে।
                            ⭕নিজের সতর্ক হউন ও অন্য সবাইকে সতর্ক করুন।⭕
                        </li>
                    </ul>
                </div>
                <div className='lg:w-1/2'>
                    <img
                        className='w-full p-1 rounded-sm'
                        src={img}
                        alt="Shoes" />
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;