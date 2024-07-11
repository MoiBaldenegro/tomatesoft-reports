import { create } from "zustand";

export const useReportsStore = create((set) => ({
  reports: [],
  getReports: async () => {
    const response = await fetch(
      "https://tomatesoft-server-paas.azurewebsites.net/operating-period"
    );
    const data = await response.json();

    // Formatea los datos aquí
    const formattedData = data.map((item) => ({
      id: item.id,
      name: item.name,
      period: new Date(item.createdAt).toLocaleDateString('es-ES', {
        weekday: 'long', // día de la semana
        year: 'numeric',
        month: 'long', // mes completo
        day: 'numeric'
      }).toLocaleUpperCase(),
      // agrega aquí otros campos personalizados que necesites
    }));

    set({ reports: formattedData });
  },
}));
