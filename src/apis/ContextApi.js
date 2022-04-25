import { createContext, useState } from "react";
export let NetworkContext = createContext();
let NetworkProvider = ({ children }) => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [Email, setEmail] = useState("");

  let [Gender, setGender] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let userAuth = (uPhone, uPass) => {
    if (uPhone == "") {
      alert("Please enter your number");
    }
    if (uPass === "") {
      alert("Please enter your password");
    }
    console.log(uPhone);
    console.log(uPass);

    if (phone == uPhone && password == uPass) {
      setIsLoggedIn(true);
    }
  };
  let registerAuth = (uFName, uLName, uPhone, uPass, uGender, uEmail) => {
    setFname(uFName);
    setLname(uLName);
    setPhone(uPhone);
    setPassword(uPass);
    setEmail(uEmail);
    setGender(uGender);
  };
  let handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <NetworkContext.Provider
      value={{
        registerAuth: registerAuth,
        userAuth: userAuth,
        isLoggedIn: isLoggedIn,
        fname: fname,
        phone: phone,
        handleLogout: handleLogout,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};
export default NetworkProvider;
