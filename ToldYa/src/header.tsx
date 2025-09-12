function Header(name: { name: string; link: string, age: number }) {

  const handleClick = () => {
    window.location.href = name.link;
  };

  return (
    <header>
      <h1>Told Ya!</h1>
      <nav className="nav">
       <a href="#" onClick={handleClick}>{name.name}</a>
      </nav>
      <hr />
    </header>
  )
}
export default Header