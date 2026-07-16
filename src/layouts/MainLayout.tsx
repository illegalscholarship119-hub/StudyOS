type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}

export default MainLayout;