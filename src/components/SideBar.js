import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CreateIcon from '@material-ui/icons/Create';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Groups from './Groups';

const SideBar = ({ join, isjoin }) => {
  return (
    <div className='sidebar_wrapper'>
      <div className='location_input'>
        <input type='text' id='location' placeholder='Noida, India' />
        <span className='location_icon'>
          <LocationOnOutlinedIcon />
        </span>
        <span className='write_loc_icon'>
          <CreateIcon />
        </span>
      </div>
      <div className='disclaimer'>
        <ErrorOutlineIcon className='error_icon' />
        <p className='text'>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      {join === 'join' ? (
        ''
      ) : (
        <div className='groups_recommends'>
          <Groups />
        </div>
      )}
    </div>
  );
};

export default SideBar;
