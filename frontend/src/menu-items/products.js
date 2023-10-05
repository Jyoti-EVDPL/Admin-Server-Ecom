// assets
import { DashboardOutlined, ShopOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  ShopOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const products = {
  id: 'group-dashboard',
  title: 'Products',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Products',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.ShopOutlined,
      breadcrumbs: false
    }
  ]
};

export default products;
