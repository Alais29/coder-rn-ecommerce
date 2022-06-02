import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth";

import { styles } from "./styles";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(logout())} style={styles.btn}>
      <Text style={styles.text}>LogOut</Text>
    </TouchableOpacity>
  );
};

export default LogOutBtn;
