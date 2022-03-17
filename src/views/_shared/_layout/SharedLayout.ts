import { IMessage } from 'models/IMessage';
import { computed, ComputedRef, defineComponent, PropType } from 'vue';
import { RouteRecordNormalized, useRouter } from 'vue-router';
import SharedMessage from '__shared/message/SharedMessage';

export default defineComponent({
    name: 'SharedLayout',
    components: { SharedMessage },
    template: require('./SharedLayout.pug'),
    
    setup() {
        const router = useRouter();
        
        const navLinks: ComputedRef<RouteRecordNormalized[]> = computed(() => {
            return router.getRoutes();
        });

        return {
            navLinks
        }
    },

    props: {
        messages: {
            type: Object as PropType<IMessage[]>,
            required: false 
        }
    }
});