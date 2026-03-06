// src/lib/woocommerce.js

const API_URL = import.meta.env.WP_API_URL;
const CONSUMER_KEY = import.meta.env.WC_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.WC_CONSUMER_SECRET;

export async function getProducts() {
  const url = `${API_URL}/wc/v3/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error en la petición: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
}