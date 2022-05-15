import { faHome, faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
import { NavButtons } from './NavButtons'

export const Sidebar = () => {
  return (
    <div className="w-full h-full">
      <nav className="pt-8 pl-4 border-b-2">
        <NavButtons path="/" icon={faHome} name="Home" />
        <NavButtons path="/search" icon={faSearch} name="Search" />
        <NavButtons path="/library" icon={faBook} name="My library" />
      </nav>
    </div>
  )
}
