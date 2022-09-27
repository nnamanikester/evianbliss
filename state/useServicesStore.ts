import create from "zustand";
import _ from "lodash";
import { ServiceT } from "../types";

interface ServicesStore {
  services: ServiceT[];
  setServices: (services: ServiceT[]) => void;
  removeServices: (id: string) => void;
  addServices: (service: ServiceT) => void;
}

export const useServicesStore = create<ServicesStore>((set, get) => ({
  services: [],
  setServices: (services) => {
    set({ services });
  },
  removeServices: (id) => {
    const services = get().services;
    const servs = _.filter(services, (service) => {
      return service.id !== id;
    });
    set({ services: servs });
  },
  addServices: (category) => {
    set((state) => ({ services: [category, ...state.services] }));
  },
}));
