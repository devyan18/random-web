import { BookIcon, BookMarkIcon, HomeIcon, UserIcon } from '../icons';
import NavbarLink from './NavbarLink';

export default function Navbar ({ authData, onLogout }) {
  const adminLinks = [
    {
      to: '/admin/dashboard',
      text: 'Inicio',
      icon: HomeIcon
    },
    {
      to: '/admin/study-cycles',
      text: 'Ciclos lectivos',
      icon: BookMarkIcon
    },
    {
      to: '/admin/careers',
      text: 'Carreras',
      icon: BookIcon
    }
  ];

  return (
    <div className="navbar">
      <ul>
        {authData?.isAdmin
          ? (
              adminLinks.map((link, index) => (
            <NavbarLink key={index} link={link} icon={link.icon} />
              ))
            )
          : (
          <>
            <NavbarLink
              link={{ to: '/user/dashboard', text: 'Inicio' }}
              icon={HomeIcon}
            />
          </>
            )}
        <NavbarLink
          link={{
            to: `/${authData?.isAdmin ? 'admin' : 'user'}/profile`,
            text: 'Perfil'
          }}
          icon={UserIcon}
        />
      </ul>
    </div>
  );
}
