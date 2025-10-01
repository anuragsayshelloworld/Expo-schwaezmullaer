import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(item) {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => pressHandler(item.id)}
      />
    );
  }
  function pressHandler(id) {
    navigation.navigate("MealsOverview", { categoryId: id });
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
}
