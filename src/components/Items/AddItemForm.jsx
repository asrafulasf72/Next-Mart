"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddItemForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
      return;
    }

    toast.success("Item added successfully 🎉");
    router.push("/items");
  };

  return (
    <div className="max-w-xl mx-auto border rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Add New Item</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="name"
          placeholder="Item Name"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl h-28"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl"
        />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl"
        />

        <Button className="w-full rounded-full py-6 cursor-pointer">
          Add Item
        </Button>
      </form>
    </div>
  );
}
