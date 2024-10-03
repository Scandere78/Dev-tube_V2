import { Menu } from "lucide-react"
import devtube from "../assets/devtube.png"

export function PageHeader () {
    return <div className="flex gap-10 lg:gap-20 justify-between">
        <div className="flex gap-4 items-center flex-shrink-0">
            <button>
                <Menu />
            </button>
            <a href="/">
                <img src={devtube} className="h-6" alt="Logo de DevTube" />
            </a>
        </div>
        <div></div>
        <div></div>
    </div>
}