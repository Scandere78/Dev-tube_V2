import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import devtube from "../assets/devtube.png"
import { Button } from "../components/Button"

export function PageHeader () {
    return <div className="flex gap-10 lg:gap-20 justify-betweenpt-2 mb-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={devtube} className="h-6" alt="Logo de DevTube" />
            </a>
        </div>
        <form className="flex gap-4 flex-grow justify-center">
            <div className="flex flex-grow max-w-[600px]">
                <input type="search" placeholder="Search"
                className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 w-full focus:border-blue-500"/>
                <Button>
                    <Search />
                </Button>
            </div>
            <Button size="icon" className="flex-shrink-0">
                <Mic />
            </Button>
        </form>
        <div className="flex flex-shrink-0 md:gap-2">
            <Button type="button" size="icon" variant="ghost">
                <Upload />
            </Button>
            <Button size="icon" variant="ghost">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    </div>
}

test je ne c'est pas si sa marche