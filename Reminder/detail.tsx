import { StyleSheet, Text, View } from 'react-native'
import { globalStyles, OPEN_SANS_REGULAR } from '../utils/constants'

const styles = StyleSheet.create({
  details_1: {
    fontSize: 32,
    fontFamily: OPEN_SANS_REGULAR,
    padding: 15
  },
  details_2: {
    fontSize: 20,
    fontFamily: OPEN_SANS_REGULAR,
    padding: 15
  }
})
const DetailsScreen = () => {
  return (
    <View>
      <Text style={[styles.details_1, globalStyles.globalFont]}>Some other information</Text>
      <Text style={[styles.details_2, globalStyles.globalFont]}>NGUYỄN QUỐC HUY</Text>
      <Text style={[styles.details_2, globalStyles.globalFont]}>Email: cv.nhuytyl2603@gmail.com</Text>
      <Text style={[styles.details_2, globalStyles.globalFont]}>Linked: https://www.linkedin.com/in/quoc-huy-nguyen-79157a257/</Text>
      <Text style={[styles.details_2, globalStyles.globalFont]}>Github: https://github.com/dlpit</Text>
      <Text style={[styles.details_2, globalStyles.globalFont]}>Affiliated: Đại học Nguyễn Tất Thành</Text>
      <Text style={[styles.details_2, globalStyles.globalFont]}>Contact: 0961 633 193</Text>
    </View>
  )
}

export default DetailsScreen