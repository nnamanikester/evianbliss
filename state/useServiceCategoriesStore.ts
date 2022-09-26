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
      set({ categories });
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
