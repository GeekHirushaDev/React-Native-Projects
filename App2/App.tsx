import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <AlertNotificationRoot>
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.appBody}>
          <Text style={styles.signupTitle}>Signup</Text>
          <Image
            source={require("./assets/favicon.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <TextInput style={styles.input} placeholder="name" />
          <TextInput style={styles.input} placeholder="password" secureTextEntry />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText} onPress={async () => {
              const response = await fetch("url", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: "John Doe",
                }),
              });
            }}>
              Submit
            </Text>
          </Pressable>
        </View>
        </ScrollView>
        
      </SafeAreaView>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
    backgroundColor: "white",
  },

  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },

  signupTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 40,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 12,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    margin: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
