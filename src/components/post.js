import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareIcon from '@material-ui/icons/Share';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

// import TodayIcon from '@material-ui/icons/Today';
// import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const Post = ({ post }) => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);
  return (
    <div className='post_container'>
      <div className='post_wrapper'>
        <div className='post_header_img'>
          <img src={post.header_img} alt='' className='img_small' />
          <img src={post.headerB_img} alt='' className='img_big' />
        </div>
        <div className='post_content'>
          <p className='post_type'>{post.post_type}</p>
          <div className='head_more'>
            <h1 className='post_heading'>{post.post_title}</h1>
            <MoreHorizIcon className='dot_icon' {...buttonProps} />
            <div className={isOpen ? 'visible' : ''} role='menu'>
              <a {...itemProps[0]}>Edit</a>
              <a {...itemProps[1]}>Report</a>
              <a {...itemProps[2]}>Option 3</a>
            </div>
          </div>
          <p className='post_summary'>{post.post_summary}</p>
        </div>
        <div className='status_time_location'>
          <div className='status'>
            {post.status_icon}
            {post.status}
          </div>
          <div className='time'>
            {post.date_icon}
            {post.date}
          </div>
          <div className='location'>{post.location}</div>
        </div>
        <div className='optional_btn'>
          <button className={post.extra_btn_style}>{post.extra_btn}</button>
        </div>
        <div className='user'>
          <div className='user_info'>
            <div className='user_pic'>
              <img src={post.user_pic} alt='' />
            </div>
            <div className='name_views'>
              <h3 className='user_name'>{post.user_name}</h3>
              <p className='user_views'>{post.user_views}</p>
            </div>
          </div>
          <button className='share_btn'>
            <ShareIcon className='share_icon' />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
