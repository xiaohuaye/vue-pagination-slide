import type {
  // AutoComplete,
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  Divider,
  Drawer,
  Empty,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Menu,
  Modal,
  Pagination,
  Popover,
  Progress,
  Radio,
  Row,
  Select,
  Skeleton,
  Space,
  Spin,
  Switch,
  Tabs,
  Tag,
  Tooltip,
  Carousel,
  Tree,
  Segmented,
  Upload,
  Slider,
  Breadcrumb,
  Collapse,
  Image,
  Avatar,
  Dropdown,
  Rate,
} from "ant-design-vue";

declare module "vue" {
  export interface GlobalComponents {
    AButton: typeof Button;
    ACard: typeof Card;
    ACheckbox: typeof Checkbox;
    ACol: typeof Col;
    AConfigProvider: typeof ConfigProvider;
    ADivider: typeof Divider;
    ADrawer: typeof Drawer;
    AEmpty: typeof Empty;
    AForm: typeof Form;
    AInput: typeof Input;
    AInputNumber: typeof InputNumber;
    ALayout: typeof Layout;
    AList: typeof List;
    AMenu: typeof Menu;
    AModal: typeof Modal;
    APagination: typeof Pagination;
    APopover: typeof Popover;
    AProgress: typeof Progress;
    ARadio: typeof Radio;
    ARow: typeof Row;
    ASelect: typeof Select;
    ASkeleton: typeof Skeleton;
    ASpace: typeof Space;
    ASpin: typeof Spin;
    ASwitch: typeof Switch;
    ATabs: typeof Tabs;
    ATag: typeof Tag;
    ATooltip: typeof Tooltip;
    ACarousel: typeof Carousel;
    ATree: typeof Tree;
    ASegmented: typeof Segmented;
    ASlider: typeof Slider;
    ABreadcrumb: typeof Breadcrumb;
    ACollapse: typeof Collapse;
    AUpload: typeof Upload;
    AImage: typeof Image;
    AAvatar: typeof Avatar;
    ADropdown: typeof Dropdown;
    ARate: typeof Rate;
  }
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
