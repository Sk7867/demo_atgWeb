import { useState } from 'react';

const Group = ({ group }) => {
  const [btnColor, setbtncolor] = useState(false);

  function setbtnColor() {
    setbtncolor(!btnColor);
  }

  return (
    <div className='group_container'>
      <div className='group_icon'>
        <img src={group.image} alt='' />
      </div>
      <p className='group_name'>{group.name}</p>
      <button onClick={setbtnColor} className={btnColor ? 'set' : ''}>
        Follow
      </button>
    </div>
  );
};

export default Group;
