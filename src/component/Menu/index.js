import React from 'react';
import { Link } from 'react-scroll';
import { Image, Header, Menu } from 'semantic-ui-react';

import { Home } from '../Home';
import { AboutMe } from '../AboutMe';
import { Resume } from '../Resume';
import { Portfolio } from '../Portfolio';
import Contact from '../Contact';

const divStyle = {
  textAlign: 'center',
  width: '11%',
  borderRight: '15px solid whitesmoke'
};

const MenuStyle = {
  fontSize: '20px',
  borderRightColor: 'transparent'
};

const names = [Home, AboutMe, Resume, Portfolio, Contact];
const links = names.map(name =>
  <Menu.Item style={{ padding: '0px' }} key={name.name}>
    <Link activeClass="active" className="item" to={name.name} spy={true} smooth={true} offset={-15}>
      {name.name.toUpperCase()}
    </Link>
  </Menu.Item>
);

// const names2 = {
//   HOME: Home, 
//   ABOUTME: AboutMe, 
//   RESUME: Resume , 
//   PORTFOLIO: Portfolio, 
//   CONTACT: Contact
// };
// const links2 = () => {
//     let results = [];
//     for(let key in names2) {
//       results.push(
//       <Menu.Item style={{ padding: '0px' }} key={key}>
//         <Link activeClass="active" className="item" to={names2[key].name} spy={true} smooth={true} offset={-15}>
//           {key}
//         </Link>
//       </Menu.Item>
//       )
//     }
//     return results;
// }

class MenuItems extends React.Component {
  //state = { activeItem: 'active Item' }

  handleItemClick = (e) => {
    // handle when home menu is clicked
    console.log(e.target.text + ' is clicked');
    //this.setState({ activeItem: name })       
  }

  render() {
    // const offset = -15;
    // const { activeItem } = this.state;

    return (
      <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
        <div style={{ marginTop: '30px' }}>
          <Image src='./images/ProfilePic.jpg' alt='profile pic' size='tiny' centered />
          <Header as='h2' >
            Charles<br></br>Choi
          </Header>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Menu pointing secondary vertical fluid style={MenuStyle}>
            {links}
          </Menu>
        </div>
      </div>
    );
  };
}

export default MenuItems;
