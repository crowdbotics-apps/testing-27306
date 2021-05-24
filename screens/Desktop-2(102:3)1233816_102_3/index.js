import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_102_4}>
        <Text style={styles.Text_102_4}>StudyDashboard</Text>
      </View>
      <View style={styles.View_102_5}>
        <Text style={styles.Text_102_5}>Dashboard</Text>
      </View>
      <View style={styles.View_102_6}>
        <Text style={styles.Text_102_6}>Login</Text>
      </View>
      <View style={styles.View_102_7} />
      <View style={styles.View_102_8}>
        <View style={styles.View_102_9}>
          <Text style={styles.Text_102_9}>Clear</Text>
        </View>
      </View>
      <View style={styles.View_102_10} />
      <View style={styles.View_102_11}>
        <Text style={styles.Text_102_11}>my first task...</Text>
      </View>
      <View style={styles.View_102_12}>
        <Text style={styles.Text_102_12}>Today’s Tasks</Text>
      </View>
      <View style={styles.View_102_13} />
      <View style={styles.View_102_14}>
        <View style={styles.View_102_15}>
          <View style={styles.View_102_16}>
            <Text style={styles.Text_102_16}>Pomodoro</Text>
          </View>
        </View>
        <View style={styles.View_102_17}>
          <View style={styles.View_102_18}>
            <Text style={styles.Text_102_18}>Break</Text>
          </View>
        </View>
        <View style={styles.View_102_19}>
          <View style={styles.View_102_20} />
          <View style={styles.View_102_21}>
            <Text style={styles.Text_102_21}>Start</Text>
          </View>
        </View>
        <View style={styles.View_102_22}>
          <Text style={styles.Text_102_22}>25:00</Text>
        </View>
      </View>
      <View style={styles.View_102_23} />
      <View style={styles.View_102_24} />
      <View style={styles.View_102_25} />
      <View style={styles.View_102_26}>
        <Text style={styles.Text_102_26}>Connect Google Calendar</Text>
      </View>
      <View style={styles.View_102_27}>
        <Text style={styles.Text_102_27}>
          You’ve studied for 5 hours today.
        </Text>
      </View>
      <View style={styles.View_102_28}>
        <View style={styles.View_102_29} />
        <View style={styles.View_102_30}>
          <Text style={styles.Text_102_30}>Start</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_102_4: {
    width: wp("13.750000000000002%"),
    minWidth: wp("13.750000000000002%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000001%"),
    top: hp("6.420765027322404%")
  },
  Text_102_4: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_5: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06944444444444%"),
    top: hp("6.420765027322404%")
  },
  Text_102_5: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_6: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.01388888888889%"),
    top: hp("6.420765027322404%")
  },
  Text_102_6: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_7: {
    width: wp("28.888888888888886%"),
    minWidth: wp("28.888888888888886%"),
    height: hp("88.79781420765028%"),
    minHeight: hp("88.79781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.55555555555556%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(250, 250, 251, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_102_8: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.90277777777778%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_9: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.118055555555557%"),
    top: hp("1.0245901639344268%")
  },
  Text_102_9: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_10: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.19444444444444%"),
    top: hp("28.142076502732237%"),
    borderColor: "rgba(139, 142, 145, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  View_102_11: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("28.142076502732237%")
  },
  Text_102_11: {
    color: "rgba(177, 178, 178, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_12: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.47222222222222%"),
    top: hp("20.901639344262296%")
  },
  Text_102_12: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_13: {
    width: wp("26.73611111111111%"),
    minWidth: wp("26.73611111111111%"),
    height: hp("46.44808743169399%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_102_14: {
    width: wp("22.01388888888889%"),
    minWidth: wp("22.01388888888889%"),
    height: hp("38.3879781420765%"),
    minHeight: hp("38.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.02777777777777%"),
    top: hp("21.721311475409834%")
  },
  View_102_15: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 238, 241, 1)"
  },
  View_102_16: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.631944444444457%"),
    top: hp("1.092896174863391%")
  },
  Text_102_16: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_17: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_18: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0902777777777715%"),
    top: hp("1.092896174863391%")
  },
  Text_102_18: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_19: {
    width: wp("14.930555555555555%"),
    minWidth: wp("14.930555555555555%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888889%"),
    top: hp("28.96174863387978%")
  },
  View_102_20: {
    width: wp("14.930555555555555%"),
    minWidth: wp("14.930555555555555%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_102_21: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416666666666657%"),
    top: hp("2.3224043715847102%")
  },
  Text_102_21: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_22: {
    width: wp("22.01388888888889%"),
    minWidth: wp("22.01388888888889%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%")
  },
  Text_102_22: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 96,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_23: {
    width: wp("26.73611111111111%"),
    minWidth: wp("26.73611111111111%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_102_24: {
    width: wp("26.73611111111111%"),
    minWidth: wp("26.73611111111111%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("78.14207650273224%"),
    backgroundColor: "rgba(233, 237, 241, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_102_25: {
    width: wp("23.47222222222222%"),
    minWidth: wp("23.47222222222222%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.05555555555556%"),
    top: hp("80.87431693989072%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_102_26: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.58333333333333%"),
    top: hp("83.19672131147541%")
  },
  Text_102_26: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_27: {
    width: wp("21.041666666666668%"),
    minWidth: wp("21.041666666666668%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.23611111111111%"),
    top: hp("69.26229508196722%")
  },
  Text_102_27: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_28: {
    width: wp("14.930555555555555%"),
    minWidth: wp("14.930555555555555%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%"),
    top: hp("5.05464480874317%")
  },
  View_102_29: {
    width: wp("14.930555555555555%"),
    minWidth: wp("14.930555555555555%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_102_30: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416666666666671%"),
    top: hp("2.3224043715846987%")
  },
  Text_102_30: {
    color: "rgba(139, 142, 145, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
