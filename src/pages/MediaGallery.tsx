import { FC } from "react"
import PageIntro from "../components/PageIntro"
import SectionWrapper from "../components/SectionWrapper"
import media from '../data/media&gallery.json'

interface IMediaGallery {}

const MediaGallery: FC<IMediaGallery> = () => {
    return (
        <div className="">
            <PageIntro name="Media & Gallery" />
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
                    {media.map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center group overflow-hidden">
                            <img src={item.photo} alt={item.event} className="w-full h-64 z-20 object-cover scale-100 group-hover:scale-110 duration-300" />
                            <div className="absolute flex md:hidden z-30 inset-0 duration-300 group-hover:flex items-center justify-center bg-darkBluelight">
                                <h3 className="text-white text-2xl font-bold my-auto text-center">{item.event}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    )
}

export default MediaGallery