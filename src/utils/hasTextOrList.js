export const hasTextOrList = (val) => {
  if (!val) return "-";
  if (typeof val === "string") return val;
  else if (typeof val === "string" && val.length === 0) return "-";
  else if (typeof val === "object" && val.length === 0) return "-";
  else if (typeof val === "object" && val.length > 0) return val.join(", ");
  return val;
};
