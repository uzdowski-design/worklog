import { Button } from './ui/button';
import { Timer } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Timer size={24} />
        <h1>WorkLog</h1>
      </div>
      <Button>Logout</Button>
    </nav>
  );
};
export default Navbar;
