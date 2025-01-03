import { FC, ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add any admin-specific navigation or layout elements here */}
      {children}
    </div>
  );
};

export default AdminLayout; 