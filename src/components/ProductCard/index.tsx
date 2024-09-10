import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type Props = {
  name: string;
  onRemove: () => void;
};

export const ProductCard = ({ name, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color="#f2f2f2"
        />
      </TouchableOpacity>
    </View>
  );
};
