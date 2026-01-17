"use client";

import { Button } from "@/components/ui/button";

export default function AddItemForm() {
  return (
    <div className="max-w-xl mx-auto border rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Add New Item</h2>

      <form className="space-y-5">
        <input
          placeholder="Item Name"
          className="w-full px-4 py-3 border rounded-xl"
        />

        <textarea
          placeholder="Description"
          className="w-full px-4 py-3 border rounded-xl h-28"
        />

        <input
          placeholder="Price"
          type="number"
          className="w-full px-4 py-3 border rounded-xl"
        />

        <input
          placeholder="Image URL"
          className="w-full px-4 py-3 border rounded-xl"
        />

        <Button className="w-full rounded-full py-6">
          Add Item
        </Button>
      </form>
    </div>
  );
}
