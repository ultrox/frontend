import Nav from "./Nav";

const Header = props => {
  return (
    <div>
      <div className="bar">
        <a href="">Ajando 360</a>
        <Nav />
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
