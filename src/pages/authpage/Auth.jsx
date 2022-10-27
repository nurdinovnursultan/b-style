import { useState } from "react";
import { register } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

function Auth() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
  });

  const postUser = (userInfo) => {
    dispatch(register(userInfo));
  };

  return (
    <div>
      <input
        placeholder="username"
        type="text"
        value={inputValues.userName}
        onChange={(e) =>
          setInputValues({ ...inputValues, username: e.target.value })
        }
      />{" "}
      <br />
      <input
        placeholder="email"
        type="text"
        value={inputValues.email}
        onChange={(e) =>
          setInputValues({ ...inputValues, email: e.target.value })
        }
      />
      <br />
      <input
        placeholder="first name"
        type="text"
        value={inputValues.firstName}
        onChange={(e) =>
          setInputValues({ ...inputValues, first_name: e.target.value })
        }
      />
      <br />
      <input
        placeholder="last name"
        type="text"
        value={inputValues.lastName}
        onChange={(e) =>
          setInputValues({ ...inputValues, last_name: e.target.value })
        }
      />
      <br />
      <input
        placeholder="phone"
        type="text"
        value={inputValues.phone}
        onChange={(e) =>
          setInputValues({ ...inputValues, phone: e.target.value })
        }
      />
      <br />
      <input
        placeholder="password"
        type="text"
        value={inputValues.password}
        onChange={(e) =>
          setInputValues({ ...inputValues, password: e.target.value })
        }
      />
      <br />
      <button onClick={() => postUser(inputValues)}>Создать</button>
    </div>
  );
}

export default Auth;
