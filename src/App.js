import BlogContextProvider from "./context/BlogContext";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Archive from "./components/archive/Archive";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BlogContextProvider>
      <section>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </BlogContextProvider>
  );
}
