import type {
  DefineComponent,
  AnchorHTMLAttributes,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  HTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColgroupHTMLAttributes,
  ColHTMLAttributes,
  DataHTMLAttributes,
  DetailsHTMLAttributes,
  DelHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  InsHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  QuoteHTMLAttributes,
  VideoHTMLAttributes,
  TrackHTMLAttributes,
  TimeHTMLAttributes,
  ThHTMLAttributes,
  TextareaHTMLAttributes,
  TdHTMLAttributes,
  TableHTMLAttributes,
  StyleHTMLAttributes,
  SourceHTMLAttributes,
  SelectHTMLAttributes,
  ScriptHTMLAttributes,
  WebViewHTMLAttributes,
  SVGAttributes,
} from "vue";

declare module "*.vue" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// react has but vue doesn't
type SVGProps = SVGAttributes;
type SlotHTMLAttributes = HTMLAttributes;

declare namespace JSX {
  interface IntrinsicElements {
    a: AnchorHTMLAttributes;
    abbr: HTMLAttributes;
    address: HTMLAttributes;
    area: AreaHTMLAttributes;
    article: HTMLAttributes;
    aside: HTMLAttributes;
    audio: AudioHTMLAttributes;
    b: HTMLAttributes;
    base: BaseHTMLAttributes;
    bdi: HTMLAttributes;
    bdo: HTMLAttributes;
    big: HTMLAttributes;
    blockquote: BlockquoteHTMLAttributes;
    body: HTMLAttributes;
    br: HTMLAttributes;
    button: ButtonHTMLAttributes;
    canvas: CanvasHTMLAttributes;
    caption: HTMLAttributes;
    cite: HTMLAttributes;
    code: HTMLAttributes;
    col: ColHTMLAttributes;
    colgroup: ColgroupHTMLAttributes;
    data: DataHTMLAttributes;
    datalist: HTMLAttributes;
    dd: HTMLAttributes;
    del: DelHTMLAttributes;
    details: DetailsHTMLAttributes;
    dfn: HTMLAttributes;
    dialog: DialogHTMLAttributes;
    div: HTMLAttributes;
    dl: HTMLAttributes;
    dt: HTMLAttributes;
    em: HTMLAttributes;
    embed: EmbedHTMLAttributes;
    fieldset: FieldsetHTMLAttributes;
    figcaption: HTMLAttributes;
    figure: HTMLAttributes;
    footer: HTMLAttributes;
    form: FormHTMLAttributes;
    h1: HTMLAttributes;
    h2: HTMLAttributes;
    h3: HTMLAttributes;
    h4: HTMLAttributes;
    h5: HTMLAttributes;
    h6: HTMLAttributes;
    head: HTMLAttributes;
    header: HTMLAttributes;
    hgroup: HTMLAttributes;
    hr: HTMLAttributes;
    html: HtmlHTMLAttributes;
    i: HTMLAttributes;
    iframe: IframeHTMLAttributes;
    img: ImgHTMLAttributes;
    input: InputHTMLAttributes;
    ins: InsHTMLAttributes;
    kbd: HTMLAttributes;
    keygen: KeygenHTMLAttributes;
    label: LabelHTMLAttributes;
    legend: HTMLAttributes;
    li: LiHTMLAttributes;
    link: LinkHTMLAttributes;
    main: HTMLAttributes;
    map: MapHTMLAttributes;
    mark: HTMLAttributes;
    menu: MenuHTMLAttributes;
    menuitem: HTMLAttributes;
    meta: MetaHTMLAttributes;
    meter: MeterHTMLAttributes;
    nav: HTMLAttributes;
    noindex: HTMLAttributes;
    noscript: HTMLAttributes;
    object: ObjectHTMLAttributes;
    ol: OlHTMLAttributes;
    optgroup: OptgroupHTMLAttributes;
    option: OptionHTMLAttributes;
    output: OutputHTMLAttributes;
    p: HTMLAttributes;
    param: ParamHTMLAttributes;
    picture: HTMLAttributes;
    pre: HTMLAttributes;
    progress: ProgressHTMLAttributes;
    q: QuoteHTMLAttributes;
    rp: HTMLAttributes;
    rt: HTMLAttributes;
    ruby: HTMLAttributes;
    s: HTMLAttributes;
    samp: HTMLAttributes;
    slot: SlotHTMLAttributes;
    script: ScriptHTMLAttributes;
    section: HTMLAttributes;
    select: SelectHTMLAttributes;
    small: HTMLAttributes;
    source: SourceHTMLAttributes;
    span: HTMLAttributes;
    strong: HTMLAttributes;
    style: StyleHTMLAttributes;
    sub: HTMLAttributes;
    summary: HTMLAttributes;
    sup: HTMLAttributes;
    table: TableHTMLAttributes;
    template: HTMLAttributes;
    tbody: HTMLAttributes;
    td: TdHTMLAttributes;
    textarea: TextareaHTMLAttributes;
    tfoot: HTMLAttributes;
    th: ThHTMLAttributes;
    thead: HTMLAttributes;
    time: TimeHTMLAttributes;
    title: HTMLAttributes;
    tr: HTMLAttributes;
    track: TrackHTMLAttributes;
    u: HTMLAttributes;
    ul: HTMLAttributes;
    var: HTMLAttributes;
    video: VideoHTMLAttributes;
    wbr: HTMLAttributes;
    webview: WebViewHTMLAttributes;
    svg: SVGProps;
    animate: SVGProps;
    animateMotion: SVGProps;
    animateTransform: SVGProps;
    circle: SVGProps;
    clipPath: SVGProps;
    defs: SVGProps;
    desc: SVGProps;
    ellipse: SVGProps;
    feBlend: SVGProps;
    feColorMatrix: SVGProps;
    feComponentTransfer: SVGProps;
    feComposite: SVGProps;
    feConvolveMatrix: SVGProps;
    feDiffuseLighting: SVGProps;
    feDisplacementMap: SVGProps;
    feDistantLight: SVGProps;
    feDropShadow: SVGProps;
    feFlood: SVGProps;
    feFuncA: SVGProps;
    feFuncB: SVGProps;
    feFuncG: SVGProps;
    feFuncR: SVGProps;
    feGaussianBlur: SVGProps;
    feImage: SVGProps;
    feMerge: SVGProps;
    feMergeNode: SVGProps;
    feMorphology: SVGProps;
    feOffset: SVGProps;
    fePointLight: SVGProps;
    feSpecularLighting: SVGProps;
    feSpotLight: SVGProps;
    feTile: SVGProps;
    feTurbulence: SVGProps;
    filter: SVGProps;
    foreignObject: SVGProps;
    g: SVGProps;
    image: SVGProps;
    line: SVGProps;
    linearGradient: SVGProps;
    marker: SVGProps;
    mask: SVGProps;
    metadata: SVGProps;
    mpath: SVGProps;
    path: SVGProps;
    pattern: SVGProps;
    polygon: SVGProps;
    polyline: SVGProps;
    radialGradient: SVGProps;
    rect: SVGProps;
    stop: SVGProps;
    switch: SVGProps;
    symbol: SVGProps;
    text: SVGProps;
    textPath: SVGProps;
    tspan: SVGProps;
    use: SVGProps;
    view: SVGProps;
  }
}
