import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrize(
  prize : number | string,
  options : {
    currency? : "USD" | "EUR" | "GBP" | "BDT",
    notation?: Intl.NumberFormatOptions['notation']
  }={}
) {
  const {currency = "USD", notation = "compact"} = options
  const numericPrize = typeof prize === "string" ? parseFloat(prize) : prize

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits : 2
  }).format(numericPrize)
}