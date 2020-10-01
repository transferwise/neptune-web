import { convertStepToLayout, inlineFormSchemas } from '.';

describe('Given a utility service for handling dynamic layouts', () => {
  describe('when we receive a decision step', () => {
    it('should convert it into a layout', () => {
      const option1 = {
        title: 'Thing one',
        description: 'The first type of thing',
        url: 'https://...',
      };

      const option2 = {
        title: 'Thing two',
        url: 'https://...',
        disabled: true,
      };

      const decisionStep = {
        type: 'decision',
        key: 'decide-thing-type',
        title: 'Thing type',
        description: 'Please choose between types of things',
        options: [option1, option2],
      };

      const decisionLayout = [
        {
          type: 'heading',
          text: decisionStep.title,
          size: 'lg',
          margin: 'lg',
          align: 'center',
        },
        {
          type: 'paragraph',
          text: decisionStep.description,
          align: 'center',
        },
        {
          type: 'decision',
          options: [
            {
              text: option1.description,
              action: {
                label: option1.title,
                method: 'GET',
                url: option1.url,
              },
            },
            {
              action: {
                label: option2.title,
                method: 'GET',
                url: option2.url,
                disabled: true,
              },
            },
          ],
        },
      ];

      expect(convertStepToLayout(decisionStep)).toEqual(decisionLayout);
    });
  });

  describe('when we receive a final step', () => {
    it('should convert it into a layout', () => {
      const exitAction = {
        title: 'Exit',
        type: 'success',
        exit: true,
        data: {
          exitValue: 'value',
        },
      };

      const finalStep = {
        type: 'final',
        key: 'thing-final',
        title: 'We create the thing!',
        description: 'You now do stuff with the thing',
        image: '/images/1234.png',
        success: true,
        action: exitAction,
      };

      const finalLayout = [
        {
          type: 'heading',
          text: finalStep.title,
          size: 'lg',
          margin: 'lg',
          align: 'center',
        },
        {
          type: 'box',
          width: 'sm',
          components: [
            {
              type: 'image',
              url: finalStep.image,
              margin: 'lg',
            },
          ],
        },
        {
          type: 'paragraph',
          text: finalStep.description,
          align: 'center',
        },
        {
          type: 'box',
          width: 'md',
          components: [
            {
              type: 'button',
              context: exitAction.type,
              action: { ...exitAction, type: undefined },
            },
          ],
        },
      ];

      expect(convertStepToLayout(finalStep)).toEqual(finalLayout);
    });
  });

  describe('when we receive a form step', () => {
    it('should convert it into a layout', () => {
      const schema = {
        id: 'thing',
        type: 'object',
        properties: {
          a: {
            type: 'integer',
          },
          b: {
            type: 'string',
          },
        },
      };

      const submitAction = {
        title: 'Submit',
        type: 'primary',
        url: '/things',
        method: 'POST',
      };

      const cancelAction = {
        title: 'Cancel',
        type: 'delete',
        exit: true,
      };

      const reviewFields = {
        title: 'A thing',
        fields: [
          {
            title: 'Label for a',
            value: 'Value of a',
          },
        ],
      };

      const formStep = {
        type: 'form',
        key: 'create-thing',
        title: 'Step 1',
        description: 'Please create a thing',
        refreshFormUrl: '/thing-requirements',
        actions: [submitAction, cancelAction],
        reviewFields,
        schemas: [schema],
      };

      const finalLayout = [
        {
          type: 'heading',
          text: formStep.title,
          size: 'lg',
          margin: 'lg',
          align: 'center',
        },
        {
          type: 'paragraph',
          text: formStep.description,
          align: 'center',
        },
        {
          type: 'review',
          text: reviewFields.title,
          definitions: [
            {
              label: reviewFields.fields[0].title,
              value: reviewFields.fields[0].value,
            },
          ],
        },
        {
          type: 'box',
          width: 'md',
          components: [
            {
              type: 'form',
              schema,
            },
          ],
        },
        {
          type: 'box',
          width: 'md',
          components: [
            {
              type: 'button',
              context: submitAction.type,
              action: { ...submitAction, type: undefined },
            },
            {
              type: 'button',
              context: cancelAction.type,
              action: { ...cancelAction, type: undefined },
            },
          ],
        },
      ];

      expect(convertStepToLayout(formStep)).toEqual(finalLayout);
    });
  });

  describe('when asked to inline schemas referenced by id', () => {
    const schemas = [
      {
        id: '#myDetails',
        type: 'object',
        properties: {
          name: { type: 'string' },
        },
      },
      {
        id: '#myAddress',
        type: 'object',
        properties: {
          address: { type: 'string' },
        },
      },
    ];

    it('should inline schema of top level form components', () => {
      const simpleLayout = [
        {
          type: 'form',
          $schema: '#myDetails',
        },
        {
          type: 'form',
          $schema: '#myAddress',
        },
      ];

      const expected = [
        {
          type: 'form',
          schema: {
            id: '#myDetails',
            type: 'object',
            properties: {
              name: { type: 'string' },
            },
          },
        },
        {
          type: 'form',
          schema: {
            id: '#myAddress',
            type: 'object',
            properties: {
              address: { type: 'string' },
            },
          },
        },
      ];

      expect(inlineFormSchemas(simpleLayout, schemas)).toEqual(expected);
    });

    it('should inline schemas inside boxes', () => {
      const boxLayout = [
        {
          type: 'box',
          components: [
            {
              type: 'form',
              $schema: '#myAddress',
            },
          ],
        },
      ];

      const expected = [
        {
          type: 'box',
          components: [
            {
              type: 'form',
              schema: {
                id: '#myAddress',
                type: 'object',
                properties: {
                  address: { type: 'string' },
                },
              },
            },
          ],
        },
      ];

      expect(inlineFormSchemas(boxLayout, schemas)).toEqual(expected);
    });

    it('should inline schemas inside columns', () => {
      const columnLayout = [
        {
          type: 'columns',
          left: [
            {
              type: 'form',
              $schema: '#myDetails',
            },
          ],
          right: [
            {
              type: 'form',
              $schema: '#myAddress',
            },
          ],
        },
      ];

      const expected = [
        {
          type: 'columns',
          left: [
            {
              type: 'form',
              schema: {
                id: '#myDetails',
                type: 'object',
                properties: {
                  name: { type: 'string' },
                },
              },
            },
          ],
          right: [
            {
              type: 'form',
              schema: {
                id: '#myAddress',
                type: 'object',
                properties: {
                  address: { type: 'string' },
                },
              },
            },
          ],
        },
      ];

      expect(inlineFormSchemas(columnLayout, schemas)).toEqual(expected);
    });
  });

  describe('when asked to inline schemas and there are no schemas', () => {
    const layout = [
      {
        type: 'heading',
        text: 'Title',
      },
      {
        type: 'paragraph',
        text: 'Lorem Ipsum',
      },
    ];

    it('should return the original layout', () => {
      expect(inlineFormSchemas(layout, undefined)).toEqual(layout);
      expect(inlineFormSchemas(layout, [])).toEqual(layout);
    });
  });

  describe('when asked to inline schemas and there is no layout', () => {
    it('should return an empty layout', () => {
      expect(inlineFormSchemas(undefined, undefined)).toEqual([]);
      expect(inlineFormSchemas(undefined, [])).toEqual([]);
    });
  });
});
