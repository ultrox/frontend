import Header from "./Header";
import Meta from "./Meta";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <p>I'll be on every page</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
