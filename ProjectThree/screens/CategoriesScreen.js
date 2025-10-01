import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
export default function CategoriesScreen() {
  function renderCategoryItem(item) {
    return <CategoryGridTile title={item.title} color={item.color} />;
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
