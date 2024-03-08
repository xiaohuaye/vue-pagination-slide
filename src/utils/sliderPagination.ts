export class SliderPagination {
  constructor(
    // 当前页
    private current: number = 1,
    // 每页条数
    private pageSize: number = 10,
    // 总条数
    private total: number = 0,
    // 偏移量
    private offset: number = 2
  ) {
    
  }

  // 获取当前页
  getCurrent() {
    return this.current;
  }

  // 获取每页条数
  getPageSize() {
    return this.pageSize;
  }

  // 获取总条数
  getTotal() {
    return this.total;
  }

  // 获取偏移量
  getOffset() {
    return this.offset;
  }
  
  // 设置当前页
  setCurrent(current: number) {
    this.current = current;
  }

  // 设置每页条数
  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
  }

  // 设置总条数
  setTotal(total: number) {
    this.total = total;
  }

  // 获取总页数
  getTotalPage() {
    return Math.ceil(this.total / this.pageSize);
  }

  // 获取cur && offset 之间的页码
  getPages() {
    const totalPage = this.getTotalPage();
    const cur = this.current;
    const offset = this.offset;
    const pages = [];
    let start = Math.max(1, cur - offset);
    let end = Math.min(totalPage, cur + offset);
    if (start === 1) {
      end = Math.min(start + 2 * offset, totalPage);
    }
    if (end === totalPage) {
      start = Math.max(end - 2 * offset, 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
}