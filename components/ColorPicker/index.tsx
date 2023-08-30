import React from "react";
import { HexColorPicker } from "react-colorful";
type Props = {
  item: string | null;
  onChange: (item: string, color: string) => void;
};
const ColorPicker = ({ item, onChange }: Props) => {
  return (
    <div className="p-3 absolute flex items-center gap-3">
      {item && (
        <HexColorPicker
          className="!h-20 !w-20"
          onChange={(e) => onChange(item as string, e)}
        />
      )}
      <h1 className="text-5xl capitalize font-medium">
        {item || "Select Item"}
      </h1>
    </div>
  );
};

export default ColorPicker;
