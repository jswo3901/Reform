import React from 'react';
import { Redirect } from 'react-router-dom';



class MyPage extends React.Component {



  render() {
    const logged = true;
    return (
      <div>
        {
          !logged && <Redirect to ="/login/" />
        }
        마이페이지
      </div>

    );
  }

}

export default MyPage;
