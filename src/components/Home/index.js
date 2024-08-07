// Write your code here
import './index.css'
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  onChangeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }
  render() {
    const {isLogin} = this.state

    let messageEle
    let btnEle

    if (isLogin) {
      messageEle = <Message content="Welcome User" />
      btnEle = <Login changeStatus={this.changeStatus} />
    } else {
      messageEle = <Message content="Please Login" />
      btnEle = <Logout changeStatus={this.changeStatus} />
    }
    return (
      <div className="login-bg">
        <div className="login-card">
          {messageEle}
          {btnEle}
        </div>
      </div>
    )
  }
}

export default Home
