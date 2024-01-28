import Alert from './Alert/Index.vue';
import AlertFixed from './Alert/Fixed.vue';
import AlertLoading from './Alert/Loading.vue';
import Breadcrumb from './Breadcrumb/Index.vue';
import DialogConfirm from './Dialog/Confirm.vue';
import Skeleton from './Skeleton/Index.vue';
import Modal from './Modal/Index.vue';
import Container from './Container/Index.vue';
import SectionHeader from './Section/Header.vue';
import InputSelect from './Input/Select.vue';
import InputText from './Input/Text.vue';
import InputTextarea from './Input/Textarea.vue';
import Pagination from './Pagination/Index.vue';
import Dropdown from './Dropdown/Index.vue';
import FileAvatar from './File/Avatar.vue';
import EmptyState from './EmptyState/Index.vue';

export default function configureComponents(app) {
    app.component('Alert', Alert)
    app.component('AlertFixed', AlertFixed)
    app.component('AlertLoading', AlertLoading)
    app.component('Breadcrumb', Breadcrumb)
    app.component('DialogConfirm', DialogConfirm)
    app.component('Skeleton', Skeleton)
    app.component('Modal', Modal)
    app.component('Container', Container)
    app.component('SectionHeader', SectionHeader)
    app.component('InputSelect', InputSelect)
    app.component('InputText', InputText)
    app.component('InputTextarea', InputTextarea)
    app.component('Pagination', Pagination)
    app.component('Dropdown', Dropdown)
    app.component('FileAvatar', FileAvatar)
    app.component('EmptyState', EmptyState)
};
