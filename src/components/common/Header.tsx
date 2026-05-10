import Button from "../ui/Button"
const Header = () => {
  return (
    <nav className=" header container mx-auto flex items-center justify-between px-8 py-4 ">
      <img src="src/assets/image/logo.png" alt="Logo" className="h-20" />

      <ul className="hidden md:flex gap-13">
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Impact</li>
        <li>News</li>
        <li>Contact</li>
      </ul>

      <Button text="Donate" className="btn" />
    </nav>
  )
}

export default Header