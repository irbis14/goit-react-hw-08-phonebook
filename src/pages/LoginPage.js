import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "./LoginPage.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Log in</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            E-mail
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <div className={styles.button__container}>
            <button className={styles.button} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
