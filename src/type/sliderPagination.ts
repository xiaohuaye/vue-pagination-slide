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
  ) {}

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
  getPages(): IOffsetPages {
    const totalPage = this.getTotalPage();
    const cur = this.current;
    const offset = this.offset;
    // 上偏移量
    const up: IOffsetPages["offset"]["up"] = {
      enough: false,
      values: [],
    };
    // 下偏移量
    const down: IOffsetPages["offset"]["down"] = {
      enough: false,
      values: [],
    };
    // 上偏移量
    for (let i = cur - offset; i < cur; i++) {
      up.values.push(i > 0 ? i : undefined);
    }
    // 下偏移量
    for (let i = cur + 1; i <= cur + offset; i++) {
      down.values.push(i <= totalPage ? i : undefined);
    }
    // 上偏移量是否足够
    up.enough = !up.values.includes(undefined)
   
    // 下偏移量是否足够
    down.enough = !down.values.includes(undefined)
    return {
      cur,
      offset: {
        up,
        down,
      },
    };
  }
}

/**
 * @description 带偏移量的页码数组
 */
export interface IOffsetPages {
  // 当前页
  cur: number;
  // 偏移量数据
  offset: {
    // 上偏移量
    up: {
      // 是否页数足够
      enough: boolean;
      // 值
      values: Array<number | undefined>;
    };
    // 下偏移量
    down: {
      // 是否页数足够
      enough: boolean;
      // 值
      values: Array<number | undefined>;
    };
  };
}
