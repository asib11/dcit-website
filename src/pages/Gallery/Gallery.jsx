import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
]

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className="shadow-2xl"
            >
                <h1 className='text-3xl text-center font-bold pt-16 mb-6'>Gallery</h1>
                <Masonry className="">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt=""
                            className="p-4"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;