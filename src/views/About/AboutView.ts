import SharedLayout from '__shared/_layout/SharedLayout';
import { defineComponent, onMounted, PropType } from 'vue';
import { ILogHelper } from '__business/helpers/LogHelper';
import { inject } from 'inversify-props';
import { IMessage } from 'models/IMessage';

export default defineComponent({
    //Component definition
    name: 'AboutView',
    components: { SharedLayout },
    template: require('./AboutView.pug'),
    
    //Initial Setup
    setup(props) {

        //Use external class
        new AboutClass().greet(props.hello);
    },

    //Props definition
    props: {
        //Simpel prop.
        hello: { type: String, required: false, default: 'yolo' },

        //Shorthand
        yolo: String,

        //When not base -type, wrap in PropType
        messages: { type: Array as PropType<IMessage[]> },

        //Shorthand
        message: Object as PropType<IMessage>
    }
});

export class AboutClass {
    @inject()
    private _logHelper: ILogHelper;

    #privateVar = 'Private!';

    public greet(greeting: string) {
        this._logHelper.debug('KK?', greeting);
        
        //Lifecycle hooks!
        onMounted(() => {
            this._logHelper.debug('Blob?', this.#privateVar);
        });
    }
}