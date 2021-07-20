import Post from './post';
import TodayIcon from '@material-ui/icons/Today';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Post_1 from '../img/post_1.png';
import Post_2 from '../img/post_2.png';
import Post_3 from '../img/post_3.png';
import PostB_1 from '../img/post_big_1.png';
import PostB_2 from '../img/post_big_2.png';
import PostB_3 from '../img/post_big_3.png';
import User_1 from '../img/user_1.png';
import User_2 from '../img/user_2.png';
import User_3 from '../img/user_3.png';
import User_4 from '../img/user_4.png';

const posts = [
  {
    id: 1,
    header_img: Post_1,
    headerB_img: PostB_1,
    post_type: '✍️ Article',
    post_title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    post_summary: 'I’ve worked in UX for the better part of a decade. F..',
    user_name: 'Sarthak Kamra',
    user_pic: User_1,
    user_views: '1.4k views',
  },
  {
    id: 2,
    header_img: Post_2,
    headerB_img: PostB_2,
    post_type: '🔬 Education',
    post_title:
      'Tax Benefits for Investment under National Pension Scheme launched by Government',
    post_summary: 'I’ve worked in UX for the better part of a decade. F..',
    user_name: 'Sarah West',
    user_pic: User_2,
    user_views: '4.8k views',
  },
  {
    id: 3,
    header_img: Post_3,
    headerB_img: PostB_3,
    post_type: '📅 Meetup',
    post_title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    date_icon: <TodayIcon className='date_icon' />,
    date: 'Fri, 12 Oct, 2018',
    location: 'Ahmedabad, India',
    user_name: 'Ronal Jones',
    user_pic: User_3,
    user_views: '800 views',
    extra_btn: 'Visit Website',
    extra_btn_style: 'visit_web',
  },
  {
    id: 4,
    post_type: '💼 Job',
    post_title: 'Software Developer - II',
    status_icon: <WorkOutlineIcon className='status_icon' />,
    status: 'Innovaccer Analytics Private Ltd.',
    location: 'Noida, India',
    user_name: 'Joseph Gray',
    user_pic: User_4,
    user_views: '1.7k views',
    extra_btn: 'Apply on Timesjobs',
    extra_btn_style: 'apply_time',
  },
];

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
        <Post key={posts.id} post={post} />
      ))}
    </>
  );
};

export default Posts;
