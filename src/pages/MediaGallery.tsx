import { FC } from "react"
import PageIntro from "../components/PageIntro"
import SectionWrapper from "../components/SectionWrapper"

interface IMediaGallery {}

const MediaGallery: FC<IMediaGallery> = () => {
    return (
        <div className="">
            <PageIntro name="Media & Gallery" />
            <SectionWrapper>

            </SectionWrapper>
        </div>
    )
}

export default MediaGallery