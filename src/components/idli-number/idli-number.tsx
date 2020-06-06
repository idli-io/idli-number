import {Component, Prop, h, EventEmitter, Event} from '@stencil/core';

@Component({
    tag: 'idli-number',
    styleUrl: 'idli-number.scss',
    shadow: true
})
export class IdliNumber {
    /**
     * The input field label.
     */
    @Prop() label: string;

    /**
     * The input field placeholder.
     */
    @Prop() placeholder: string;

    /**
     * The input field value.
     */
    @Prop() value: number;

    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    @Prop() variant: 'default' | 'dashed' = 'default';

    /**
     * If true, the form will be in inline format. Defaults to `false`.
     */
    @Prop() inline: boolean = false;

    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    @Prop() disabled: boolean = false;

    /**
     * On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input.
     */
    @Event() inputChange: EventEmitter;

    getVariantClass() {
        let variant = "variant-";
        if (!this.variant)
            variant = variant + 'default';
        else
            variant = variant + this.variant;
        return variant;
    }

    getSizeClass() {
        let size = "size-";
        if (!this.size)
            size = size + 'md';
        else
            size = size + this.size;
        return size;
    }

    getInlineClass() {
        let inline = "";
        if (this.inline)
            inline = 'inline';
        return inline;
    }

    handleInputChange(event: any) {
        if (!this.disabled) {
            const oldValue = this.value;
            this.value = event.target.value;
            this.inputChange.emit({event, oldValue, newValue: this.value});
        }
    }

    getLabelElement() {
        return <label>{this.label}</label>;
    }

    private getInputElement() {
        return <input
            class="idli-number-element"
            type='number'
            placeholder={this.placeholder}
            value={this.value}
            onInput={(event) => this.handleInputChange(event)}
            disabled={this.disabled}>
        </input>
    }

    render() {
        return <div
            class={"idli-number-component  " + this.getInlineClass() + " " + this.getVariantClass() + " " + this.getSizeClass()}>
            {[this.getLabelElement(), this.getInputElement()]}
        </div>;
    }
}
