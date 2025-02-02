type DayOfWeeks = "Sunday" | "Monday" | "Tuesday" | "Saturday";

function getDayFromDate(d: Date): DayOfWeeks {
  const day = d.getDay() + 1;
  if (day === 1) return "Sunday";
  return "Saturday";
}
