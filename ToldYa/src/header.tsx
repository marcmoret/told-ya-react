export default function Header(name: { name: string; link: string, age: number }) {

  const handleClick = () => {
    window.location.href = name.link;
  };

  return (
    <header>
      <h1>Told Ya!</h1>
      <h4>Solve all your arguments right here!</h4>
      <nav className="nav">
       <a href="#" onClick={handleClick}>{name.name}</a>
      </nav>
      <hr />
    </header>
  )
}