import { NavLink } from 'react-router-dom';

export default function NavbarLink ({ link, icon: Icon }) {
  return (
    <li key={link.to}>
      <NavLink
        className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
        to={link.to}
      >
        <span>
          <Icon />
          <span>{link.text}</span>
        </span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'navlink-icon active' : 'navlink-icon')}
        to={link.to}>
          <Icon />
      </NavLink>
    </li>
  );
}
