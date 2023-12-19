function Header() {
  const navBar = [
    { id: 1, item: "Home" },
    { id: 2, item: "About" },
    { id: 3, item: "Contact" },
  ];
  const listNavBar = navBar.map((items) => (
    <li key={items.id}>{items.item}</li>
  ));
  return (
    <header>
      <h1>My website</h1>
      <h3>I am Carmela and this is my new website</h3>
      <ul>{listNavBar}</ul>
    </header>
  );
}

export default Header;
