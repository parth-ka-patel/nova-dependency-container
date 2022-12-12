import DetailField from './components/DetailField.vue';
import FormField from './components/FormField.vue';
Nova.booting((app, router) => {
    app.component('detail-nova-dependency-container', DetailField);
    app.component('form-nova-dependency-container', FormField);
})
