import { Navbar } from '../components/navbar/navbar';

export const RootLayout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {children}
      </main>
    </div>
    );
};