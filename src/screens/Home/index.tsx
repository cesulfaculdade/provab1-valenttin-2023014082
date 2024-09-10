import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { ProductCard } from "../../components/ProductCard";
import { useState } from "react";

export const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  const handleTaskAdd = (taskName: string) => {
    if (tasks.includes(taskName)) {
      Alert.alert("Tarefa já existente!", "Por favor, insira uma nova tarefa");
      setTaskName("");
      return;
    }

    if (!taskName) {
      Alert.alert("Erro!", "Insira um nome para a tarefa");
      setTaskName("");
      return;
    }

    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
  };

  const handleProductRemove = (itemName: string) => {
    Alert.alert("Remover", `Deseja remover a tarefa ${itemName}?`, [
      {
        text: "Não",
        onPress: () => {
          return;
        },
      },
      {
        text: "Sim",
        onPress: () => {
          if (tasks.includes(itemName)) {
            setTasks((prevState) =>
              prevState.filter((item) => item !== itemName)
            );
          }
        },
      },
    ]);
  };

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
          onChangeText={setTaskName}
          value={taskName}
        ></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTaskAdd(taskName)}
        >
          <Feather name="plus" size={24} color="#f2f2f2" />
        </TouchableOpacity>
      </View>
      <Text style={styles.listTitle}>Tarefas Pendentes</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ProductCard name={item} onRemove={() => handleProductRemove(item)} />
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>
              Realizou todas as tarefas? Adicione tarefas a sua lista de
              pendências.
            </Text>
          </View>
        }
      />
    </View>
  );
};
