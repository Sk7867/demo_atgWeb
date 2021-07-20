import PostmenusItems from './Postmenuitems';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Join from './Join_comp';
import Leave from './Leave_comp';

const Header2 = ({ buttonPopup, setButtonPopup, join, isJoin }) => {
  return (
    <>
      <div className='post_menu'>
        <PostmenusItems />
        <div className='post_menu_btns'>
          <button className='filter'>
            <p>Filter:All</p>
            <ArrowDropDownIcon className='arrow_drop' />
          </button>
          <div className='write_post'>
            <p>Write a Post</p>
            <ArrowDropDownIcon className='arrow_drop' />
          </div>
          <button
            className={join === 'leave' ? '' : 'join_btn'}
            onClick={() => {
              setButtonPopup(true);
              isJoin('leave');
            }}
          >
            {join === 'leave' ? <Leave /> : <Join />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header2;
