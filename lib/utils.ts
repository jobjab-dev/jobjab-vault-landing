import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(
  value: number | string,
  options?: {
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    style?: "decimal" | "currency" | "percent"
    currency?: string
  }
): string {
  const num = typeof value === "string" ? parseFloat(value) : value
  
  if (isNaN(num)) return "0"
  
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: options?.minimumFractionDigits ?? 0,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
    style: options?.style ?? "decimal",
    currency: options?.currency ?? "USD",
  }).format(num)
}

export function formatUSDC(amount: number | string): string {
  return formatNumber(amount, { minimumFractionDigits: 2, maximumFractionDigits: 6 })
}

export function formatPercentage(value: number): string {
  return formatNumber(value, { style: "percent", minimumFractionDigits: 2 })
}