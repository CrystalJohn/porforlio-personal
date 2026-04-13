const STORAGE_KEY = "daily_completed_days";

/** Trả về Set các day number đã hoàn thành */
export function getCompletedDays(): Set<number> {
  if (typeof window === "undefined") return new Set([0]);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set<number>(raw ? JSON.parse(raw) : [0]);
  } catch {
    return new Set([0]);
  }
}

/** Đánh dấu 1 day là hoàn thành hoặc chưa */
export function setDayCompleted(day: number, done: boolean): void {
  const days = getCompletedDays();
  if (done) days.add(day);
  else days.delete(day);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...days]));
  // Dispatch event để các component khác cùng tab biết
  window.dispatchEvent(new CustomEvent("dailyCompletionChanged"));
}

export function isDayCompleted(day: number): boolean {
  return getCompletedDays().has(day);
}
