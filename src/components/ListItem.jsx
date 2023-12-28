import { View, Text } from "react-native"

export default function ListItem({ info }) {
  return (
    <View style={styles.item}>
      <Text>
        { info.name }
      </Text>
    </View>
  )
}

const styles = {
  item: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    margin: '2px',
  },
};