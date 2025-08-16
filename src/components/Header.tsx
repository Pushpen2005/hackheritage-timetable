import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">Acadence</span>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
