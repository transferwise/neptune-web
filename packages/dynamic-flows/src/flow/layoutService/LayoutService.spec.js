import { convertStepToLayout } from '.';

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
          type: 'title',
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
              text: option1.title,
              description: option1.description,
              action: {
                method: 'GET',
                url: option1.url,
              },
            },
            {
              text: option2.title,
              action: {
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
          type: 'title',
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
              type: 'action',
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

      const model = {
        a: 1,
      };

      const formStep = {
        type: 'form',
        key: 'create-thing',
        title: 'Step 1',
        description: 'Please create a thing',
        refreshFormUrl: '/thing-requirements',
        actions: [submitAction, cancelAction],
        reviewFields,
        model,
        schemas: [schema],
      };

      const finalLayout = [
        {
          type: 'title',
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
              type: 'action',
              context: submitAction.type,
              action: { ...submitAction, type: undefined },
            },
            {
              type: 'action',
              context: cancelAction.type,
              action: { ...cancelAction, type: undefined },
            },
          ],
        },
      ];

      expect(convertStepToLayout(formStep)).toEqual(finalLayout);
    });
  });
});
