import { Logo } from '../assets/images/images';
import Button from './Button';

const Navbar = () => {
  const handleSignUp = async () => {
    console.log('Sign up button clicked');
    try {
      const response = await fetch(
        'http://localhost:4000/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
          }),
        }
      );

      const data = await response.json();
      console.log('Signup response:', data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <nav className='w-screen p-8 bg-whiteColor lg:px-24 lg:py-8 lg:flex lg:items-center lg:justify-between'>
      <div className='shrink-0 w-40 cursor-pointer'>
        <img
          className='w-full h-full'
          src={Logo}
          alt='Logo'
        />
      </div>

      <div className='hidden lg:flex items-center justify-between'>
        <Button
          title='Sign up'
          titleClassName='hover:text-yellowColor'
          onClick={handleSignUp}
        />

        <Button
          title='Log in'
          mainClassName='bg-blueColor hover:bg-yellowColor'
          titleClassName='text-whiteColor'
        />
      </div>
    </nav>
  );
};

export default Navbar;