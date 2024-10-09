import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/441245938_992494449328652_2381951351076118884_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG8jGLO_br5D1B1PydSjio-taTZFIYNFGK1pNkUhg0UYpURW2VmMj8hIXFwFc8p1QnN8UzZFFX4DOyUz22WDTCy&_nc_ohc=keNcmkMasPUQ7kNvgGIbfne&_nc_ht=scontent.fdac138-1.fna&_nc_gid=A2mEHMa1Lw3tiEmK6a0Cutw&oh=00_AYCSKccPpFvfFFdr5tchyyf_RlPIzqMJWr1qiTsMcsfnnQ&oe=670C3909",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/441199780_992494055995358_358245431325467771_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpBKZxq9qvefU7iuUrLoDYYyDskqFAtypjIOySoUC3KiK5MYtkrnod9ALcOvhtYyxJtAPW9XZsivDBzeaxib5S&_nc_ohc=CUlGWfFKJkEQ7kNvgHqSc_a&_nc_ht=scontent.fdac138-1.fna&_nc_gid=ALfQobP99q4nhT4bpBaG6qx&oh=00_AYAs0-JWJPYyyzXBeQKYdX1tzYB0YDOUX-IbQq0BmEX_uQ&oe=670C13B3",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/279134209_2160999994049155_7795596767954483841_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrengGrkLWD60OWihv92adLsOOoqF1DqUuw46ioXUOpZC-scxkyQrUVboMxw8MsKfFP9xeU9a9dqdXkY512ux-&_nc_ohc=6_Uti5IkNL4Q7kNvgFPP6H5&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AmoC0AF_OLLF_NbCCcyL8Rk&oh=00_AYAwUj3tuKO8y2wlM3Gug3Sb4Xwob8pWLcKsJPGjcp2tmw&oe=670C10C8",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/279281161_2160999970715824_4566507618951721190_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMrorq631rjS4gUONv_UJ0kzF_SXG0O-GTMX9JcbQ74VkAE8CaSE3tWy1FadGw7ebRV6Ulh2rcEm-gN9XgiMHP&_nc_ohc=HJIpeBmdxMoQ7kNvgGrrWX-&_nc_ht=scontent.fdac138-2.fna&_nc_gid=A4rw35QC8ipUYWx5kBqRKcm&oh=00_AYD7DDcIZRpBLTVJnoDg7OJxutP3T4Bwou9ylcWACiaD0g&oe=670C34F9",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/279095178_2159771784171976_3600261779268982817_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZ04g9rcYrRR8GTZu6FtvCtxXpWCLx0Vu3FelYIvHRWxPp6eJVaCPf0_sMN9cUJf3ZwtVYhq7J4bQI-GqZ2hKL&_nc_ohc=TF90NVxfSZYQ7kNvgEuCJU7&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AYF5-oC_Zcsmfrra9KqcAU6&oh=00_AYA2OZKxCoQyN4cOUoVDAN7saGvo7dwyKzgg3u0cKLTKkA&oe=670C105D",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/277783175_2141812612634560_7536158001797556914_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5zmcTh5l8CcaAxKvkAZ61YLmwFGhPVkFgubAUaE9WQYx63TKdPfWGf8TjBB7_R4Tbcli9ggtT-PGMi94aVfdF&_nc_ohc=aCi1wa1nrAAQ7kNvgFcxaXh&_nc_ht=scontent.fdac138-1.fna&_nc_gid=A2gpndeO-Gjw-Cw3GQvuh6b&oh=00_AYANgacu0aoSmMu5xyPXuRF1zreHESY3D-XvEAtV70DWrA&oe=670C2499",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/270186732_2069935839822238_8659921974098091625_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE12B6Ccuu2qVZbfUWr4-nIqbe8nmfkelSpt7yeZ-R6VLgdImcsxezmjyOM4TzOXaXSw2aG95anhUuIU5StwbNB&_nc_ohc=Co3HkYl4rs4Q7kNvgGl60NR&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AXhVDF3Kd1E8cNqEcsk5DFq&oh=00_AYCHW7QxPni1OoC-4ksjQrFknrKKKa4G8wT5ZTFRqQbUMw&oe=670C1073",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/258842832_2045251052290717_5912678631136750338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhJ3dS1dg9ETtdXLzTm54t3WixZ-1uBLLdaLFn7W4EsgnlZTvm0mqCpWHoy9zFV-1CpqvjsjMOFU9B5Qrfj4Bz&_nc_ohc=ATtwB3d9lFcQ7kNvgGACCXM&_nc_ht=scontent.fdac138-1.fna&_nc_gid=ASb8kTrvfgFtJlzIEeU-H2L&oh=00_AYA62LiEQ6NObViOYXHYqOdWkt_DsNULT3_4jAS9iTx1WQ&oe=670C3743",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/258842832_2045251052290717_5912678631136750338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhJ3dS1dg9ETtdXLzTm54t3WixZ-1uBLLdaLFn7W4EsgnlZTvm0mqCpWHoy9zFV-1CpqvjsjMOFU9B5Qrfj4Bz&_nc_ohc=ATtwB3d9lFcQ7kNvgGACCXM&_nc_ht=scontent.fdac138-1.fna&_nc_gid=ASb8kTrvfgFtJlzIEeU-H2L&oh=00_AYA62LiEQ6NObViOYXHYqOdWkt_DsNULT3_4jAS9iTx1WQ&oe=670C3743",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/95509579_1559161497566344_2865823276217663488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFrZIFsfTeQO4PMYUiUtGhUCz1eMXxJO0ELPV4xfEk7QYCAVwgXcXw1fxKjZW5apHZicfpLZcEYVmCOS-Dp0SKD&_nc_ohc=I_-R93L1XmoQ7kNvgE2pVz6&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Af_m-jxu7-nUd9edLEEJdWH&oh=00_AYAvjHQKQHAgcmL3UnbuYdgKfgRUAxJ1k3l93Qj43t1qIg&oe=672DC1FA",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/95131081_1559161534233007_99255199561940992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG7BT1s38tyhtGQeQo9oOPb0XQ9d5n_9GrRdD13mf_0ajoEHlgURK893duHkkY9yG2Y5GmJzAV9eHCI_hcL5nOy&_nc_ohc=kVXw2sV44IIQ7kNvgGSmQcw&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AUC9d-C-WqfHLGe3Zwsxz7z&oh=00_AYCduAyU5K0ZFwBIjuItSABT7wG3PNTD1mqfwXVL2G1y4Q&oe=672DD08D",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/94978920_1559161437566350_8112844737087537152_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH45fXNCy8t2qi00Tj7O7EfVpAMRFRUxOFWkAxEVFTE4cXn_IcgacygH49MGQeW3NLePrD0FtNamRVuXyelJKJ2&_nc_ohc=AplwBr8inEsQ7kNvgE3wuK9&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AvtIqDvDA2KLnzkdPFVzVhJ&oh=00_AYBaSYwKubfXu7-4z1p86nig6VzKaomWJiqDVrQiGRznqA&oe=672DC646",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/78708262_1426003200882175_5639798921623502848_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF2YUYqrIpen9ZayoVOB5eAV8fnHlAWwkZXx-ceUBbCRiuJ30i3CGebLWEC2QB7kjiG08KwqU23opF251faSwzo&_nc_ohc=D_PVzb6iwSQQ7kNvgEQB4Jg&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Ai-hCbBnhGjPpS4LBJg-g07&oh=00_AYCcmJDH--YyNGZEYbj2IhW0UF8Mm_X7VQkbzA1ecNYMcw&oe=672DAF94",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/78883023_1426003067548855_8335444314989527040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEC4tL_qoyj9n_WdhgUaE4zkEpM9-E9e66QSkz34T17rqeKvYT8_Yc4WJJ4sy9wtzHLNvCv09Qtr5-4wRUM9-RY&_nc_ohc=4bwk0TqKSrQQ7kNvgGzjG1M&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AUc0IykLMxXTCGxzIVbWS2v&oh=00_AYAOPu_AmLBZEWC6yOjU04Ktmt3MD5kBeOyViXD_5UYbdA&oe=672DADB9",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/78592143_1426002944215534_6910918463087181824_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFle6sroFTeSNduQxESiyLu-k_E_U8gw2L6T8T9TyDDYuyR4qUoqiH89TYAB-muXDL0PUy_xIVgQOSM-Rbb2Fj7&_nc_ohc=cEz-nZ0pc5UQ7kNvgHgrDWH&_nc_ht=scontent.fdac138-2.fna&_nc_gid=ATaEmywyxUihxNWf9l3MCyo&oh=00_AYDAGwyB0TRT0eIRWuWtJrXvLUSZwDF9h_yCM3aiyJBM0A&oe=672DB53E",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/79080611_1426002837548878_8951374725821497344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFydZ3lT5Cg5zVw8Y8FcZTg1aIogPVlBzPVoiiA9WUHM3z_9Vuixpp_bRdBj3t1FJMiJxhrrFsJIRLWmvqSZVsx&_nc_ohc=cEiV-rXX6Z8Q7kNvgETYrAs&_nc_ht=scontent.fdac138-1.fna&_nc_gid=Ak2NpuujQlSDEUKEV_Mxgqo&oh=00_AYCRVjrZo8SBJv-0F5AWmz5RShegibAv1I-f3jl-ji9rVg&oe=672DD162",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/80076262_1426002820882213_7774657728005275648_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFxpx5njjMS5e5mNU3fit-oDze0hu9xrSgPN7SG73GtKC_LBFAdsti6a6M5QgF0Z7spfi2uQ_7vzV3ur1J21hEe&_nc_ohc=jbOd8Q17JdEQ7kNvgEODKsg&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AkDia9nqFimZqEAxO3xAGFn&oh=00_AYD5iPa4D-d32L733hel6HDYyAPTpfMRDctVNktTI_ys4g&oe=672DC8C9",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/74664586_1426002777548884_3653247071139397632_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHvwdqrNBqrPQCG_c_zvuiAA3C-FtWGH2UDcL4W1YYfZScpmM6QILSWMpVS3DSFZiicsOsxbu3eZA8m_57O-oRD&_nc_ohc=rsUtv0ZRc0gQ7kNvgF6KJie&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AFqrwJrawkbtz-dWiKoQP-x&oh=00_AYDmsiBR5rOlyCYsxv91T-pNbexmlQoLxsJJL9nwFjhUDw&oe=672DB548"
]

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto">
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