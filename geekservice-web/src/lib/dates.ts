export function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

export function addMonths(d: Date, count: number) {
  return new Date(d.getFullYear(), d.getMonth() + count, 1);
}

export function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatMonthYear(d: Date) {
  return d.toLocaleString(undefined, { month: "long", year: "numeric" });
}

export function formatLongDate(d: Date) {
  return d.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateShort(d: Date) {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

export function parseDateShort(v: string) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v);
  if (!m) return null;
  const mm = Number(m[1]);
  const dd = Number(m[2]);
  const yyyy = Number(m[3]);
  const d = new Date(yyyy, mm - 1, dd);
  if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd)
    return null;
  return d;
}

export function buildMonthGrid(month: Date) {
  const start = startOfMonth(month);
  const end = endOfMonth(month);
  const startDay = start.getDay(); // 0 Sun
  const daysInMonth = end.getDate();

  const cells: Array<{ date: Date; inMonth: boolean }> = [];

  // previous month spill
  const prevMonthEnd = new Date(month.getFullYear(), month.getMonth(), 0);
  for (let i = startDay - 1; i >= 0; i--) {
    const d = new Date(prevMonthEnd);
    d.setDate(prevMonthEnd.getDate() - i);
    cells.push({ date: d, inMonth: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({ date: new Date(month.getFullYear(), month.getMonth(), day), inMonth: true });
  }

  // next month spill to complete weeks
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const d = new Date(last);
    d.setDate(last.getDate() + 1);
    cells.push({ date: d, inMonth: false });
  }

  // always show 6 rows like booking widgets
  while (cells.length < 42) {
    const last = cells[cells.length - 1].date;
    const d = new Date(last);
    d.setDate(last.getDate() + 1);
    cells.push({ date: d, inMonth: false });
  }

  return cells;
}

