import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Seo from "../Seo/Seo";

const images = [
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162773/95509579_1559161497566344_2865823276217663488_n_tzrgtn.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/95144289_1559161474233013_4836777136922558464_n_wbozme.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/95138098_1559161554233005_6414504205985251328_n_tm1ojv.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/95131081_1559161534233007_99255199561940992_n_me6hy3.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/78885369_1426002960882199_8759424816227811328_n_fkaipo.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/78951238_1426002767548885_8866425310703255552_n_mikomg.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/86465359_1493194870829674_5333746879324749824_n_pcqmnb.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/80076262_1426002820882213_7774657728005275648_n_la3a12.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/79080611_1426002837548878_8951374725821497344_n_u2yurf.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162772/78708262_1426003200882175_5639798921623502848_n_qvwhz2.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162771/455001840_1058180579426705_4302150858523762392_n_zcy6ca.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162771/78604050_1426003124215516_7735161058427404288_n_fqqjko.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162771/58549695_1236691486480015_5861121416769830912_n_zhthkl.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162771/279281161_2160999970715824_4566507618951721190_n_mrqxph.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162771/454743215_1058180272760069_4345947757837240745_n_iehfsf.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162770/74664586_1426002777548884_3653247071139397632_n_lx3fbo.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162770/78592143_1426002944215534_6910918463087181824_n_unq8so.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162770/454722480_1058180532760043_2258114273498030681_n_emkymx.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162770/454691800_1058179979426765_83425094340569068_n_jqcmpm.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162770/29665095_951538964995270_8820955008048931925_o_lmsnas.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162770/28423570_937397336409433_2981660995521968603_o_vfxgpn.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162769/58652567_1236691469813350_7630103293624057856_n_wz3gbj.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162769/279134209_2160999994049155_7795596767954483841_n_lvhp6g.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/463415993_2858569227625558_5463213658047298390_n_v0wyyv.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/23916751_886153034867197_1393276973355361569_o_xzkyi8.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/270186732_2069935839822238_8659921974098091625_n_ymde0y.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/24130241_886154638200370_5807741488917159191_o_wpxhwp.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/462877667_2855955124553635_3504860655262852873_n_unexhh.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/463124060_2858569230958891_8254845018105684980_n_xlguby.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/455082620_1058180246093405_7512154911685541303_n_ng1hg8.jpg",
    "https://res.cloudinary.com/duozmkqqj/image/upload/v1729162768/25587047_900540246761809_5986858508618106616_o_iodj5y.jpg"
]

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Seo title={`Gallery - DCIT LTD`} content='Beginner friendly page for learning React Helmet.'/>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className="shadow-2xl"
            >
                <h1 className='max-lg:text-3xl lg:text-5xl text-center font-bold pt-16 mb-6'>Gallery</h1>
                <Masonry className="">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt="gallery"
                            className="p-4"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;