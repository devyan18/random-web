import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

export default function UserPage () {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}
