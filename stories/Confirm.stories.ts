import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ConfirmComponent } from 'projects/ambulance/src/app/shared/components/confirm/confirm.component';
import { SharedModule } from 'projects/ambulance/src/app/shared/shared.module';

export default {
  title: 'Ambulance/Confirm',
  component: ConfirmComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SharedModule],
    }),
  ],
} as Meta;

const Template: Story<ConfirmComponent> = (args: ConfirmComponent) => ({
  props: args,
});

export const ShowMessage = Template.bind({});
ShowMessage.args = {
  message: 'Are you sure you want to delete this item?',
};
