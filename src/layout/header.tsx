import { CameraIcon, HomeIcon, SearchIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
    { key: "search", icon: SearchIcon, link: "/search" },
    { key: "home", icon: HomeIcon, link: "/" },
    { key: "camera", icon: CameraIcon, link: "/upload", hiddenOnMobile: true }
];
interface Props {
    isUpload?: boolean;
}
export const Header = ({isUpload}: Props) => {
    const location = useLocation();
    return (
        <div className={`flex justify-center items-center gap-20 pt-5 fixed pb-3 top-3 rounded-[20px] z-10 bg-black ${isUpload ? "lg:max-w-[calc(100vw-24px)]" : "lg:max-w-[calc(100vw-650px)]" } max-w-[calc(100vw-24px)] w-full`}>
            {NAV_ITEMS.map(({ key, icon: Icon, link, hiddenOnMobile }) => (
                <Link className={`${hiddenOnMobile && "md:block hidden"}`} key={key} to={link || "#"}>
                    <Icon className={`w-6 h-6 cursor-pointer ${location?.pathname === link ? "text-white" : "text-gray-500"}`} />
                </Link>
            ))}
        </div>
    )
}
