import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../commons/constants";
import { BodyComponent } from "../../components/BodyComponent";
import { CardProduct } from "./components/CardProduct";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ModalCart } from "./components/ModalCart";
import { TitleComponent } from "../../components/TittleComponent";

// Interface para los productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

// Interface para el carrito
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export const HomeScreen = () => {
  // Lista inicial de productos
  const products: Product[] = [
    {
      id: 1,
      name: "Monitor HP 75Hz",
      price: 150,
      stock: 25,
      pathImage:
        "https://imgs.search.brave.com/oKReT0_sqhbQ0ylgG0uA4EsDpP-WJzlK7SGPNfKt0Yc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg0MDg5MC1NTFU3/ODkyOTkyMDY0NF8w/OTIwMjQtVi53ZWJw",
    },
    {
      id: 2,
      name: "Mouse inalambrico",
      price: 80,
      stock: 20,
      pathImage:
        "https://imgs.search.brave.com/283Cecikm6fUffPcSfsFVWpcFKrOOiO_1FPCzn3wmps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzcxMzM5My1NTEE0/NDkzNTExODY3OV8w/MjIwMjEtVi53ZWJw",
    },
    {
      id: 3,
      name: "Teclado mecanico",
      price: 60,
      stock: 0,
      pathImage:
        "https://imgs.search.brave.com/8L5l9yrCsYF4t2ilVZVBQQqovHEYwmS4rTw1jU3ap0g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NjM2NjA0NC9wdC9m/b3RvL2JsYWNrLW1l/Y2hhbmljYWwta2V5/Ym9hcmQtb24td2hp/dGUtYmFja2dyb3Vu/ZC1ibHVlLW5lb24t/bGlnaHQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpNV25J/R2tJWHVrcXJNRmw5/ZXE0TjRnQmJUdmJ3/djd6SlF5MVBwNG5W/Q0E9"
    },
    {
      id: 4,
      name: "Noctua NH-D15 CPU",
      price: 600,
      stock: 12,
      pathImage:
        "https://imgs.search.brave.com/0QfP7gi-uFFOtIfNUd9wls4aftYpTOGxkhapK7TgRng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjY0MC9B/QURZUzI0MDcwMTBK/OVJaNkEyLmpwZw",
    },
    {
      id: 5,
      name: "Intel core i9",
      price: 90,
      stock: 8,
      pathImage:
        "https://imgs.search.brave.com/gBw3qI4315_LGy9KcpEN3pRciDZf9z-Coobs6G0rPxo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3liZXJwdWVydGEu/bXgvb3V0L3BpY3R1/cmVzL2NwU3BlY2lh/bExpc3RMaW5rcy9Q/cm9jZXNhZG9yZXMt/MTQucG5n",
    },
    {
      id: 6,
      name: "Nvidia GTX 1650",
      price: 250,
      stock: 5,
      pathImage:
        "https://imgs.search.brave.com/_gnm8C85eM2hIADRiGjBGC7FFyJjWw8Lzg2RNpwGIBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVkY29tcHV0ZXIu/ZXMvMTAxMjUtaG9t/ZV9kZWZhdWx0L2dp/Z2FieXRlLWd0eC0x/NjUwLW9jLTRnYi5q/cGc",
    },
    {
      id: 7,
      name: "Movil Xgody",
      price: 160,
      stock: 12,
      pathImage:
        "https://imgs.search.brave.com/X03lZbsD2Ye9_zNhcJbXxwEQyMppTnuEmINTTJaz-9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY0NjIzMS1NTEE4/OTY0NjQ5NTYyNV8w/ODIwMjUtVi53ZWJw",
    },
    {
      id: 8,
      name: "Auricular G535",
      price: 40,
      stock: 12,
      pathImage:
        "https://imgs.search.brave.com/RsSP1yb3k8NIA1upRfK067ITC18d492UnE8dFG_EoyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF3VERjQTdrT0wu/anBn",
    },
    {
      id: 9,
      name: "Logitech G Yeti",
      price: 30,
      stock: 12,
      pathImage:
        "https://imgs.search.brave.com/Ih-etl9NnHMJR5DxRDXZGcS57Ee17fddFsTEtuDPR2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY0Nzg2NC1NUEU3/Njk0NzUzNjU0OV8w/NjIwMjQtVi1taWNy/b2Zvbm8tbG9naXRl/Y2gtZy15ZXRpLW9y/Yi1uZWdyby11c2It/cmdiLW1hYy15LXdp/bmRvd3Mud2VicA",
    },
  ];

  const [listProducts, setListProducts] = useState<Product[]>(products);
  const [cart, setCart] = useState<Cart[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = (): void => {
    if (cart.length === 0) {
      Alert.alert("Carrito vacío", "Por favor, añada productos al carrito");
      return;
    }
    setShowModal(!showModal);
  };

  const updateStock = (id: number, quantity: number): void => {
    const updatedProducts = listProducts.map((product) =>
      product.id === id
        ? { ...product, stock: product.stock - quantity }
        : product
    );

    setListProducts(updatedProducts);

    // Llama a la función para añadir al carrito
    addProduct(id, quantity);
  };
  const addProduct = (id: number, quantity: number): void => {
    const product = listProducts.find((product) => product.id === id);

    if (!product) return;

    setCart((prevCart) => {
      const updatedProduct = prevCart.findIndex((product) => product.id === id);

      if (updatedProduct !== -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[updatedProduct];

        const updateQuantity = existingItem.quantity + quantity;
        const updateTotal = updateQuantity * existingItem.price;

        updatedCart[updatedProduct] = {
          ...existingItem,
          quantity: updateQuantity,
          total: updateTotal,
        };
        return updatedCart;
      }

      const newProductCart: Cart = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: product.price * quantity,
      };

      return [...prevCart, newProductCart];
    });
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <View style={styles.headerHome}>
        <TitleComponent title="Productos" />
        <View style={styles.containerIcon}>
          <Text style={styles.textIconCart}>{cart.length}</Text>
          <Icon
            name="shopping-cart"
            size={40}
            color={"#5f54f8ff"}
            onPress={handleModal}
          />
        </View>
      </View>

      <BodyComponent>
        <FlatList
          data={listProducts}
          renderItem={({ item }) => (
            <CardProduct item={item} updateStock={updateStock} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </BodyComponent>

      <ModalCart
        visible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        cart={cart}
        setCart={setCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerHome: {
    flexDirection: "row",
  },
  containerIcon: {
    flex: 1,
    alignItems: "flex-end",
    paddingHorizontal: 30,
  },
  textIconCart: {
    backgroundColor: "#ffffffff",
    paddingHorizontal: 5,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 13,
  },
});