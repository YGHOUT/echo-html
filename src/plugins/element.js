import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Main,
    Footer,
    Card,
    Form,
    FormItem,
    Input,
    Tabs,
    TabPane,
    Message,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Carousel,
    CarouselItem,
    Image,
    Progress,
    Collapse,
    CollapseItem,
    Divider,
    Menu,
    Submenu,
    MenuItem,
    Aside,
    Avatar,
    Radio,
    RadioGroup,
    Dialog,
    MessageBox,
    Popover
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Progress)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Divider)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Avatar)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Dialog)
Vue.use(Popover)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
