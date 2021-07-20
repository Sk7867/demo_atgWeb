import Postmenu from './Postmenu';

const postmenus = [
  {
    id: 1,
    text: 'Posts',
    count: '(368)',
  },
  {
    id: 2,
    text: 'All Posts',
    count: '(32)',
  },
  {
    id: 3,
    text: 'Article',
  },
  {
    id: 4,
    text: 'Event',
  },
  {
    id: 5,
    text: 'Education',
  },
  {
    id: 6,
    text: 'Job',
  },
];

const Postmenus = () => {
  return (
    <>
      {postmenus.map((postmenu) => (
        <Postmenu key={postmenus.id} postmenu={postmenu} />
      ))}
    </>
  );
};

export default Postmenus;
