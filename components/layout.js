import Heading from "./heading";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <Heading />
      {children}
    </div>
  );
}

export default Layout;
