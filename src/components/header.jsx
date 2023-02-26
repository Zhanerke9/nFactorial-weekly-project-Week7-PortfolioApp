import "./index.css";
import { useRef } from "react";

export default function Header() {
    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  return (
    <header className="headerAll">
      <p className="header-title">Zhanerke</p>
      <div className="HeaderNav">
        <button className="HeaderButtons" onClick={handleClick}>About</button>
        <button className="HeaderButtons" onClick={handleClick}>Experience</button>
        <button className="HeaderButtons" onClick={handleClick}>Projects</button>
        <button className="HeaderButtons" onClick={handleClick}>Contacts</button>
      </div>
    </header>
  );
}
