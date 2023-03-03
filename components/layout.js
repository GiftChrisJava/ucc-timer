import Heading from "./heading";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <Heading />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
