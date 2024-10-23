import DiscountForm from "./DiscountForm";

const Discount = () => {
    return (
        <>
            <div className='fixed top-[60%] transform -translate-y-1/2'>
                <button className="px-4 py-2 bg-red-500 rounded-lg ml-4 hover:bg-red-700 z-10 text-white font-bold -rotate-90 origin-left uppercase" onClick={() => document.getElementById('my_modal_3').showModal()}>get Discount</button>
                <dialog id="my_modal_3" className="p-6 rounded-md">
                    <div className="p-6">
                        <div className='mb-4'>
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost hover:bg-red-500 hover:text-white absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                        <h2 className='text-xl font-bold mb-2'>To know more about the offers, please fill up the form given below. Our representative will get back to you soon.</h2>
                        <DiscountForm />
                        <p className="py-4 text-[14px]"><span className='font-bold'>If Necessary: </span> +8801710-822207,+8801872-884988 or support@dcitltd.com.bd, contact@dcitltd.com.bd</p>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default Discount;