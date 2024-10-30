
import { Link } from 'react-router-dom';
import Seo from '../Seo/Seo';
import Discount from '../shared/Discount/Discount';

const DcitInstitue = () => {
    const [courses, setCurses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCurses(data))
            .catch(error => console.error(error))
    }
        , [])

    const recommand = courses.filter(item => item.type.includes('recommand') === true)
    const fourth = courses.filter(item => item.type.includes('fourth') === true)
    const regular = courses.filter(item => item.type.includes('regular') === true)
    const nsda = courses.filter(item => item.type.includes('nsda') === true)

    return (
        <div className=''>
            <Seo title={'DCIT Institute'} content='Beginner friendly page for learning React Helmet.'/>
            <Discount />
            <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16 ' >NSDA</h3>
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6' > Course Programs </h2>

            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20' >
                {
                    nsda.map((course, index) => (
                        <div key={index} course={course}  className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                            <figure className='h-[370px] w-full overflow-hidden'>
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src={course.img}
                                    alt={course.name} />
                            </figure>
                            <div className="flex mt-auto p-4 justify-between items-center">
                                <div>
                                    <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                    <p className='font-bold text-xl'>{course.name}</p>
                                </div>
                                <div className="">
                                    <Link to={`/dcitinstitue/${course.link}`} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16 ' >RECOMMENDED</h3>
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6' > Course Programs </h2>

            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20' >
                {
                    recommand.map((course, index) => (
                        <div key={index} course={course}  className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                            <figure className='h-[370px] w-full overflow-hidden'>
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src={course.img}
                                    alt={course.name} />
                            </figure>
                            <div className="flex mt-auto p-4 justify-between items-center">
                                <div>
                                    <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                    <p className='font-bold text-xl'>{course.name}</p>
                                </div>
                                <div className="">
                                    <Link to={`/dcitinstitue/${course.link}`} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='bg-[#e6e7e7]'>
                <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16'>4<sup>TH</sup> INDUSTRIAL REVOLUTION</h3>
                <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6'>Course Programs</h2>
                <div className='grid grid-cols-1 justify-items-center gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20'>
                    {
                        fourth.map((course, index) => (
                            <div key={index} className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                                <figure className='h-[370px] w-full overflow-hidden'>
                                    <img 
                                        className="w-full h-full object-cover object-center"
                                        src={course.img}
                                        alt={course.name} />
                                </figure>
                                <div className="flex mt-auto p-4 justify-between items-center">
                                    <div>
                                        <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                        <p className='font-bold text-xl'>{course.name}</p>
                                    </div>
                                    <div className="">
                                        <Link to={`/dcitinstitue/${course.Link}`}  className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

            <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16' >REGULAR</h3>
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6'>Course Programs</h2>
            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20' >
                {
                    regular.map((course, index) => (
                        <div key={index} className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                            <figure className='h-[370px] w-full overflow-hidden'>
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src={course.img}
                                    alt={course.name} />
                            </figure>
                            <div className="flex mt-auto p-4 justify-between items-center">
                                <div>
                                    <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                    <p className='font-bold text-xl'>{course.name}</p>
                                </div>
                                <div className="">
                                    <Link to={`/dcitinstitue/${course.link}`}  className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DcitInstitue;