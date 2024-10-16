import Navbar from './components/Navbar/Navbar';
import PlansSection from './components/PlansSection/PlansSection';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <PlansSection />
      </main>
      <footer>Cenas do footer</footer>
    </>
  );
}

export default Layout;
