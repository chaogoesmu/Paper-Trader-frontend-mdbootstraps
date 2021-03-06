
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  updateUsername = (e) => {
    let username = e.target.value
    console.log(username)
    this.setState ({
      username: username
    })
  }

  updatePassword = (e) => {
    let password = e.target.value
    console.log(password)
    this.setState ({
      password: password
    })
  }

  render() {
    return (
      <div>
        <a onClick={this.toggle} id="modal-title" className="modal-title">log in</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>

            <h2 id="login-modal" className="mb-5">Form login</h2>
            <form id="login-modal" onSubmit={(event) => {
              this.props.logInUser(event, this.state.username, this.state.password)
              this.toggle()
            }}>
                <p className="h5 text-center mb-4">Sign in</p>
                <Input label="Username" icon="user" group type="text" validate error="wrong" success="right" required onChange={this.updateUsername}/>
                <Input label="Your password" icon="lock" group type="password" validate required onChange={this.updatePassword}/>
                <div className="text-center">
                    <Button type="submit" color="deep-orange">Login</Button>
                </div>
            </form>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
