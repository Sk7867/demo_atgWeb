import logo from '../img/logo.png';
import { Search } from '@material-ui/icons/';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import rectangle from '../img/Rectangle.svg';
import circle from '../img/Oval.svg';
import triangle from '../img/Path.svg';
import User_4 from '../img/user_4.png';

const Header = ({ join, isJoin }) => {
  return (
    <header className='header'>
      <div className='header_left'>
        <img src={logo} className='logo_img' alt='Company Logo' />
      </div>
      <div className='header_center'>
        <div className='searchbar'>
          <Search className='search_icon' />
          <input
            placeholder='Search for your favorite groups in ATG'
            className='search_input'
          />
        </div>
      </div>
      <div className='header_right'>
        <div className='misc_icons'>
          <img src={rectangle} className='square' alt='rectangle' />
          <img src={circle} className='circle' alt='circle' />
          <img src={triangle} className='invert_tri' alt='triangle' />
        </div>
        <div className='create_drop'>
          {join === 'leave' ? (
            <div className='logged_in'>
              <img src={User_4} alt='' className='logged_pic' />
              <p className='logged_name'>Siddharth Goyal</p>
            </div>
          ) : (
            <p className='create_text'>
              Create account. <span className='free'>It’s free!</span>
            </p>
          )}
          <ArrowDropDownIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
