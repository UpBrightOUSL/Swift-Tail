/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import {
    Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
    required, min, max, alpha_spaces as alphaSpaces, email, min_value as minVal, max_value as maxVal, confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alphaSpaces);
        defineRule('email', email);
        defineRule('minVal', minVal);
        defineRule('maxVal', maxVal);
        defineRule('confirmed', confirmed);
        defineRule('excluded', excluded);
        defineRule('country_excluded', excluded);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required`,
                    min: `The field ${ctx.field} is too short`,
                    max: `The field ${ctx.field} is long`,
                    alpha_spaces: `The field ${ctx.field} is contains spaces`,
                    email: `The field ${ctx.field} is must be a valid email`,
                    minVal: `The field ${ctx.field} is too lwo`,
                    maxVal: `The field ${ctx.field} is is too high`,
                    confirmed: 'The password mismatch',
                    excluded: `Your are not allowed to use this value for the field ${ctx.field}`,
                    country_excluded: 'Due to restrictoins, we dont accept users from this location.',
                    tos: 'You must accept the Terms of Service',
                };
                const message = messages[ctx.rule.name]
                    ? messages[ctx.rule.name]
                    : `The field ${ctx.field} is invalid`;
                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    },
};
