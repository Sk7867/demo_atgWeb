import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Header2 from './header2';
import Posts from './posts';
import Sidebar from './SideBar';
import CreateIcon from '@material-ui/icons/Create';
import Popup from './popup';
import { useState } from 'react';

const Main = ({ join, isJoin }) => {
  const grp_name = 'Computer Engineering';
  const grp_members = 'Computer Engineers';
  const grp_count = '142,765';
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <main>
      <section className='hero'>
        <div className='action_btns'>
          <ArrowBackIcon className='arrow_back' />
          <button
            onClick={() => {
              setButtonPopup(true);
              isJoin('leave');
            }}
            className='btn_join'
          >
            {join === 'leave' ? 'Leave Group' : 'Join Group'}
          </button>
        </div>
        <div className='name_count'>
          <h1 className='heading'>{grp_name}</h1>
          <p className='followers_count'>
            {grp_count}
            {grp_members} follow this
          </p>
        </div>
        <Popup
          buttonPopup={buttonPopup}
          setButtonPopup={setButtonPopup}
          join={join}
          isJoin={isJoin}
        />
      </section>
      <section className='wrapper'>
        <Header2
          buttonPopup={buttonPopup}
          setButtonPopup={setButtonPopup}
          join={join}
          isJoin={isJoin}
        />
        <section className='wrapper_2'>
          <section className='posts'>
            <Posts />
          </section>
          <section className='sidebar'>
            <Sidebar join={join} isJoin={isJoin} />
          </section>
        </section>
      </section>
      <button className='create_btn'>
        <CreateIcon />
      </button>
    </main>
  );
};

export default Main;
