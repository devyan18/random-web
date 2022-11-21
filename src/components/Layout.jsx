import { useUser } from '../providers/UserProvider';
import Navbar from './Navbar';

export default function Layout ({ children }) {
  const user = useUser();

  return (
    <main className='layout'>
      <Navbar authData={user} />
      <div className='layout-content'>
        {children}
      </div>
    </main>
  );
}
