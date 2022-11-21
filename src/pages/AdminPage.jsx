import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AdminPage () {
  return (
    <Layout>
      <h1>Admin page</h1>
      <Outlet/>
    </Layout>
  );
}
