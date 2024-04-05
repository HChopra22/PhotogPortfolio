import React from 'react';

import { 
  ImTwitter,
  ImLinkedin,
  ImInstagram,

} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24 '>
    <ul className='flex gap-x-4 ml-24'>
      <li>
        <a href='https://x.com'><ImTwitter/></a>
      </li>
      <li>
        <a href='https://linkedin.com'><ImLinkedin/></a>
      </li>
      <li>
        <a href='https://instagram.com'><ImInstagram/></a>
      </li>
    </ul>
  </div>;
};

export default Socials;
