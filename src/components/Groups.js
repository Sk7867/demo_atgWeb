import group_1 from '../img/group_1.png';
import group_2 from '../img/group_2.png';
import group_3 from '../img/group_3.png';
import group_4 from '../img/group_4.png';
import Group from './Group';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';

const groups = [
  {
    id: 1,
    name: 'Leisure',
    image: group_1,
  },
  {
    id: 2,
    name: 'Activism',
    image: group_2,
  },
  {
    id: 3,
    name: 'MBA',
    image: group_3,
  },
  {
    id: 4,
    name: 'Philosophy',
    image: group_4,
  },
];

const Groups = () => {
  return (
    <>
      <div className='groups_heading'>
        <ThumbUpAltTwoToneIcon className='thumbs_icon' />
        <h4>REcommended Groups</h4>
      </div>
      <div className='groups'>
        {groups.map((group) => (
          <Group key={groups.id} group={group} />
        ))}
      </div>
      <p className='seemore_btn'>See More...</p>
    </>
  );
};

export default Groups;
