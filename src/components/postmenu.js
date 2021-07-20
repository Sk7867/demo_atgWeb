const postmenu = ({ postmenu }) => {
  return (
    <p className='post_menu_item'>
      {postmenu.text}
      {postmenu.count}
    </p>
  );
};

export default postmenu;
