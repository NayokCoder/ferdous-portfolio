"use client";

import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "./separator";
import { products } from "@/json/product";

export default function SmoothDrawer() {
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(5);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateSummary = () => {
    let sub = 0;
    items.forEach((item) => {
      sub += item.price * item.quantity;
    });

    const calculatedTax = sub * 0.1;
    const grandTotal = sub + shipping + calculatedTax;

    setSubtotal(sub);
    setTax(calculatedTax);
    setTotal(grandTotal);
  };

  useEffect(() => {
    calculateSummary();
  }, [items]);

  useEffect(() => {
    const randomItems = Array.from({ length: 5 }, (_, index) => {
      const randomIndex = Math.floor(Math.random() * products.length);
      return {
        id: index,
        image: products[randomIndex].image,
        title: products[randomIndex].title,
        price: products[randomIndex].price,
        quantity: 1,
      };
    });

    setItems(randomItems);
  }, []);

  const increaseQuantity = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return <Sheet></Sheet>;
}
