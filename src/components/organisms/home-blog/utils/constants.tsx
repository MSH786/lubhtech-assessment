import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../../utilities/responsive';
import EducationIcon from '../../../atoms/svgs/education';
import MedicalIcon from '../../../atoms/svgs/medical';
import MoreIcon from '../../../atoms/svgs/more';
import PendamicIcon from '../../../atoms/svgs/pendamic';

export const categories = [
  {
    id: 1,
    title: 'All',
    icon: (
      <MoreIcon
        width={widthPercentageToDP(8)}
        height={heightPercentageToDP(7)}
      />
    ),
    color: '#ebf1ff',
  },
  {
    id: 2,
    title: 'Medical',
    icon: (
      <MedicalIcon
        width={widthPercentageToDP(7)}
        height={heightPercentageToDP(7)}
      />
    ),
    color: '#eafff9',
  },
  {
    id: 3,
    title: 'Education',
    icon: (
      <EducationIcon
        width={widthPercentageToDP(8)}
        height={heightPercentageToDP(7)}
      />
    ),
    color: '#fff2ed',
  },
  {
    id: 4,
    title: 'Pendamic',
    icon: (
      <PendamicIcon
        width={widthPercentageToDP(8)}
        height={heightPercentageToDP(7)}
      />
    ),
    color: '#ffe9ef',
  },
];

export const collection = {
  BLOG: 'blog',
  USER: 'User',
  USER_PROFILE: 'user-profile',
};
