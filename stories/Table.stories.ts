import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SharedModule } from 'projects/ambulance/src/app/shared/shared.module';
import { TableComponent } from 'projects/ambulance/src/app/shared/components/table/table.component';

export default {
  title: 'Ambulance/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SharedModule],
    }),
  ],
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const ShowData = Template.bind({});
ShowData.args = {
  data: [
    { id: 1, name: 'Sergio', email: 'sergio@gmail.com' },
    { id: 2, name: 'Carlos', email: 'carlos@gmail.com' },
  ],
  metaDataColumns: [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'email', title: 'Correo' },
  ],
};
