import { inject } from 'inversify-props';
import { IMessage } from 'models/IMessage';
import { computed, ComputedRef, defineComponent, onMounted, ref, Ref } from 'vue';
import { ILogHelper } from '__business/helpers/LogHelper';
import SharedLayout from '__shared/_layout/SharedLayout';

//Dependency Injection
class HomeDependenciesProvider {
    @inject()
    public logHelper: ILogHelper;
}

export default defineComponent({
    //Component Declaration
    name: 'HomeView',
    components: { SharedLayout },
    template: require('./HomeView.pug'),

    //Initial Setup
    setup() {
        //Destructuring to simplify DI usage.
        const { logHelper } = new HomeDependenciesProvider();

        //Reactive Property
        const messages: Ref<IMessage[]> = ref([]);
        
        //Computed Property
        const numberOfMessages: ComputedRef<number> = computed(() => {
            const counted = messages.value.length;
            logHelper.debug('Counted', counted);
            return counted;
        });

        //Lifecycle Hook
        onMounted(() => {
            logHelper.debug('Yolo');

            //Access through value prop.
            messages.value.push({ title: 'Test', message: 'Blip' });
        });

        //Values used in template need to be returned.
        return {
            messages,
            numberOfMessages
        }
    }
});