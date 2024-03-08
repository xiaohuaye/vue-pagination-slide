import { SliderPagination } from "@/utils/sliderPagination";

export function useSliderPagination({
  current,
  pageSize,
  total,
}: {
  current: number;
  pageSize: number;
  total: number;
}) {
  return new SliderPagination(current, pageSize, total);
}
