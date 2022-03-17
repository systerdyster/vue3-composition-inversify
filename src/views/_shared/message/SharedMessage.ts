import { IMessage } from 'models/IMessage';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'SharedMessage',
    template: require('./SharedMessage.pug'),
    props: {
        message: {
            type: Object as PropType<IMessage>,
            required: false 
        }
    }
});