import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <Text style={styles.subtitle}>
        Adicione suas atividades a lista de tarefas
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          placeholderTextColor={"#808080"}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Feather name="plus" size={21} color="#f2f2f2" />
        </TouchableOpacity>
      </View>
      <Text style={styles.listTitle}>Tarefas Pendentes</Text>
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListText}>
          Realizou todas as tarefas? Adicione tarefas a sua lista de pendências.
        </Text>
      </View>
    </View>
  );
};
