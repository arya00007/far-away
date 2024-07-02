import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const totalItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const totalPackedPercentage = Math.round((packedItem / totalItem) * 100);

  return (
    <footer className="stats">
      <em>
        {totalPackedPercentage === 100
          ? "You got everything! Ready to go "
          : `You have ${totalItem} items on your list and You already packed ${packedItem} (${totalPackedPercentage}%)`}
      </em>
    </footer>
  );
}
