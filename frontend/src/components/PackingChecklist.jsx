import { useState } from "react";

export default function PackingChecklist() {

  const [items, setItems] = useState([
    "Passport / ID",
    "Clothes",
    "Phone Charger",
    "Power Bank",
    "Toiletries",
    "Medicines",
    "Sunglasses",
    "Camera"
  ]);

  const [checked, setChecked] = useState({});
  const [newItem, setNewItem] = useState("");

  const toggleItem = (item) => {
    setChecked({
      ...checked,
      [item]: !checked[item]
    });
  };

  const addItem = () => {

    if (!newItem.trim()) return;

    setItems([...items, newItem]);
    setNewItem("");

  };

  const removeItem = (item) => {

    setItems(items.filter((i) => i !== item));

  };

  const packedCount = Object.values(checked).filter(Boolean).length;

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6">

      <h2 className="text-lg font-semibold text-white mb-2">
        🧳 Packing Checklist
      </h2>

      <p className="text-sm text-white/70 mb-4">
        {packedCount} / {items.length} items packed
      </p>

      {/* Add Item */}

      <div className="flex gap-2 mb-4">

        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
        />

        <button
          onClick={addItem}
          className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
        >
          Add
        </button>

      </div>

      {/* List */}

      <ul className="grid grid-cols-2 gap-3">

        {items.map((item, i) => (

          <li
            key={i}
            className={`flex items-center justify-between p-2 rounded-lg transition
              ${
                checked[item]
                  ? "bg-green-500/20 line-through text-green-300"
                  : "bg-white/5 text-white"
              }`}
          >

            <div
              onClick={() => toggleItem(item)}
              className="flex items-center gap-2 cursor-pointer"
            >

              <input
                type="checkbox"
                checked={checked[item] || false}
                readOnly
              />

              <span className="text-sm">{item}</span>

            </div>

            <button
              onClick={() => removeItem(item)}
              className="text-red-400 text-sm"
            >
              ✕
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}