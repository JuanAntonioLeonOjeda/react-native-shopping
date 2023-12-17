import { View, Text } from "react-native"

export default function ListItem({ info }) {
  return (
    <View>
      <Text>
        { info.name }
      </Text>
    </View>
  )
}