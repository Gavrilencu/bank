import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "./img/logo.png";
import menu from "./img/menu.png";
import intro from "./img/intro.png";
import card from "./img/card.png";
import exchange from "./img/excange.png";
import file from "./img/file.png";
import atm from "./img/atm.png";
import phone from "./img/phone.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <View style={log.login}>
      <View style={log.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image style={log.menu} source={menu} resizeMode="contain" />
        </TouchableOpacity>
        <Image style={log.logo} source={logo} resizeMode="contain" />
        <Text>RO</Text>
      </View>
      <View style={log.intro}>
        <TextInput
          style={log.input}
          value={username}
          placeholder="ID Utilizator"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={log.input}
          value={password}
          placeholder="Parola"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={[log.checkboxContainer, log.firstContainer]}
          onPress={toggleCheckbox}
        >
          <View style={[log.checkbox, isChecked ? log.checked : null]} />
          <Text style={log.label}>Acces rapid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={log.checkboxContainer}
          onPress={toggleCheckbox}
        >
          <View style={[log.checkbox, isChecked ? log.checked : null]} />
          <Text style={log.label}>
            Sunt de acord cu politica de confidentialitate prestata de OTP
            Internet & Mobile Banking
          </Text>
        </TouchableOpacity>
      </View>

      {isMenuOpen && (
        <TouchableOpacity
          style={log.overlay} // Adaugă un TouchableOpacity pentru a manipula închiderea meniului
          activeOpacity={1}
          onPress={toggleMenu}
        >
          <View style={log.menuContent}>
            {/* Aici adăugați elementele meniului sau orice conținut dorit pentru meniu */}
            <Image style={log.openMenu} source={logo} resizeMode="contain" />
            <View style={[log.block, log.first]}>
              <Image style={log.logoMenu} source={intro} resizeMode="contain" />
              <Text style={[log.list, log.primeList]} onPress={toggleMenu}>
                OTP Mobile Banking
              </Text>
            </View>
            <View style={log.block}>
              <Image style={log.logoMenu} source={card} resizeMode="contain" />
              <Text style={log.list} onPress={toggleMenu}>
                3D Secure Biometrie
              </Text>
            </View>
            <View style={log.block}>
              <Image
                style={log.logoMenu}
                source={exchange}
                resizeMode="contain"
              />
              <Text style={log.list} onPress={toggleMenu}>
                Curs valutar
              </Text>
            </View>
            <View style={log.block}>
              <Image style={log.logoMenu} source={file} resizeMode="contain" />
              <Text style={log.list} onPress={toggleMenu}>
                Declaratia de confidentialitate
              </Text>
            </View>
            <View style={log.block}>
              <Image style={log.logoMenu} source={atm} resizeMode="contain" />
              <Text style={log.list} onPress={toggleMenu}>
                Gaseste ATM
              </Text>
            </View>
            <View style={log.block}>
              <Image style={log.logoMenu} source={phone} resizeMode="contain" />
              <Text style={log.list} onPress={toggleMenu}>
                Contacte
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const log = StyleSheet.create({
  login: {
    flex: 1,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#fff",
  },

  input: {
    marginVertical: 10,
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
  },
  intro: {
    justifyContent: "center",

    height: "auto",
    padding: 20,
    width: "100%",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 80,
  },
  auth: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menu: {
    width: 40,
    height: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Umple întregul ecran cu acest component
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Un fundal semi-transparent
    zIndex: 2, // Așeză acesta deasupra meniului
  },
  menuContent: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "start",
    paddingVertical: 20,
    width: "70%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 3, // Așeză meniul deasupra overlay-ului

    borderRightWidth: 0.5,
    borderColor: "green",
  },
  list: {
    color: "black",
  },
  logoMenu: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  block: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  first: {
    backgroundColor: "#E0E0E0",
  },
  openMenu: {
    marginLeft: 15,
    width: 100,
    marginTop: 20,
    height: 50,
  },
  primeList: {
    color: "#52AE2F",
  },
  checkboxContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#B8B8B8",
    borderRadius: 5,
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#52AE2F",
  },
  label: {
    fontSize: 14,
  },
  firstContainer: {
    marginTop: 30,
  },
});
