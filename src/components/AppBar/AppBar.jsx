import Navigation from "../Navigation/Navigation";

export default function AppBar({ children }) {
  return (
    <header>
      <Navigation />
      {children}
    </header>
  );
}
