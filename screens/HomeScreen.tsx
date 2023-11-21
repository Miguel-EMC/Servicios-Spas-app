import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";
import ServiceItem from "../components/ServiceItem";
import { AntDesign } from "@expo/vector-icons";

interface Service {
  id: number;
  service_uuid: string;
  name_service: string;
  description: string;
  materials: string;
  thumbnail: string;
  status: string;
  published: string;
  category: null;
  spa_id: null;
  create_by: null;
}

const HomeScreen: React.FC<''> = () => {
  const [searchText, setSearchText] = useState("");
  const [servicesData, setServicesData] = useState<Service[]>([
    {
      "id": 3,
      "service_uuid": "0d6d80be-2458-47cc-ba2c-05874a46a878",
      "name_service": "servicio 2",
      "description": "gfhfgh",
      "materials": "ghfgh",
      "thumbnail": "https://th.bing.com/th/id/OIP.1RL0WlElUJV6OR1K5LNpfwHaGq?rs=1&pid=ImgDetMain",
      "status": "published",
      "published": "2023-11-21T14:47:02.027370Z",
      "category": null,
      "spa_id": null,
      "create_by": null
    },
    {
      "id": 4,
      "service_uuid": "bf41bef7-88b6-4ca8-99a3-71da78d75717",
      "name_service": "fdg",
      "description": "fdg",
      "materials": "dfg",
      "thumbnail": "https://th.bing.com/th/id/OIP.1RL0WlElUJV6OR1K5LNpfwHaGq?rs=1&pid=ImgDetMain",
      "status": "published",
      "published": "2023-11-21T14:52:15.307261Z",
      "category": null,
      "spa_id": null,
      "create_by": null
    },
    {
      "id": 5,
      "service_uuid": "68f061af-5292-4774-bcdf-70bb2e2c72fc",
      "name_service": "sdfdfg",
      "description": "fdg",
      "materials": "fdg",
      "thumbnail": "https://th.bing.com/th/id/OIP.1RL0WlElUJV6OR1K5LNpfwHaGq?rs=1&pid=ImgDetMain",
      "status": "published",
      "published": "2023-11-21T14:52:55.201545Z",
      "category": null,
      "spa_id": null,
      "create_by": null
    },
    {
      "id": 2,
      "service_uuid": "75b880b4-d093-412e-9192-0d624b264b2b",
      "name_service": "fdgdsfg",
      "description": "fsgfsdg",
      "materials": "dfgfdg",
      "thumbnail": "https://th.bing.com/th/id/OIP.1RL0WlElUJV6OR1K5LNpfwHaGq?rs=1&pid=ImgDetMain",
      "status": "published",
      "published": "2023-11-21T08:36:38.419534Z",
      "category": null,
      "spa_id": null,
      "create_by": 5
    },
    {
      "id": 6,
      "service_uuid": "2063523a-fb5e-4a0f-bbca-a252fd05d9a8",
      "name_service": "fdgdfg",
      "description": "fdsg",
      "materials": "dfgfdg",
      "thumbnail": "https://th.bing.com/th/id/OIP.1RL0WlElUJV6OR1K5LNpfwHaGq?rs=1&pid=ImgDetMain",
      "status": "published",
      "published": "2023-11-21T14:53:18.120901Z",
      "category": null,
      "spa_id": null,
      "create_by": 5
    }
  ]);

  const filteredServices = servicesData.filter((service) =>
    service.name_service.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderServiceItems = () => {
    return filteredServices.map((service, index) => (
      <ServiceItem key={index} service={service} />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="#777" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar servicios"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderServiceItems()}
      </ScrollView>
      {/* Agregar un navegador aquí */}
      {/* Ejemplo: */}
      {/* <View style={styles.bottomNavigation}>
        ... botones de navegación ...
    </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 20, // Ajuste del margen superior para evitar que esté demasiado pegado al borde superior
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default HomeScreen;
