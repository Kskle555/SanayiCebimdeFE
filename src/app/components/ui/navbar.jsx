// ui/Navbar.jsx
import { Button } from "./Button";

export const Navbar = ({children, className,buttonLabels}) => {
  return (
    <header className={`${className}`}>
      <h1 className="text-2xl font-bold">{children}</h1>
      <nav className="space-x-4">
      {buttonLabels.map((label, index) => (
        <Button key={index} variant="ghost" size="lg" className="text-gray-900">
          {label}
        </Button>
      ))}
      </nav>
    </header>
  );
}
