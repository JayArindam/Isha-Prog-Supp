import Image from 'next/image';
import logo from '../../public/logo.png'


const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <Image src={logo} alt="Logo" width={70} height={70} />
    </nav>
  );
};

export default Nav;
