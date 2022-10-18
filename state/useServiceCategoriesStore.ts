import create from "zustand";
import _ from "lodash";
import { ServiceCategoryT } from "../types";

interface ServiceCategoriesStore {
  categories: ServiceCategoryT[];
  setCategories: (categories: ServiceCategoryT[]) => void;
  removeCategory: (id: string) => void;
  addCategory: (category: ServiceCategoryT) => void;
}

export const useServiceCategoriesStore = create<ServiceCategoriesStore>(
  (set, get) => ({
    categories: [],
    setCategories: (categories) => {
      const sorted = categories.sort((a, b) =>
        a.created_at < b.created_at ? 1 : -1
      );
      set({ categories: sorted });
    },
    removeCategory: (id) => {
      const categories = get().categories;
      const cats = _.filter(categories, (cat) => {
        return cat.id !== id;
      });
      set({ categories: cats });
    },
    addCategory: (category) => {
      set((state) => ({ categories: [category, ...state.categories] }));
    },
  })
);
