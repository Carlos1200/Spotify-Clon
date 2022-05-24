import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  path: string
  icon: IconProp
  name: string
}

export const NavButtons = ({ path, icon, name }: Props) => {
  const router = useRouter()
  return (
    <div className="my-4">
      <Link href={path} passHref>
        <div
          className={`${
            router.pathname == path ? 'text-white' : 'text-gray-400'
          } font-bold flex items-center cursor-pointer hover:text-white transition-colors duration-200`}
        >
          <FontAwesomeIcon icon={icon} className="mr-4" />
          <p>{name}</p>
        </div>
      </Link>
    </div>
  )
}
