export function generateUniqueId(length: number = 5) {
  let result = "";
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-?/><:;}{[]\|`;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getUserInital(name?: string) {
  if (name) {
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    const initials = [...name.matchAll(rgx)] || [];
    return (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();
  }
  return name;
}
